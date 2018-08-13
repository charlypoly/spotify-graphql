import { clearCache } from '../../lib/utils';
import { loadFixture } from '../helpers';
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query : playlist(id: String): Playlist', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.playlist').then((data) => response = data).then(() => done());
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Playlist', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/users/spotify/playlists/5UqllVe1ZknYIoptNFRueU')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.playlist.name).toBe('This Is: Daft Punk')
        expect(data.playlist.id).toBe('5UqllVe1ZknYIoptNFRueU')
        expect(data.playlist.images[0].url).toBe('https://u.scdn.co/images/pl/default/70d4565bfd6f51ad19de67b47cc91c156bf5dacd');
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          playlist(id: "5UqllVe1ZknYIoptNFRueU", userId: "spotify") {
            id
            name
            images {
              url
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
