import { safeApiCall } from '../utils';

export function artistResolvers(spotifyApiClient) {
  return {
    topTracks(artist, variables) {
      return safeApiCall(
        spotifyApiClient,
        'getArtistTopTracks',
        response => response.body.tracks,
        artist.id,
        variables.country || 'US' // uses https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
      );
    }
  };
}