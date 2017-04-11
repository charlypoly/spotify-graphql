import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Album.tracks', () => {
  let albumResponse, albumTracksResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.album.tracks.album').then((data) => {
      albumResponse = data;
      loadFixture('resolvers.album.tracks.albumTracks').then((data2) => albumTracksResponse = data2).then(done);
    });
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching a existing Albums', () => {
    let albumRequest, albumTracksRequest;
    beforeEach(() => {
      albumRequest = nock('https://api.spotify.com:443')
        .get('/v1/albums/382ObEPsp2rxGrnsizN5TX')
        .reply(200, albumResponse);
      albumTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/albums/382ObEPsp2rxGrnsizN5TX/tracks?limit=50&offset=0')
        .reply(200, albumTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.album.name).toBe('TRON: Legacy Reconfigured')
        expect(data.album.id).toBe('382ObEPsp2rxGrnsizN5TX')
        expect(data.album.tracks[0].id).toBe('4lteJuSjb9Jt9W1W7PIU2U')
        expect(!!executionResult.errors).toBeFalsy();
        expect(albumRequest.isDone()).toBeTruthy();
        expect(albumTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          album(id: "382ObEPsp2rxGrnsizN5TX") {
            id
            name
            tracks {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});