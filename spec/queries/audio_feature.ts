import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: audio_feature(trackId: String): AudioFeatures', () => {

  let AudioFeaturesResponse = {"danceability":0.366,"energy":0.963,"key":11,"loudness":-5.301,"mode":0,"speechiness":0.142,"acousticness":0.000273,"instrumentalness":0.0122,"liveness":0.115,"valence":0.212,"tempo":137.114,"type":"audio_features","id":"7ouMYWpwJ422jRcDASZB7P","uri":"spotify:track:7ouMYWpwJ422jRcDASZB7P","track_href":"https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P","analysis_url":"https://api.spotify.com/v1/audio-analysis/7ouMYWpwJ422jRcDASZB7P","duration_ms":366213,"time_signature":4};

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
        .get('/v1/audio-features/7ouMYWpwJ422jRcDASZB7P')
        .reply(200, AudioFeaturesResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.audio_feature.id).toBe('7ouMYWpwJ422jRcDASZB7P')
        expect(data.audio_feature.danceability).toBe('0.366')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          audio_feature(trackId: "7ouMYWpwJ422jRcDASZB7P") {
            id
            danceability
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});