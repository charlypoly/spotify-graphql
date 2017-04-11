import { paginatorFromVariables, syncedPoll } from '../utils';

export function albumResolvers(spotifyApiClient) {
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
      return syncedPoll('Album.tracks', () => {
        return paginatorFromVariables('OffsetPaging', variables)(
          spotifyApiClient,
          'getAlbumTracks',
          response => response.body.items,
          album.id
        ).then( (tracks) => {
          return tracks;
        });
      }, variables.throttle || 2);
    }
  };
}