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
    }
  };
}