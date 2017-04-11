import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : user.playlists', () => {

  let userResponse, userPlaylistsResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.publicUser.playlists.user').then((data) => {
      userResponse = data;
      loadFixture('resolvers.publicUser.playlists.userPlaylists').then((data2) => userPlaylistsResponse = data2).then(done);
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
    let userRequest, userPlaylistsRequest;
    beforeEach(() => {
      userRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/11879785')
        .reply(200, userResponse);
      userPlaylistsRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/11879785/playlists?limit=50&offset=0')
        .reply(200, userPlaylistsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.user.playlists[0].id).toBe('5UqllVe1ZknYIoptNFRueU');
        expect(!!executionResult.errors).toBeFalsy();
        expect(userRequest.isDone()).toBeTruthy();
        expect(userPlaylistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          user(id: "11879785") {
            id
            playlists {
              id
              name
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});