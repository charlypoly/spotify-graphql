import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.artists', () => {
  let meResponse, meArtistsResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.artists.artists').then((data2) => meArtistsResponse = data2).then(() => done());
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
    let meRequest, meTopArtistsRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      meTopArtistsRequest = nock('https://api.spotify.com:443')
        .get('/v1/me/following?type=artist')
        .reply(200, meArtistsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.artists[0].id).toBe('04gDigrS5kc9YWfZHwBETP');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meTopArtistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = (e) => { throw e };

      client.query(`
        query {
          me {
            id
            artists {
               id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
