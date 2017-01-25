import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query : artist(id: String): Artist', () => {

  let response = {"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"followers":{"href":null,"total":3346948},"genres":["dance pop","latin","pop","pop rap"],"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","images":[{"height":563,"url":"https://i.scdn.co/image/d6955bc790b818df4efb719a863e4d26f0c2522b","width":1000},{"height":360,"url":"https://i.scdn.co/image/ddacbbbe81a45f4564887371a3e4dcd783e9af00","width":640},{"height":113,"url":"https://i.scdn.co/image/919f21bfe1323ef2ed93ba8db0de86a99c14ca0b","width":200},{"height":36,"url":"https://i.scdn.co/image/7cad6a6b158a453db5e411060a0e6deb6568db44","width":64}],"name":"Pitbull","popularity":86,"type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching a existing Artist', () => {
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