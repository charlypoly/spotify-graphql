import { safeApiCall, syncedPoll } from '../utils';
import * as _ from 'lodash';
const sequence: any = require('when/sequence');

export function trackResolvers(spotifyApiClient) {
  return {
    artists(track: any, variables: any) {
      if (!!variables.full) {
        return syncedPoll('Track.artists', () => {
            // This part is hacky.
            //  Since Spotify Web API do not provide album
            //  /track/:id/artists, we need to call
            //  /artists?ids=... by chunk of 50 ids.
            return new Promise((resolve, reject) => {
              let queries: any = _(track.artists).
                map('id').
                compact().
                chunk(50).
                map((idsToQuery: any[]) => {
                  return (): Promise<any> => {
                    return safeApiCall(
                      spotifyApiClient,
                      'getArtists',
                      (response) => response.body.artists,
                      idsToQuery
                    );
                  };
                });
              sequence(Array.from(queries)).then(
                (results) => {
                  resolve(_(results).flatten());
                },
                (e) => {
                  reject(e);
                }
              );
            });
        }, variables.throttle || 5);
      } else {
        return track.artists;
      }
    },
    // an artist can have a large amount of albums,
    //   so we use `limitConcurency()` helper to avoid
    //   massive API calls at once
    album(track, variables) {
      if(!!variables.full) {
        return syncedPoll('Track.album', () => {
          return safeApiCall(
            spotifyApiClient,
            'getAlbum',
            null,
            track.album.id
          ).then( (album) => {
            return album;
          });
        }, variables.throttle || 5);
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
