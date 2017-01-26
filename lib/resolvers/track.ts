import { safeApiCall, limitConcurency } from '../utils';
const poll: (callback: Function, delay: number, predicate: Function) => any = require('when/poll');

export function trackResolvers(spotifyApiClient) {
  let limitConcurencyTrackAlbum = limitConcurency('Track.album');
  return {
    // there is no endpoint for tracks/:id/artists
    //  the artists data is already in the `track` object
    artists(track) {
      return track.artists;
    },
    // an artist can have a large amount of albums,
    //   so we use `limitConcurency()` helper to avoid
    //   massive API calls at once
    album(track, variables) {
      if(!!variables.full) {
        let executed = false;
        return limitConcurencyTrackAlbum((lock) => {
          return poll(() => {
            if (!lock()) {
              lock(true);
              return safeApiCall(
                spotifyApiClient,
                'getAlbum',
                null,
                track.album.id
              ).then( (album) => {
                lock(false);
                executed = true;
                return album;
              });
            }
          }, 2, () => executed);
        });
      } else {
        return Promise.resolve(track.album);
      }
    },

    audio_features(track) {
      return safeApiCall(
        spotifyApiClient,
        'getAudioFeaturesForTrack',
        null,
        track.id
      );
    }
  };
}