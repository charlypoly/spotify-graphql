import { clearCache } from "../../lib/utils";
import { loadFixture } from "../helpers";
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query : albums(ids: String): [Album]', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.albums').then((data) => response = data).then(done);
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching existing Albums', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.albums[0].name).toBe('TRON: Legacy Reconfigured')
        expect(data.albums[0].id).toBe('382ObEPsp2rxGrnsizN5TX')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          albums(ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});