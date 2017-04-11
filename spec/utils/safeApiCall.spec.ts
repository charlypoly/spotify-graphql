import { clearCache, safeApiCall } from '../../lib/utils';
import { spotifyWebAPIClient } from '../../lib/client';
import * as nock from 'nock';

describe('safeApiCall', () => {

  beforeEach(() => {
    clearCache();
  });

  nock.disableNetConnect();

  let client = spotifyWebAPIClient({
    "clientId": "clientId",
    "clientSecret": "clientSecret",
    "redirectUri": "http://redirectUri.dev",
    "accessToken": "accessToken"
  });


  describe('when response is 200', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, {});
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function () {
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      safeApiCall(
        client,
        'getMe'
       ).then(onSuccess).catch(onError);
    });
  });

  describe('when response is an error', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(500, {});
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise error callback', (done) => {
      let onError = function () {
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onSuccess = () => { throw 'should not be called' };

      safeApiCall(
        client,
        'getMe'
       ).then(onSuccess).catch(onError);
    });
  });

  describe('when formatter is provided', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, { results: [1, 2, 3] });
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should apply given formatter on results', (done) => {
      let onSuccess = function (results) {
        expect(results).toEqual([1, 2, 3]);
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      safeApiCall(
        client,
        'getMe',
        (response) => response.body.results
       ).then(onSuccess).catch(onError);
    });
  });

});