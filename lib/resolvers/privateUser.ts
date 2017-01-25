import { safeApiCall, willPaginateFactory } from '../utils';

export function privateUserResolvers(spotifyApiClient) {
  return {
    tracks(user) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getMySavedTracks',
        (response) => response.body.items
      );
    },
    playlists(user) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getUserPlaylists',
        (response) => response.body.items,
        user.id
      );
    }
  };
}