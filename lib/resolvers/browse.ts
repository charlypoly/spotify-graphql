import { paginatorFromVariables, apiRequest, safeApiCall } from "../utils";

export function browseResolvers(spotifyApiClient: any) {
  return {

    new_releases(_, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getNewReleases',
        (response) => response.body.albums.items,
        variables
      );
    },

    featured_playlists(_, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getFeaturedPlaylists',
        (response) => response.body.playlists,
        variables
      );
    },

    categories(_, variables) {
      return paginatorFromVariables('OffsetPaging', variables)(
        spotifyApiClient,
        'getCategories',
        (response) => response.body.albums.items,
        variables
      );
    },

    category(_, variables) {
      return safeApiCall(
        spotifyApiClient,
        'getCategory',
        response => response.body.tracks,
        variables.id,
        variables
      );
    },

    genres(_, variables) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/recommendations/available-genre-seeds',
        {},
        response => response.genres
      );
    },

  };
}
