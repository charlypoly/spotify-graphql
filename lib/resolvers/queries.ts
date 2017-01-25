import { safeApiCall } from '../utils';

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
      return safeApiCall(
        spotifyApiClient,
        'getTrack',
        null,
        args.id
      );
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
      return safeApiCall(
        spotifyApiClient,
        'getArtist',
        null,
        args.id
      );
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
    }
   };
}