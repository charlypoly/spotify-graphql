export default (spotifyApiClient: any): any => {
  let resolverMap;

  return resolverMap = {
    Query: {
      track(root, args, context, info) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getTrack(args.id).then((response) => {
            resolve(response.body);
          }, reject);
        });
      },
      me(root, args, context, info) {
        // args.load
        return [];
      },
      user(root, args, context, info) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getUser(args.id).then((response) => {
            resolve(response.body);
          }, reject);
        });
      },
      artist(root, args, context, info) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getArtist(args.id).then((response) => {
            resolve(response.body);
          }, reject);
        });
      }
    },

    Track: {
      artists(track) {
        return track.artists;
      },

      album(track) {
        return track.album;
      },
    },

    Artist: {
      topTracks(artist) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getArtistTopTracks(artist.id, 'FR').then((response) => {
            resolve(response.body.tracks);
          }, reject);
        });
      }
    },

    Album: {
      artists(album) {
        return album.artists;
      },
    },

    Playlist: {
      tracks(playlist) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getPlaylistTracks(playlist.owner.id, playlist.id).then((response) => {
            resolve(response.body.items);
          }, reject);
        });
      },
    },

    PrivateUser: {
      tracks(user) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getMySavedTracks().then((response) => {
            resolve(response.body.items);
          }, reject);
        });
      },
      playlists(user) {
        return new Promise( (resolve, reject) => {
          spotifyApiClient.getUserPlaylists(user.id).then((response) => {
            resolve(response.body.items);
          }, reject);
        });
      }
    }
  };

};