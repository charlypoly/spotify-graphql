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

    // variables.album_type values:
    // - album
    // - single
    // - appears_on
    // - compilation
    albums(artist, variables) {
      return willPaginateFactoryFromVariables(variables)(
        spotifyApiClient,
        'getArtistAlbums',
        (response) => response.body.items,
        artist.id,
        variables.album_type ? { album_type: variables.album_type } : {}
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