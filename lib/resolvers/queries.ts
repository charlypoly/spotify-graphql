import { safeApiCall, apiRequest } from '../utils';
import { escape } from 'lodash';

// tslint:disable-next-line:max-func-body-length
export function queries(spotifyApiClient) {
  return {
    playlist(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getPlaylist',
        null,
        args.userId,
        args.id
      );
    },
    // User queries
    me(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getMe',
      );
    },

    user(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getUser',
        null,
        args.id
      );
    },
    // Track queries
    track(root, args, context, info) {
      if (args.name) {
        return safeApiCall(
          spotifyApiClient,
          'searchTracks',
          null,
          args.name
        ).then( (results: any) => {
          if (results.tracks && results.tracks.items.length) {
            let result: any = results.tracks.items[0];
            return safeApiCall(
              spotifyApiClient,
              'getTrack',
              null,
              result.id
            );
          } else {
            return null;
          }
        });
      } else {
        return safeApiCall(
          spotifyApiClient,
          'getTrack',
          null,
          args.id
        );
      }
    },
    tracks(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getTracks',
        (response) => response.body.tracks,
        args.ids.split(',')
      );
    },

    audio_features(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getAudioFeaturesForTracks',
        response => response.body.audio_features,
        args.trackIds.split(',')
      );
    },
    audio_feature(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getAudioFeaturesForTrack',
        null,
        args.trackId
      );
    },
    // Artist queries
    artist(root, args, context, info) {
      if (args.name) {
        return safeApiCall(
          spotifyApiClient,
          'searchArtists',
          null,
          args.name
        ).then( (results: any) => {
          if (results.artists && results.artists.items.length) {
            let result: any = results.artists.items[0];
            return safeApiCall(
              spotifyApiClient,
              'getArtist',
              null,
              result.id
            );
          } else {
            return null;
          }
        });
      } else {
        return safeApiCall(
          spotifyApiClient,
          'getArtist',
          null,
          args.id
        );
      }
    },
    artists(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getArtists',
        (response) => response.body.artists,
        args.ids.split(',')
      );
    },
    // Album queries
    album(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getAlbum',
        null,
        args.id
      );
    },
    albums(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getAlbums',
        (response) => response.body.albums,
        args.ids.split(',')
      );
    },

    // TODO: add support for paginator
    featured_playlists(root, args, context, info) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/browse/featured-playlists',
        {},
        (response) => response.playlists.items,
      );
    },

    // TODO: add support for paginator and full album object
    new_releases(root, args, context, info) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/browse/new-releases',
        {},
        (response) => response.albums.items,
      );
    },

    // TODO: add support for paginator
    categories(root, args, context, info) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/browse/categories',
        {},
        (response) => response.categories.items,
      );
    },

    category(root, args, context, info) {
      return apiRequest(spotifyApiClient)(
        `https://api.spotify.com/v1/browse/categories/${escape(args.id)}`
      );
    },

    genres(root, args, context, info) {
      return apiRequest(spotifyApiClient)(
        'https://api.spotify.com/v1/recommendations/available-genre-seeds',
        {},
        (response) => response.genres,
      );
    },
   };
}
