const when: any = require('when');
import { isObject } from 'lodash';

interface SpotifyWebAPIClientOptions {
  offset?: string
  limit?: string
  [key: string]: string
}

// Given a method on 'spotify-web-api-node', use Spotify Web API `offset`, `limit` and `total`
//  fields in response to make a promised-based iteration
//
// Example
//  willPaginateFactory({})(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);
export function willPaginateFactory({ throttleDelay = 0, debug = false, continueOnError = false }) {
  return function willPaginate (client: any, method: string, formatter: Function, ...args): Promise<any> {
    const options: SpotifyWebAPIClientOptions = args.length > 1 ? args[args.length - 1] : {};
    const offset = options.offset || 0;
    const limit  = options.limit || 50;
    const argsArray = Array.from(args);
    if (argsArray.length > 1 && isObject(argsArray[ argsArray.length - 1 ])) {
      let queryStrings = argsArray[ argsArray.length - 1 ];
      queryStrings.limit = queryStrings.offset = null;
    } else {
      argsArray.push({limit: null, offset: null});
    }

    return new Promise( (mainResolve, mainReject) => {
      when.iterate((iterator) => {
            return new Promise( (resolve, reject) => {
              const newArgs = Array.from(argsArray);
              let queryStrings = newArgs[newArgs.length - 1];
              queryStrings.limit = iterator.limit;
              queryStrings.offset = iterator.offset;

              client[method].apply(client, newArgs).then((response) => {
                  iterator.results = iterator.results.concat(formatter(response));
                  // move cursor
                  iterator.offset = response.body.offset + iterator.limit;
                  iterator.total = response.body.total;
                  resolve(iterator);
              }).catch(error => {
                if(continueOnError) {
                  // move cursor
                  iterator.offset = iterator.offset + iterator.limit;
                  resolve(iterator);
                } else {
                  reject(error);
                }
              });
            });
          }, (iterator)  => {
            if(debug && iterator.total != null) {
              console.log(`iterate: ${method}`, `${iterator.offset} >= ${iterator.total}`);
            }
            // TODO: add `maxResults` in condition
            return !!iterator.total && (iterator.offset >= iterator.total);
          }, (iterator) => {
            return new Promise( (resolve, reject) => {
              setTimeout(resolve, throttleDelay);
            });
          }, {
          results: [],
          total: null,
          offset: offset,
          limit: limit
        }).then(result => mainResolve(result.results)).catch(mainReject);
    });
  };
}

// Allow to build a paginator using options directly from GraphQL variables
export function willPaginateFactoryFromVariables(variables) {
  return willPaginateFactory({
    throttleDelay: !!variables.throttle ? variables.throttle : 0,
    debug: variables.debug == 1,
    continueOnError: variables.continueOnError == 1
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