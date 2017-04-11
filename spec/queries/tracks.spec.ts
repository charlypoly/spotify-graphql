import { clearCache } from '../../lib/utils';
import { loadFixture } from '../helpers';
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: tracks(ids: String): [Track]', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.tracks').then((data) => response = data).then(done);
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching existing Tracks', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.tracks[0].name).toBe('Knights Of Cydonia')
        expect(data.tracks[0].id).toBe('7ouMYWpwJ422jRcDASZB7P')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          tracks(ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});