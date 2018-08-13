import { clearCache } from '../../lib/utils';
import { loadFixture } from '../helpers';
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: user(id: ...): PublicUser', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.user').then((data) => response = data).then(() => done());
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing User', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/users/11879785')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.user.display_name).toBe('Charly Poly')
        expect(data.user.id).toBe('11879785')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          user(id: "11879785") {
            id
            display_name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });


});
