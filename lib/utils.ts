const when: any = require('when');

// Given a method on 'spotify-web-api-node', use Spotify Web API `offset`, `limit` and `total`
//  fields in response to make a promised-based iteration
//
// Example
//  wrapCallForPaging(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);
//
export function wrapCallForPaging (client, method, formatter, ...args): Promise<any> {
  const offset   = args.offset || 0;
  const limit  = args.limit || 50;

  return new Promise( (mainResolve, mainReject) => {
    when.iterate((iterator) => {
          return new Promise( (resolve, reject) => {
            client[method].apply(client, [{ limit: iterator.limit, offset: iterator.limit + iterator.offset }]).then((response) => {
                iterator.results = iterator.results.concat(formatter(response));
                iterator.offset = response.body.offset;
                iterator.total = response.body.total;
                resolve(iterator);
            }, reject).catch(reject);
          });
        }, (iterator)  => {
          return !!iterator.total && ((iterator.offset + iterator.limit) >= iterator.total);
        }, (iterator) => { }, {
        results: [],
        total: null,
        offset: offset,
        limit: limit
      }).then(result => mainResolve(result.results), mainReject).catch(mainReject);
  });
}