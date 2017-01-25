import { safeApiCall } from '../utils';

export function queries(spotifyApiClient) {
  return {
    audio_features(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getAudioFeaturesForTracks',
        response => response.body.audio_features,
        args.trackIds.split(',')
      );
    },

    track(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getTrack',
        null,
        args.id
      );
    },

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

    artist(root, args, context, info) {
      return safeApiCall(
        spotifyApiClient,
        'getArtist',
        null,
        args.id
      );
    }
   };
}