import { safeApiCall, willPaginateFactoryFromVariables } from '../utils';

export function privateUserResolvers(spotifyApiClient) {
  return {
    tracks(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getMySavedTracks',
        (response) => response.body.items
      );
    },
    playlists(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getUserPlaylists',
        (response) => response.body.items,
        user.id
      );
    },
    albums(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getMySavedAlbums',
        (response) => response.body.items
      );
    },
    top_tracks(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getMyTopTracks',
        (response) => response.body.items
      );
    },

    top_artists(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getMyTopArtists',
        (response) => response.body.items
      );
    },

    artists(user, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getFollowedArtists',
        (response) => response.body.artists.items
      );
    },

  };
}