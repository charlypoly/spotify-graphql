import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.top_tracks', () => {
  let meResponse, meTopTracksResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.top_tracks.tracks').then((data2) => meTopTracksResponse = data2).then(done);
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
    let meRequest, meTopTracksRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      meTopTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/me/top/tracks?limit=50&offset=0')
        .reply(200, meTopTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.top_tracks[0].id).toBe('0QpYkajexWrB0P3TWvkHlm');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meTopTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            top_tracks {
               id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});