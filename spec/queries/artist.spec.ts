import { clearCache } from "../../lib/utils";
import { loadFixture } from "../helpers";
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query : artist(id: String): Artist', () => {
  let response;
  beforeEach((done) => {
    clearCache();
    loadFixture('queries.artist.response').then((data) => response = data).then(done);
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Artist', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/artists/0TnOYISbd1XYRBk9myaseg')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.artist.name).toBe('Pitbull')
        expect(data.artist.id).toBe('0TnOYISbd1XYRBk9myaseg')
        expect(data.artist.images[0].url).toBe('https://i.scdn.co/image/d6955bc790b818df4efb719a863e4d26f0c2522b')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          artist(id: "0TnOYISbd1XYRBk9myaseg") {
            id
            name
            images {
              url
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

  describe('when fetching a existing Artist by name', () => {
    let searchResults;
    let johnMayerArtist;
    beforeEach((done) => {
      clearCache();
      loadFixture('queries.artist.searchResults').then((data) => searchResults = data).then(() => {
        loadFixture('queries.artist.johnMayerArtist').then((data) => johnMayerArtist = data).then(done);
      });
    });
    let requestArtistById;
    let requestArtistByName;
    beforeEach(() => {
      requestArtistById = nock('https://api.spotify.com:443')
        .get('/v1/artists/0hEurMDQu99nJRq8pTxO14')
        .reply(200, johnMayerArtist);

      requestArtistByName = nock('https://api.spotify.com:443')
        .get('/v1/search/?type=artist&q=John%20Mayer')
        .reply(200, searchResults);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.artist.name).toBe('John Mayer')
        expect(data.artist.id).toBe('0hEurMDQu99nJRq8pTxO14')
        expect(!!executionResult.errors).toBeFalsy();
        expect(requestArtistByName.isDone()).toBeTruthy();
        expect(requestArtistById.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          artist(name: "John Mayer") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

  describe('when fetching a non-existing Artist', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/albums/0TnOYISbd1XYRBk9myase')
        .reply(404, {
          "error" : {
            "status" : 404,
            "message" : "non existing id"
          }
        });
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback with errors', (done) => {
      let onSuccess = function (executionResult: any) {
        expect(!!executionResult.errors).toBeTruthy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          album(id: "0TnOYISbd1XYRBk9myase") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});