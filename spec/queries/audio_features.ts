import { clearCache } from "../../lib/utils";
import { loadFixture } from "../helpers";
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: audio_features(trackIds: String): [AudioFeatures]', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.audio_features').then((data) => response = data).then(done);
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching AudioFeatures for existing Tracks', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/audio-features?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.audio_features[0].id).toBe('7ouMYWpwJ422jRcDASZB7P')
        expect(data.audio_features[0].danceability).toBe('0.366')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          audio_features(trackIds: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B") {
            id
            danceability
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});