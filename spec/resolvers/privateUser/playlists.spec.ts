import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.playlists', () => {
  let meResponse, mePlaylistsResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.playlists.playlists').then((data2) => mePlaylistsResponse = data2).then(done);
    });
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching', () => {
    let meRequest, mePlaylistsRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      mePlaylistsRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/11879785/playlists?limit=50&offset=0')
        .reply(200, mePlaylistsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.playlists[0].id).toBe('5UqllVe1ZknYIoptNFRueU');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(mePlaylistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            playlists {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});