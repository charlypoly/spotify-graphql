import { clearCache } from "../../../lib/utils";
import { loadFixture } from "../../helpers";
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Artist.related_artists', () => {
  let artistResponse, artistRelatedArtists;
  beforeEach((done) => {
    clearCache();
    loadFixture('resolvers.artist.related_artists.artist').then((data) => {
      artistResponse = data;
      loadFixture('resolvers.artist.related_artists.related_artists').then((data2) => artistRelatedArtists = data2).then(() => done());
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
    let artistRequest, artistRelatedArtistsRequest;
    beforeEach(() => {
      artistRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/4Nrd0CtP8txoQhnnlRA6V6')
        .reply(200, artistResponse);
      artistRelatedArtistsRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/4Nrd0CtP8txoQhnnlRA6V6/related-artists')
        .reply(200, artistRelatedArtists);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.artist.name).toBe('Vianney')
        expect(data.artist.id).toBe('4Nrd0CtP8txoQhnnlRA6V6')
        expect(data.artist.related_artists[0].id).toBe('4OV6uYSnHxSYkjDYuBVBUz')
        expect(data.artist.related_artists[0].name).toBe('Slimane')
        expect(!!executionResult.errors).toBeFalsy();
        expect(artistRequest.isDone()).toBeTruthy();
        expect(artistRelatedArtistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          artist(id: "4Nrd0CtP8txoQhnnlRA6V6") {
            id
            name
            related_artists {
              id
              name
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
