import { clearCache } from "../../lib/utils";
import { loadFixture } from "../helpers";
import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query : album(id: String): Album', () => {
  let response;

  beforeEach((done) => {
    clearCache();
    loadFixture('queries.album').then((data) => response = data).then(done);
  });

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Album', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.album.name).toBe('Global Warming')
        expect(data.album.id).toBe('4aawyAB9vmqN3uQ7FjRGTy')
        
        expect(data.album.images[0].url).toBe("https://i.scdn.co/image/3edb3f970f4a3af9ef922efd18cdb4dabaf85ced");

        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = (e) => { throw e; };

      client.query(`
        query {
          album(id: "4aawyAB9vmqN3uQ7FjRGTy") {
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

  describe('when fetching a non-existing Album', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/albums/1zHlj4dQ8ZAtrayhuDDmk4')
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
          album(id: "1zHlj4dQ8ZAtrayhuDDmk4") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});