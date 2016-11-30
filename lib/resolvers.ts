import { willPaginate, safeApiCall } from './utils';

export default (spotifyApiClient: any): any => {
  let resolverMap;

  return resolverMap = {
    Query: {
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
    },

    Track: {
      // there is no endpoint for tracks/:id/artists
      //  the artists data is already in the `track` object
      artists(track) {
        return track.artists;
      },
      // there is no endpoint for tracks/:id/album
      //  the artists data is already in the `track` object
      album(track) {
        return track.album;
      },

      audio_features(track) {
        return safeApiCall(
          spotifyApiClient,
          'getAudioFeaturesForTrack',
          null,
          track.id
        );
      }
    },

    Artist: {
      topTracks(artist) {
        return safeApiCall(
          spotifyApiClient,
          'getArtistTopTracks',
          response => response.body.tracks,
          artist.id,
          'FR' // to fix...
        );
      }
    },

    Album: {
      // there is no endpoint for albums/:id/artists
      //  the artists data is already in the `album` object
      artists(album) {
        return album.artists;
      },
    },

    Playlist: {
      tracks(playlist) {
        return safeApiCall(
          spotifyApiClient,
          'getPlaylistTracks',
          response => response.body.items,
          playlist.owner.id,
          playlist.id
        );
      }
    },

    PrivateUser: {
      tracks(user) {
        return willPaginate(spotifyApiClient, 'getMySavedTracks', (response) => response.body.items);
      },
      playlists(user) {
        return safeApiCall(
          spotifyApiClient,
          'getUserPlaylists',
          response => response.body.items,
          user.id
        );
      }
    }
  };

};