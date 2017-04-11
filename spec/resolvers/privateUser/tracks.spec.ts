import { clearCache } from '../../../lib/utils';
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.tracks', () => {
  let meResponse, meTracksResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.tracks.tracks').then((data2) => meTracksResponse = data2).then(done);
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
    let meRequest, meTracksRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      meTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/me/tracks?limit=50&offset=0')
        .reply(200, meTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.tracks[0].track.id).toBe('5mey7CLLuFToM2P68Qu1gF');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            tracks {
              track {
                id
              }
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});