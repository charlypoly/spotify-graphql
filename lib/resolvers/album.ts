export function albumResolvers(spotifyApiClient) {
  return {
    // there is no endpoint for albums/:id/artists
    //  the artists data is already in the `album` object
    artists(album) {
      return album.artists;
    },
  };
}