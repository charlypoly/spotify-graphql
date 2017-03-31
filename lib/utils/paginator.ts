const when: any = require('when');
import { isObject, merge } from 'lodash';


// We support 2 types of paging strategies
// - cursor based
// - offset based
export type PagingStrategyType = 'CursorPaging' | 'OffsetPaging';

// Represent an paging iterator
interface IPagingIterator {
  total: number;
  limit: number;
  results: any[];
}

interface ICursorPagingIterator extends IPagingIterator {
  _type: 'cursor';
  after: string;
}

interface IOffsetPagingIterator extends IPagingIterator {
  _type: 'offset';
  offset: number;
}

type anyPagingIterator = ICursorPagingIterator | IOffsetPagingIterator;

// Given an iterator, return a querystring object
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

// Given a update object (API response), update the iterator state
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

// Given an iterator, returns if we should go to next iteration
function shouldStopIterate(iterator: anyPagingIterator, maxResults: number): boolean {
  switch (iterator._type) {
    case 'cursor':
      if (!!iterator.total) {
        return iterator.results.length >= maxResults ||
          iterator.results.length >= iterator.total || !iterator.after;
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

// Create a new iterator given a strategy
function createIterator(strategy: PagingStrategyType, maxResults: number): anyPagingIterator {
  switch (strategy) {
    case 'OffsetPaging':
      return <IOffsetPagingIterator>{
        _type: 'offset',
        results: [],
        total: null,
        offset: 0,
        limit: isFinite(maxResults) ? maxResults : 50,
      };
    case 'CursorPaging':
      return <ICursorPagingIterator>{
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



// Given a method on 'spotify-web-api-node' and a paging strategy, this Spotify Web API `offset/after`, `limit` and `total`
//  fields in response to make a promised-based iteration
//
// Example
//  willPaginateFactory('OffsetPaging', {})(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);
export function paginatorFactory(strategy: PagingStrategyType, { throttleDelay = 0, continueOnError = false, limit = 50 }) {
  let maxResults: number = limit <= 0 ? Infinity : limit;
  let newIterator: anyPagingIterator = createIterator(strategy, maxResults);

  return function paginator (client: any, method: string, formatter: Function, ...args): Promise<any> {
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
          return shouldStopIterate(iterator, maxResults);
        },
        (iterator) => {
          return new Promise( (resolve, reject) => {
            // tslint:disable-next-line:no-string-based-set-timeout
            setTimeout(resolve, throttleDelay);
          });
        },
        newIterator,
      ).then(result => mainResolve(result.results)).catch(mainReject);
    });
  };
}

// Allow to build a paginator using options directly from GraphQL variables
export interface IPaginatorFromVariablesOptions {
  throttle?: number;
  debug?: number;
  continueOnError?: number;
  limit?: number;
}
export function paginatorFromVariables(strategy: PagingStrategyType, variables: IPaginatorFromVariablesOptions) {
  return paginatorFactory(strategy, {
    throttleDelay: !!variables.throttle ? variables.throttle : 0,
    continueOnError: variables.continueOnError === 1,
  });
}