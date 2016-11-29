const when: any = require('when');

// Given a method on 'spotify-web-api-node', use Spotify Web API `offset`, `limit` and `total`
//  fields in response to make a promised-based iteration
//
// Example
//  wrapCallForPaging(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);

interface SpotifyWebAPIClientOptions {
  offset?: string
  limit?: string
  [key: string]: string
}

export function willPaginate (client: any, method: string, formatter: Function, ...args): Promise<any> {
  const options: SpotifyWebAPIClientOptions = args.length > 1 ? args[args.length - 1] : {};
  const offset = options.offset || 0;
  const limit  = options.limit || 50;

  return new Promise( (mainResolve, mainReject) => {
    when.iterate((iterator) => {
          return new Promise( (resolve, reject) => {
            const newArgs = Array.from(args).concat([{ limit: iterator.limit, offset: iterator.offset }]);
            client[method].apply(client, newArgs).then((response) => {
                iterator.results = iterator.results.concat(formatter(response));
                iterator.offset = response.body.offset + iterator.limit;
                iterator.total = response.body.total;
                resolve(iterator);
            }, reject).catch(reject);
          });
        }, (iterator)  => {
          return !!iterator.total && (iterator.results.length >= iterator.total);
        }, (iterator) => { }, {
        results: [],
        total: null,
        offset: offset,
        limit: limit
      }).then(result => mainResolve(result.results), mainReject).catch(mainReject);
  });
}