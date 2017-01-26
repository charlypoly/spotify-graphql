import { willPaginateFactoryFromVariables } from '../utils';
import { safeApiCall } from '../utils';

export function artistResolvers(spotifyApiClient) {
  return {
    top_tracks(artist, variables) {
      return safeApiCall(
        spotifyApiClient,
        'getArtistTopTracks',
        response => response.body.tracks,
        artist.id,
        variables.country || 'US' // uses https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
      );
    },

    albums(artist, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getArtistAlbums',
        (response) => response.body.items,
        artist.id
      );
    },

    related_artists(artist, variables) {
      return safeApiCall(
        spotifyApiClient,
        'getArtistRelatedArtists',
        (response) => response.body.artists,
        artist.id
      );
    }
  };
}