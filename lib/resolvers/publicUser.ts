import { safeApiCall, willPaginateFactoryFromVariables } from '../utils';

export function publicUserResolvers(spotifyApiClient) {
  return {
    playlists(user, variables) {
      return willPaginateFactoryFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getUserPlaylists',
        (response) => response.body.items,
        user.id
      );
    }
  };
}