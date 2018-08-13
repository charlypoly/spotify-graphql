import { clearCache } from "../../../lib/utils";
import { loadFixture } from '../../helpers';
import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Artist.albums', () => {
  beforeEach(() => {
    clearCache();
  });

  describe('without album_type not provided', () => {
    let artistResponse, artistAlbums;

    beforeEach((done) => {
      loadFixture('resolvers.artist.albums.artist').then((data) => {
        artistResponse = data;
        loadFixture('resolvers.artist.albums.albums').then((data2) => artistAlbums = data2).then(() => done());
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
      let artistRequest, artistAlbumsRequest;
      beforeEach(() => {
        artistRequest = nock('https://api.spotify.com:443')
          .get('/v1/artists/4Nrd0CtP8txoQhnnlRA6V6')
          .reply(200, artistResponse);
        artistAlbumsRequest = nock('https://api.spotify.com:443')
          .get('/v1/artists/4Nrd0CtP8txoQhnnlRA6V6/albums?limit=50&offset=0')
          .reply(200, artistAlbums);
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should call promise success callback', (done) => {
        let onSuccess = function (executionResult: any) {
          let data = executionResult.data;
          expect(data.artist.name).toBe('Vianney')
          expect(data.artist.id).toBe('4Nrd0CtP8txoQhnnlRA6V6')
          expect(data.artist.albums[0].id).toBe('3sb3TaTkw7pdVD2V5cSBGi')
          expect(!!executionResult.errors).toBeFalsy();
          expect(artistRequest.isDone()).toBeTruthy();
          expect(artistAlbumsRequest.isDone()).toBeTruthy();
          done();
        }

        let onError = () => { throw 'should not be called' };

        client.query(`
          query {
            artist(id: "4Nrd0CtP8txoQhnnlRA6V6") {
              id
              name
              albums {
                id
              }
            }
          }
        `).then(onSuccess).catch(onError);
      });
    });
  });

  describe('with album_type = "album"', () => {
    let artistResponse, artistAlbums;
    beforeEach((done) => {
      loadFixture('resolvers.artist.albums.album_type.artist').then((data) => {
        artistResponse = data;
        loadFixture('resolvers.artist.albums.album_type.albums').then((data2) => artistAlbums = data2).then(() => done());
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
      let artistRequest, artistAlbumsRequest;
      beforeEach(() => {
        artistRequest = nock('https://api.spotify.com:443')
          .get('/v1/artists/0hEurMDQu99nJRq8pTxO14')
          .reply(200, artistResponse);
        artistAlbumsRequest = nock('https://api.spotify.com:443')
          .get('/v1/artists/0hEurMDQu99nJRq8pTxO14/albums?album_type=album&limit=50&offset=0')
          .reply(200, artistAlbums);
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should call promise success callback', (done) => {
        let onSuccess = function (executionResult: any) {
          let data = executionResult.data;
          expect(data.artist.name).toBe('John Mayer')
          expect(data.artist.id).toBe('0hEurMDQu99nJRq8pTxO14')
          expect(data.artist.albums[0].id).toBe('712VoD72K500yLhhgqCyVe')
          expect(!!executionResult.errors).toBeFalsy();
          expect(artistRequest.isDone()).toBeTruthy();
          expect(artistAlbumsRequest.isDone()).toBeTruthy();
          done();
        }

        let onError = () => { throw 'should not be called' };

        client.query(`
          query {
            artist(id: "0hEurMDQu99nJRq8pTxO14") {
              id
              name
              albums(album_type: "album") {
                id
              }
            }
          }
        `).then(onSuccess).catch(onError);
      });
    });
  });

});
