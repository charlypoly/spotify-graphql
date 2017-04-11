import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Artist.top_tracks', () => {
  let artistResponse, artistTopTracksResponse;

  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.artist.top_tracks.artist').then((data) => {
      artistResponse = data;
      loadFixture('resolvers.artist.top_tracks.top_tracks').then((data2) => artistTopTracksResponse = data2).then(done);
    });
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Artist', () => {
    let artistRequest, artistTopTracksRequest;
    beforeEach(() => {
      artistRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/0TnOYISbd1XYRBk9myaseg')
        .reply(200, artistResponse);
      artistTopTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=US')
        .reply(200, artistTopTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.artist.name).toBe('Pitbull')
        expect(data.artist.id).toBe('0TnOYISbd1XYRBk9myaseg')
        expect(data.artist.top_tracks[0].id).toBe('2bJvI42r8EF3wxjOuDav4r')
        expect(!!executionResult.errors).toBeFalsy();
        expect(artistRequest.isDone()).toBeTruthy();
        expect(artistTopTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          artist(id: "0TnOYISbd1XYRBk9myaseg") {
            id
            name
            top_tracks {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});