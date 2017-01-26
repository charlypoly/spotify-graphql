import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: track(id: String): Track', () => {

  let track = {"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DO","EC","EE","ES","FI","FR","GR","GT","HK","HN","HU","ID","IE","IT","JP","LI","LT","LV","MC","MT","MX","MY","NI","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/3X33e7UII5loqrEgauOKEC"},"href":"https://api.spotify.com/v1/albums/3X33e7UII5loqrEgauOKEC","id":"3X33e7UII5loqrEgauOKEC","images":[{"height":640,"url":"https://i.scdn.co/image/2b8490f45660572fda9732df66adb83fde98a2a2","width":640},{"height":300,"url":"https://i.scdn.co/image/e779257376593e7a3ba1f39e66660a3d938feda0","width":300},{"height":64,"url":"https://i.scdn.co/image/2fbda0496761c99c8289a2a4bfa2e710af5ea2d1","width":64}],"name":"Timber","type":"album","uri":"spotify:album:3X33e7UII5loqrEgauOKEC"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"},"href":"https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX","id":"6LqNN22kT3074XbTVUrhzX","name":"Kesha","type":"artist","uri":"spotify:artist:6LqNN22kT3074XbTVUrhzX"}],"available_markets":["AD","AR","AT","AU","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DO","EC","EE","ES","FI","FR","GR","GT","HK","HN","HU","ID","IE","IT","JP","LI","LT","LV","MC","MT","MX","MY","NI","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","UY"],"disc_number":1,"duration_ms":204053,"explicit":false,"external_ids":{"isrc":"USRC11301695"},"external_urls":{"spotify":"https://open.spotify.com/track/1zHlj4dQ8ZAtrayhuDDmkY"},"href":"https://api.spotify.com/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY","id":"1zHlj4dQ8ZAtrayhuDDmkY","name":"Timber","popularity":69,"preview_url":"https://p.scdn.co/mp3-preview/ecb1639c58ceb6311919373fe56399e3ec242045?cid=null","track_number":1,"type":"track","uri":"spotify:track:1zHlj4dQ8ZAtrayhuDDmkY"};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching a existing Track', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/tracks/1zHlj4dQ8ZAtrayhuDDmkY')
        .reply(200, track);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.track.name).toBe('Timber')
        expect(data.track.id).toBe('1zHlj4dQ8ZAtrayhuDDmkY')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          track(id: "1zHlj4dQ8ZAtrayhuDDmkY") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

  describe('when fetching a non-existing Track', () => {
    let request;
    beforeEach(() => {
      request = nock('https://api.spotify.com:443')
        .get('/v1/tracks/1zHlj4dQ8ZAtrayhuDDmk4')
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
          track(id: "1zHlj4dQ8ZAtrayhuDDmk4") {
            id
            name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});