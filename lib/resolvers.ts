import { willPaginateFactory, safeApiCall } from './utils';
const poll: (callback: Function, delay: number, predicate: Function) => any = require('when/poll');

export default (spotifyApiClient: any): any => {
  let resolverMap;

  let playlistPollingLock = false;

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
      // When too many playlists, use a polling strategy to avoid
      //  making to many requests at once !
      tracks(playlist, variables) {
        let executed = false;
        return poll(() => {
          if (!playlistPollingLock) {
            playlistPollingLock = true;
            return willPaginateFactory({ throttleDelay: variables.throttle, debug: variables.debug == 1 , continueOnError: variables.continueOnError == 1 })(
              spotifyApiClient,
              'getPlaylistTracks',
              response => response.body.items,
              playlist.owner.id,
              playlist.id
            ).then( (tracks) => { playlistPollingLock = false; executed = true; return tracks; })
          }
        }, 2, () => executed);
      }
    },

    PrivateUser: {
      tracks(user) {
        return willPaginateFactory({})(
          spotifyApiClient,
          'getMySavedTracks',
          (response) => response.body.items
        );
      },
      playlists(user) {
        return willPaginateFactory({})(
          spotifyApiClient,
          'getUserPlaylists',
          (response) => response.body.items,
          user.id
        );
      }
    }
  };

};