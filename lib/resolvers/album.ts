import { willPaginateFactoryFromVariables, limitConcurency } from '../utils';
const poll: (callback: Function, delay: number, predicate: Function) => any = require('when/poll');

export function albumResolvers(spotifyApiClient) {
  let limitConcurencyAlbumTracks = limitConcurency('Album.tracks');
  return {
    // there is no endpoint for albums/:id/artists
    //  the artists data is already in the `album` object
    artists(album) {
      return album.artists;
    },

    // a playlist can have a large amount of tracks,
    //   so we use `limitConcurency()` helper to avoid
    //   massive API calls at once
    tracks(album, variables) {
      let executed = false;
      return limitConcurencyAlbumTracks((lock) => {
        return poll(() => {
          if (!lock()) {
            lock(true);
            return willPaginateFactoryFromVariables('OffsetPaging', variables)(
              spotifyApiClient,
              'getAlbumTracks',
              response => response.body.items,
              album.id
            ).then( (tracks) => {
              lock(false);
              executed = true;
              return tracks;
            });
          }
        }, 2, () => executed);
      });
    }
  };
}