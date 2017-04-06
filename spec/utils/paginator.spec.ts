import { spotifyWebAPIClient } from '../../lib/client';
import { clearCache, paginatorFactory } from '../../lib/utils';
import * as nock from 'nock';

describe('paginator', () => {
  beforeEach(() => {
    clearCache();
  });

  nock.disableNetConnect();

  function buildOffsetResponse({ offset = 0, limit = 100, size = 1 }): any {
    let items: any[] = [];
    for (let i: number = 0; i < size; i++) {
      items.push({});
    }
    return {
      items: items,
      limit: limit,
      next: null,
      offset: offset,
      previous: null,
      total: size
    };
  }

  function buildCursorResponse({ ressource = 'default', after = '', size = 1, total = 1, limit = 20 }): any {
    let items: any[] = [];
    for (let i: number = 0; i < size; i++) {
      items.push({});
    }
    return {
      [ressource]: {
        items: items,
        total,
        limit,
        cursors: {
          after: after
        }
      }
    };
  }

  let client: any = spotifyWebAPIClient({
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    redirectUri: 'http://redirectUri.dev',
    accessToken: 'accessToken'
  });

  describe('when using OffsetPaging strategy', () => {

    describe('without options (default factory)', () => {

      describe('when response have 1 page', () => {
        let request;
        beforeEach(() => {
          request = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 0, limit: 50 })
            .reply(200, buildOffsetResponse({}));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 1 call', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { limit: -1 });

          let finished = ()  => {
            expect(request.isDone()).toBeTruthy();
            done();
          };

          paginator(
            client,
            'getPlaylistTracks',
            response => response.body,
            'playlist_owner_id',
            'playlist_id'
          ).then(finished).catch(finished);
        });

      });

      describe('when response have 2 pages', () => {
        let firstRequest, secondRequest;
        beforeEach(() => {
          firstRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 0, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 100, offset: 0 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 50, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 100, offset: 50 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 2 calls', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { limit: -1 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeTruthy();
            done();
          }

          paginator(
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
            .reply(200, buildOffsetResponse({ size : 150, offset: 0 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 50, limit: 50 })
            .reply(500, buildOffsetResponse({ size : 150, offset: 50 }));

          thirdRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 100, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 150, offset: 100 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 2 calls', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { limit: -1 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeTruthy();
            expect(thirdRequest.isDone()).toBeFalsy();
            done();
          }

          paginator(
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
            .reply(200, buildOffsetResponse({ size : 150, offset: 0 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 50, limit: 50 })
            .reply(500, buildOffsetResponse({ size : 150, offset: 50 }));

          thirdRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 100, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 150, offset: 100 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 3 calls', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { continueOnError: true, limit: -1 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeTruthy();
            expect(thirdRequest.isDone()).toBeTruthy();
            done();
          }

          paginator(
            client,
            'getPlaylistTracks',
            response => response.body,
            'playlist_owner_id',
            'playlist_id'
          ).then(finished).catch(finished);
        });

      });

    });

    describe('limit options', () => {

      describe('when response have 3 pages, and limit set to -1', () => {
        let firstRequest, secondRequest, thirdRequest;
        beforeEach(() => {
          firstRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 0, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 150, offset: 0 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 50, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 150, offset: 50 }));

          thirdRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 100, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 150, offset: 100 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 3 calls', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { continueOnError: true, limit: -1 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeTruthy();
            expect(thirdRequest.isDone()).toBeTruthy();
            done();
          }

          paginator(
            client,
            'getPlaylistTracks',
            response => response.body,
            'playlist_owner_id',
            'playlist_id'
          ).then(finished).catch(finished);
        });

      });

      describe('when response have 3 pages, and limit set to 50', () => {
        let firstRequest, secondRequest, thirdRequest;
        beforeEach(() => {
          firstRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 0, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 50, offset: 0 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 50, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 50, offset: 50 }));

          thirdRequest = nock('https://api.spotify.com:443')
            .get('/v1/users/playlist_owner_id/playlists/playlist_id/tracks')
            .query({ offset: 100, limit: 50 })
            .reply(200, buildOffsetResponse({ size : 50, offset: 100 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 1 call', (done) => {
          let paginator = paginatorFactory('OffsetPaging', { continueOnError: true, limit: 50 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeFalsy();
            expect(thirdRequest.isDone()).toBeFalsy();
            done();
          };

          paginator(
            client,
            'getPlaylistTracks',
            response => response.body,
            'playlist_owner_id',
            'playlist_id'
          ).then(finished).catch(finished);
        });

      });
    });
  });

  describe('when using CursorPaging strategy', () => {

    describe('without options (default factory)', () => {

      describe('when response have 1 page', () => {
        let request;
        beforeEach(() => {
          request = nock('https://api.spotify.com:443')
            .get('/v1/me/following?type=artist')
            .reply(200, buildOffsetResponse({}));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 1 call', (done) => {
          let paginator = paginatorFactory('CursorPaging', { limit: -1 });

          let finished = ()  => {
            expect(request.isDone()).toBeTruthy();
            done();
          };

          paginator(
            client,
            'getFollowedArtists',
            response => response.body.artists.items
          ).then(finished).catch(finished);
        });

      });

      describe('when response have 2 pages', () => {
        let firstRequest, secondRequest, after = 'my_cursor';
        beforeEach(() => {
          firstRequest = nock('https://api.spotify.com:443')
            .get('/v1/me/following?type=artist')
            .reply(200, buildCursorResponse({ after: after, ressource: 'artists', total: 20, size: 10 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/me/following')
            .query({ after: after, type: 'artist' })
            .reply(200, buildCursorResponse({ ressource: 'artists', total: 20, size: 10 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 2 calls', (done) => {
          let paginator = paginatorFactory('CursorPaging', { limit: -1 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy();
            expect(secondRequest.isDone()).toBeTruthy();
            done();
          };

          paginator(
            client,
            'getFollowedArtists',
            response => response.body.artists.items
          ).then(finished).catch(finished);
        });

      });

    });


    describe('limit options', () => {

      describe('when response have 3 pages, and limit set to 20', () => {
        let firstRequest, secondRequest, thirdRequest;

        beforeEach(() => {
          firstRequest = nock('https://api.spotify.com:443')
            .get('/v1/me/following?type=artist')
            .reply(200, buildCursorResponse({ after: 'cursor_1', ressource: 'artists', total: 30, size: 10 }));

          secondRequest = nock('https://api.spotify.com:443')
            .get('/v1/me/following')
            .query({ after: 'cursor_1', type: 'artist' })
            .reply(200, buildCursorResponse({ after: 'cursor_2', ressource: 'artists', total: 30, size: 10 }));

          thirdRequest = nock('https://api.spotify.com:443')
            .get('/v1/me/following')
            .query({ after: 'cursor_2', type: 'artist' })
            .reply(200, buildCursorResponse({ ressource: 'artists', total: 30, size: 10 }));
        });
        afterEach(() =>  {
          nock.cleanAll();
        });

        it('should make 2 call', (done) => {
          let paginator = paginatorFactory('CursorPaging', { limit: 20 });

          let finished = () => {
            expect(firstRequest.isDone()).toBeTruthy('first request should be done');
            expect(secondRequest.isDone()).toBeTruthy('second request should be done');
            expect(thirdRequest.isDone()).toBeFalsy('third request should NOT be done');
            done();
          };

          paginator(
            client,
            'getFollowedArtists',
            response => response.body.artists.items
          ).then(finished).catch(finished);
        });

      });
    });
  });
});
