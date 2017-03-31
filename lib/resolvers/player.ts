export function playerResolvers(spotifyApiClient: any) {
  return {
    item(player: any): any[] {
      return player.item;
    },

  };
}
