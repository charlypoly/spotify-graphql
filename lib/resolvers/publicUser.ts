import { safeApiCall, paginatorFromVariables } from '../utils';

export function publicUserResolvers(spotifyApiClient) {
  return {
    playlists(user, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getUserPlaylists',
        (response) => response.body.items,
        user.id
      );
    }
  };
}