import { apiRequest } from '../utils';

export function playerResolvers(spotifyApiClient: any) {
  return {
    item(player: any): any[] {
      return player.item;
    },

    // TODO: add support for paginator
    recently_played(user, variables) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/me/player/recently-played',
        {},
        (response) => response.items
      );
    },

  };
}
