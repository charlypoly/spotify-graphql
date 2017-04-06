import { toString } from 'lodash';
import { LRUMap } from 'lru_map';

// Wrapper around 'spotify-web-api-node' methods to enable simpler DSL
// and better error management (promise-way)
//   Example :
//     safeApiCall(myClient, 'geMe', (results) => results.me.name).then()
export function safeApiCall(client: any, method: string, formatter?: Function, ...args): Promise<any> {
  // tslint:disable-next-line:comment-format
  // console.log('safeApiCall', method);
  return cache(method, args, client[method].apply(client, args).then((response) => {
      return Promise.resolve(!!formatter ? formatter(response) : response.body);
    })
  );
}

let cacheMap: LRUMap<{}, {}> = new LRUMap(50);

export function clearCache(): void {
  cacheMap.clear();
}

function cache(method: string, args: any[], value: Promise<any>): Promise<any> {
  let key: string = toString([method].concat(args));
  if (cacheMap.has(key)) {
    // tslint:disable-next-line:comment-format
    // console.log('CACHE HIT');
    return Promise.resolve(cacheMap.get(key));
  } else {
    // tslint:disable-next-line:comment-format
    // console.log('CACHE MISS');
    return new Promise( (resolve, reject) => {
      value.then(
        (val) => {
          cacheMap.set(key, val);
          resolve(cacheMap.get(key));
        },
        reject
      );
    });
  }
}
