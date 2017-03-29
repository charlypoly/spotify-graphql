import { safeApiCall, paginatorFromVariables } from '../utils';

export function privateUserResolvers(spotifyApiClient) {
  return {
    tracks(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getMySavedTracks',
        (response) => response.body.items
      );
    },
    playlists(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getUserPlaylists',
        (response) => response.body.items,
        user.id
      );
    },
    albums(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getMySavedAlbums',
        (response) => response.body.items
      );
    },
    top_tracks(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getMyTopTracks',
        (response) => response.body.items
      );
    },

    top_artists(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getMyTopArtists',
        (response) => response.body.items
      );
    },

    artists(user, variables) {
      return paginatorFromVariables('CursorPaging', variables)(
        spotifyApiClient,
        'getFollowedArtists',
        (response) => response.body.artists.items
      );
    },

  };
}