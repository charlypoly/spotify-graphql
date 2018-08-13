import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.albums', () => {
  let meResponse, meAlbumsResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.privateUser.me').then((data) => {
      meResponse = data;
      loadFixture('resolvers.privateUser.albums.albums').then((data2) => meAlbumsResponse = data2).then(() => done());
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
    let meRequest, meAlbumsRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      meAlbumsRequest = nock('https://api.spotify.com:443')
        .get('/v1/me/albums?limit=50&offset=0')
        .reply(200, meAlbumsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.albums[0].album.id).toBe('0RwyuV6gqs9zKVsMUNF73l');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(meAlbumsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            albums {
              album {
                id
              }
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
