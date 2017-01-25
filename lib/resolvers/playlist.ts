import { safeApiCall, willPaginateFactory, limitConcurency } from '../utils';
const poll: (callback: Function, delay: number, predicate: Function) => any = require('when/poll');

export function playlistResolvers(spotifyApiClient) {
  let limitConcurencyPlaylistTracks = limitConcurency('Playlist.tracks');
  return {
    // an playst can have a large amount of tracks,
    //   so we use `limitConcurency()` helper to avoid
    //   massive API calls at once
    tracks(playlist, variables) {
      let executed = false;
      return limitConcurencyPlaylistTracks((lock) => {
        return poll(() => {
          if (!lock()) {
            lock(true);
            return willPaginateFactoryFromVariables(variables)(
              spotifyApiClient,
              'getPlaylistTracks',
              response => response.body.items,
              playlist.owner.id,
              playlist.id
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