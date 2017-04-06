import { clearCache } from "../../lib/utils";
import { loadFixture } from "../helpers";
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: me(): PrivateUser', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.me').then((data) => response = data).then(done);
  });


  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Album', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.display_name).toBe('Charly Poly')
        expect(data.me.id).toBe('11879785')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            display_name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});