import { willPaginateFactory } from '../../lib/utils';
import { spotifyWebAPIClient } from '../../lib/client';
import * as nock from 'nock';

describe('willPaginate', () => {

  nock.disableNetConnect();

  function buildResponse({ offset = 0, limit = 100, size = 1 }) {
    let items = [];
    for (var i = 0; i < size; ++i) {
      items.push({});
    }
    return {
      "href" : "https://api.spotify.com/v1/users/playlist_owner_id/playlists/playlist_id/tracks?offset=0&limit=100",
      "items" : items,
      "limit" : limit,
      "next" : null,
      "offset" : offset,
      "previous" : null,
      "total" : size
    };
  }

  let client = spotifyWebAPIClient({
    "clientId": "clientId",
    "clientSecret": "clientSecret",
    "redirectUri": "http://redirectUri.dev",
    "accessToken": "accessToken"
  });

  describe('without options (default factory)', () => {

    describe('when response have 1 page', () => {
      let request;
      beforeEach(() => {
        request = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 0, limit: 50 })
          .reply(200, buildResponse({}));
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should make 1 call', (done) => {
        let willPaginate = willPaginateFactory({});

        let finished = function () {
          expect(request.isDone()).toBeTruthy();
          done();
        }

        willPaginate(
          client,
          'getPlaylistTracks',
          response => response.body,
          'playlist_owner_id',
          'playlist_id'
         ).then(finished).catch(finished);
      });

    })

    describe('when response have 2 pages', () => {
      let firstRequest, secondRequest;
      beforeEach(() => {
        firstRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 0, limit: 50 })
          .reply(200, buildResponse({ size : 100, offset: 0 }));

        secondRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 50, limit: 50 })
          .reply(200, buildResponse({ size : 100, offset: 50 }));
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should make 2 calls', (done) => {
        let willPaginate = willPaginateFactory({});

        let finished = function () {
          expect(firstRequest.isDone()).toBeTruthy();
          expect(secondRequest.isDone()).toBeTruthy();
          done();
        }

        willPaginate(
          client,
          'getPlaylistTracks',
          response => response.body,
          'playlist_owner_id',
          'playlist_id'
         ).then(finished).catch(finished);
      });

    })

    describe('when response have 3 pages, and second fails', () => {
      let firstRequest, secondRequest, thirdRequest;
      beforeEach(() => {
        firstRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 0, limit: 50 })
          .reply(200, buildResponse({ size : 150, offset: 0 }));

        secondRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 50, limit: 50 })
          .reply(500, buildResponse({ size : 150, offset: 50 }));

        thirdRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 100, limit: 50 })
          .reply(200, buildResponse({ size : 150, offset: 100 }));
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should make 2 calls', (done) => {
        let willPaginate = willPaginateFactory({});

        let finished = function () {
          expect(firstRequest.isDone()).toBeTruthy();
          expect(secondRequest.isDone()).toBeTruthy();
          expect(thirdRequest.isDone()).toBeFalsy();
          done();
        }

        willPaginate(
          client,
          'getPlaylistTracks',
          response => response.body,
          'playlist_owner_id',
          'playlist_id'
         ).then(finished).catch(finished);
      });

    })


  });

  describe('continueOnError options enabled', () => {

    describe('when response have 3 pages, and second fails', () => {
      let firstRequest, secondRequest, thirdRequest;
      beforeEach(() => {
        firstRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 0, limit: 50 })
          .reply(200, buildResponse({ size : 150, offset: 0 }));

        secondRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 50, limit: 50 })
          .reply(500, buildResponse({ size : 150, offset: 50 }));

        thirdRequest = nock('https://api.spotify.com:443')
          .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
          .query({ offset: 100, limit: 50 })
          .reply(200, buildResponse({ size : 150, offset: 100 }));
      });
      afterEach(() =>  {
        nock.cleanAll();
      });

      it('should make 3 calls', (done) => {
        let willPaginate = willPaginateFactory({ continueOnError: true });

        let finished = function () {
          expect(firstRequest.isDone()).toBeTruthy();
          expect(secondRequest.isDone()).toBeTruthy();
          expect(thirdRequest.isDone()).toBeTruthy();
          done();
        }

        willPaginate(
          client,
          'getPlaylistTracks',
          response => response.body,
          'playlist_owner_id',
          'playlist_id'
         ).then(finished).catch(finished);
      });

    })

  });

});