import { clearCache } from '../../../lib/utils';
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Playlist.tracks', () => {
  let playlistResponse, playlistTracksResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.playlist.tracks.playlists').then((data) => {
      playlistResponse = data;
      loadFixture('resolvers.playlist.tracks.playlistTracks').then((data2) => playlistTracksResponse = data2).then(done);
    });
  });


  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Artist', () => {
    let playlistRequest, playlistTracksRequest;
    beforeEach(() => {
      playlistRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/spotify/playlists/5UqllVe1ZknYIoptNFRueU')
        .reply(200, playlistResponse);
      playlistTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/spotify/playlists/5UqllVe1ZknYIoptNFRueU/tracks?limit=50&offset=0')
        .reply(200, playlistTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.playlist.name).toBe('This Is: Daft Punk')
        expect(data.playlist.id).toBe('5UqllVe1ZknYIoptNFRueU')
        expect(data.playlist.tracks[0].track.id).toBe('7lQqaqZu0vjxzpdATOIsDt')
        expect(!!executionResult.errors).toBeFalsy();
        expect(playlistRequest.isDone()).toBeTruthy();
        expect(playlistTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          playlist(id: "5UqllVe1ZknYIoptNFRueU", userId: "spotify") {
            id
            name
            tracks {
              track {
                id
              }
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});