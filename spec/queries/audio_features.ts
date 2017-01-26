import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: audio_features(trackIds: String): [AudioFeatures]', () => {

  let AudioFeaturesResponse = {"audio_features":[{"danceability":0.366,"energy":0.963,"key":11,"loudness":-5.301,"mode":0,"speechiness":0.142,"acousticness":0.000273,"instrumentalness":0.0122,"liveness":0.115,"valence":0.212,"tempo":137.114,"type":"audio_features","id":"7ouMYWpwJ422jRcDASZB7P","uri":"spotify:track:7ouMYWpwJ422jRcDASZB7P","track_href":"https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P","analysis_url":"https://api.spotify.com/v1/audio-analysis/7ouMYWpwJ422jRcDASZB7P","duration_ms":366213,"time_signature":4},{"danceability":0.602,"energy":0.905,"key":2,"loudness":-4.046,"mode":1,"speechiness":0.0775,"acousticness":0.000202,"instrumentalness":0.0640,"liveness":0.117,"valence":0.436,"tempo":128.019,"type":"audio_features","id":"4VqPOruhp5EdPBeR92t6lQ","uri":"spotify:track:4VqPOruhp5EdPBeR92t6lQ","track_href":"https://api.spotify.com/v1/tracks/4VqPOruhp5EdPBeR92t6lQ","analysis_url":"https://api.spotify.com/v1/audio-analysis/4VqPOruhp5EdPBeR92t6lQ","duration_ms":304840,"time_signature":4},{"danceability":0.585,"energy":0.842,"key":9,"loudness":-5.883,"mode":0,"speechiness":0.0556,"acousticness":0.00242,"instrumentalness":0.00686,"liveness":0.0866,"valence":0.437,"tempo":118.211,"type":"audio_features","id":"2takcwOaAZWiXQijPHIx7B","uri":"spotify:track:2takcwOaAZWiXQijPHIx7B","track_href":"https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B","analysis_url":"https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B","duration_ms":237040,"time_signature":4}]};

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
        .reply(200, AudioFeaturesResponse);
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