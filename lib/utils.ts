const when: any = require('when');
import { isObject, merge } from 'lodash';

interface SpotifyWebAPIClientOptions {
  offset?: number;
  limit?: number;
  [key: string]: number | string;
}


export type PagingStrategyType = 'CursorPaging' | 'OffsetPaging';

interface PagingIterator {
  total: number;
  limit: number;
  results: any[];
}

interface CursorPagingIteratorCursor {
  after: string;
}

interface CursorPagingIterator extends PagingIterator, CursorPagingIteratorCursor {
  _type: 'cursor';
}

interface OffsetPagingIteratorCursor {
  offset: number;
}

interface OffsetPagingIterator extends PagingIterator, OffsetPagingIteratorCursor {
  _type: 'offset';
}

type anyPagingIterator = CursorPagingIterator | OffsetPagingIterator;

function iteratorToQueryString(iterator: anyPagingIterator): any {
  switch (iterator._type) {
    case 'cursor':
      return iterator.after ? { after: iterator.after } : {};

    case 'offset':
      return { limit: iterator.limit, offset: iterator.offset };

      default:
        break;
  }
}

function updateIterator(iterator: anyPagingIterator, update: any): anyPagingIterator {
  switch (iterator._type) {
    case 'cursor':
      let ressourceKeys: string[] = Object.keys((<any>update));
      // Tree traversal (only first level)
      for (let key of ressourceKeys) {
        if ((<any>update)[key].cursors) {
          iterator.after = (<any>update)[key].cursors.after;
          iterator.total = (<any>update)[key].total;
        }
      }
      break;
    case 'offset':
      if (update) {
        iterator.offset = (<any>update).offset + iterator.limit;
        iterator.total = (<any>update).total;
      } else {
        iterator.offset = iterator.offset + iterator.limit;
      }
      break;
      default:
        break;
  }

  return iterator;
}

function stopIterate(iterator: anyPagingIterator, maxResults: number): boolean {
  switch (iterator._type) {
    case 'cursor':
      if (!!iterator.total) {
        return iterator.results.length >= iterator.total || !iterator.after;
      } else {
        return false;
      }

    case 'offset':
      if (!!iterator.total) {
        if (iterator.offset >= iterator.total) {
          return true;
        } else {
          return iterator.offset >= maxResults;
        }
      } else {
        return false;
      }
      default:
        break;
  }
}

function createIterator(strategy: PagingStrategyType, maxResults): anyPagingIterator {
  switch (strategy) {
    case 'OffsetPaging':
      return <OffsetPagingIterator>{
        _type: 'offset',
        results: [],
        total: null,
        offset: 0,
        limit: isFinite(maxResults) ? maxResults : 50,
      };
    case 'CursorPaging':
      return <CursorPagingIterator>{
        _type: 'cursor',
        results: [],
        total: null,
        after: '',
        limit: isFinite(maxResults) ? maxResults : 50,
      };
    default:
      break;
  }
}



// Given a method on 'spotify-web-api-node', use Spotify Web API `offset`, `limit` and `total`
//  fields in response to make a promised-based iteration
//
// Example
//  willPaginateFactory({})(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);
export function willPaginateFactory(strategy: PagingStrategyType, { throttleDelay = 0, continueOnError = false, limit = 50 }) {
  let maxResults: number = limit <= 0 ? Infinity : limit;
  let newIterator: anyPagingIterator = createIterator(strategy, maxResults);

  return function willPaginate (client: any, method: string, formatter: Function, ...args): Promise<any> {
    const options: SpotifyWebAPIClientOptions = args.length > 1 ? args[args.length - 1] : {};
    const argsArray: any[] = Array.from(args);
    if (argsArray.length > 1 && isObject(argsArray[ argsArray.length - 1 ])) {
      let queryStrings: {[k: string]: string} = argsArray[ argsArray.length - 1 ];
      merge(queryStrings, iteratorToQueryString(createIterator(strategy, maxResults)));
    } else {
      argsArray.push(
        iteratorToQueryString(createIterator(strategy, maxResults))
      );
    }

    return new Promise( (mainResolve, mainReject) => {
      when.iterate(
        (iterator: anyPagingIterator) => {
          // tslint:disable-next-line:comment-format
          // console.log('iterate', iterator);
          return new Promise( (resolve, reject) => {
            const newArgs: any[] = Array.from(argsArray);
            let queryStrings: {[k: string]: string} = newArgs[newArgs.length - 1];
            merge(queryStrings, iteratorToQueryString(iterator));
            // tslint:disable-next-line:comment-format
            // console.log('queryStrings', queryStrings);

            client[method].apply(client, newArgs).then((response) => {
                iterator.results = iterator.results.concat(formatter(response));
                // Move cursor
                iterator = updateIterator(iterator, response.body);
                // tslint:disable-next-line:comment-format
                // console.log('updateIterator', iterator);
                resolve(iterator);
            }).catch(error => {
              if (continueOnError) {
                // Move cursor
                iterator = updateIterator(iterator, null);
                resolve(iterator);
              } else {
                reject(error);
              }
            });
          });
        },
        (iterator: anyPagingIterator)  => {
          // tslint:disable-next-line:comment-format
          // console.log('stopIterate?', stopIterate(iterator, maxResults));
          return stopIterate(iterator, maxResults);
        },
        (iterator) => {
          return new Promise( (resolve, reject) => {
            setTimeout(resolve, throttleDelay);
          });
        },
        newIterator,
      ).then(result => mainResolve(result.results)).catch(mainReject);
    });
  };
}

// Allow to build a paginator using options directly from GraphQL variables
export interface WillPaginateFactoryFromVariablesOptions {
  throttle?: number;
  debug?: number;
  continueOnError?: number;
  limit?: number;
}
export function willPaginateFactoryFromVariables(strategy: PagingStrategyType, variables: WillPaginateFactoryFromVariablesOptions) {
  return willPaginateFactory(strategy, {
    throttleDelay: !!variables.throttle ? variables.throttle : 0,
    continueOnError: variables.continueOnError === 1,
  });
}

// Wrapper around 'spotify-web-api-node' methods to enable simpler DSL
// and better error management (promise-way)
//   Example :
//     safeApiCall(myClient, 'geMe', (results) => results.me.name).then()
export function safeApiCall(client, method, formatter?: Function, ...args) {
  return new Promise( (resolve, reject) => {
    client[method].apply(client, args).
        then( (response) => {
          resolve(!!formatter ? formatter(response) : response.body);
        }, (error) => {
          reject(error);
        });
  });
}

// Partial Application pattern to create a concurency lambda
export function limitConcurency(name: string) {
  let locks = {};
  locks[name] = false;
  return (context: Function) => {
    function lockGetterSetter(lock?: boolean) {
      if(typeof lock !== 'undefined') {
        locks[name] = lock;
      } else {
        return locks[name];
      }
    }
    return context(lockGetterSetter);
  };
}