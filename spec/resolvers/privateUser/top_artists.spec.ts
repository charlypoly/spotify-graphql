import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.top_artists', () => {
  let meResponse, meTopArtistsResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.top_artists.artists').then((data2) => meTopArtistsResponse = data2).then(() => done());
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
        .get('/v1/me/top/artists?limit=50&offset=0')
        .reply(200, meTopArtistsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.top_artists[0].id).toBe('6nxWCVXbOlEVRexSbLsTer');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meTopArtistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            top_artists {
               id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
