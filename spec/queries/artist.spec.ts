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
    let searchResults = {"artists":{"href":"https://api.spotify.com/v1/search?query=John+Mayer&type=artist&market=FR&offset=0&limit=20","items":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0hEurMDQu99nJRq8pTxO14"},"followers":{"href":null,"total":2104319},"genres":["folk-pop","neo mellow","pop","pop rock","singer-songwriter"],"href":"https://api.spotify.com/v1/artists/0hEurMDQu99nJRq8pTxO14","id":"0hEurMDQu99nJRq8pTxO14","images":[{"height":640,"url":"https://i.scdn.co/image/96a2e527431f7bf39cea4bf8702fc8159f08e2aa","width":640},{"height":320,"url":"https://i.scdn.co/image/5141cdd3e766fdf922fac1fb1ffb404b7536c8cd","width":320},{"height":160,"url":"https://i.scdn.co/image/f0e8d6a32549e39ed2d13f79e1f6561bcd44cc1f","width":160}],"name":"John Mayer","popularity":81,"type":"artist","uri":"spotify:artist:0hEurMDQu99nJRq8pTxO14"},{"external_urls":{"spotify":"https://open.spotify.com/artist/68xuC1qXRhCUvGd4SSM655"},"followers":{"href":null,"total":33716},"genres":["blues-rock","electric blues","modern blues","neo mellow"],"href":"https://api.spotify.com/v1/artists/68xuC1qXRhCUvGd4SSM655","id":"68xuC1qXRhCUvGd4SSM655","images":[{"height":628,"url":"https://i.scdn.co/image/66de839461f197466fd3f348c9bfb4e435f41099","width":640},{"height":294,"url":"https://i.scdn.co/image/fbab748eb517668badc8224c4e6de2f3a0b6a950","width":300},{"height":63,"url":"https://i.scdn.co/image/57bcf19960942757dd09cde9417acf0c9d2fde7b","width":64}],"name":"John Mayer Trio","popularity":43,"type":"artist","uri":"spotify:artist:68xuC1qXRhCUvGd4SSM655"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7EXJJpgDl7y4szvrpUYj0s"},"followers":{"href":null,"total":981},"genres":[],"href":"https://api.spotify.com/v1/artists/7EXJJpgDl7y4szvrpUYj0s","id":"7EXJJpgDl7y4szvrpUYj0s","images":[{"height":640,"url":"https://i.scdn.co/image/8b251c6b143f77ee4cce52105a208f3d63cb5b4e","width":637},{"height":300,"url":"https://i.scdn.co/image/ff66bd3a6cb51b121000fe57bd8fb5c2e9180947","width":299},{"height":64,"url":"https://i.scdn.co/image/5fa20408a41eef41a306e15172e546827eda3e21","width":64}],"name":"John Mayer","popularity":11,"type":"artist","uri":"spotify:artist:7EXJJpgDl7y4szvrpUYj0s"},{"external_urls":{"spotify":"https://open.spotify.com/artist/6X3YptBl3aefKrPPaRQvJN"},"followers":{"href":null,"total":3},"genres":[],"href":"https://api.spotify.com/v1/artists/6X3YptBl3aefKrPPaRQvJN","id":"6X3YptBl3aefKrPPaRQvJN","images":[{"height":640,"url":"https://i.scdn.co/image/34d6fdb7d89a7b280ea6d5efa00d117d1f57c05b","width":640},{"height":300,"url":"https://i.scdn.co/image/1c9cae64eac5b125fb9e7c21de86ae5d0677f71c","width":300},{"height":64,"url":"https://i.scdn.co/image/192e872f7c6fbabc466b2c585b48fbe6be72a873","width":64}],"name":"John H. Mayer","popularity":0,"type":"artist","uri":"spotify:artist:6X3YptBl3aefKrPPaRQvJN"},{"external_urls":{"spotify":"https://open.spotify.com/artist/16K1beBkka6Sn005HbmfNe"},"followers":{"href":null,"total":90},"genres":[],"href":"https://api.spotify.com/v1/artists/16K1beBkka6Sn005HbmfNe","id":"16K1beBkka6Sn005HbmfNe","images":[{"height":640,"url":"https://i.scdn.co/image/cb0dd50c396694c572f63145b8037a13e1fa74f4","width":640},{"height":300,"url":"https://i.scdn.co/image/9500f5f0073ca71387ea243fa69861db2f7b057b","width":300},{"height":64,"url":"https://i.scdn.co/image/2c6f3d22de87099fbede961771002c0a448cd7fa","width":64}],"name":"The Joe Harriott-John Mayer Double Quintet","popularity":3,"type":"artist","uri":"spotify:artist:16K1beBkka6Sn005HbmfNe"},{"external_urls":{"spotify":"https://open.spotify.com/artist/2wnfjddNW3PfEfb4vCnrLh"},"followers":{"href":null,"total":8},"genres":[],"href":"https://api.spotify.com/v1/artists/2wnfjddNW3PfEfb4vCnrLh","id":"2wnfjddNW3PfEfb4vCnrLh","images":[],"name":"Red Hot Chilli Pipers and Clay Cook and John Mayer and Cameron Barnes","popularity":4,"type":"artist","uri":"spotify:artist:2wnfjddNW3PfEfb4vCnrLh"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3zkyMOzdKS4m1pUNV3qFk8"},"followers":{"href":null,"total":736},"genres":[],"href":"https://api.spotify.com/v1/artists/3zkyMOzdKS4m1pUNV3qFk8","id":"3zkyMOzdKS4m1pUNV3qFk8","images":[{"height":640,"url":"https://i.scdn.co/image/e112ac1ddbf2bd56c056442bada3a66d7ee9af3e","width":640},{"height":300,"url":"https://i.scdn.co/image/5e77c796487c0bbc0954785786859e5125202f39","width":300},{"height":64,"url":"https://i.scdn.co/image/be2f74103933dcb89bd5d596eb8311e1054dc50b","width":64}],"name":"John Mayer's Indo Jazz Fusions","popularity":7,"type":"artist","uri":"spotify:artist:3zkyMOzdKS4m1pUNV3qFk8"},{"external_urls":{"spotify":"https://open.spotify.com/artist/0Bl8bg8QpFTqZjymrRqIbC"},"followers":{"href":null,"total":32},"genres":[],"href":"https://api.spotify.com/v1/artists/0Bl8bg8QpFTqZjymrRqIbC","id":"0Bl8bg8QpFTqZjymrRqIbC","images":[],"name":"Various Artists - John Mayer Tribute","popularity":7,"type":"artist","uri":"spotify:artist:0Bl8bg8QpFTqZjymrRqIbC"}],"limit":20,"next":null,"offset":0,"previous":null,"total":8}};
    let johnMayerArtist = {"external_urls":{"spotify":"https://open.spotify.com/artist/0hEurMDQu99nJRq8pTxO14"},"followers":{"href":null,"total":2104319},"genres":["folk-pop","neo mellow","pop","pop rock","singer-songwriter"],"href":"https://api.spotify.com/v1/artists/0hEurMDQu99nJRq8pTxO14","id":"0hEurMDQu99nJRq8pTxO14","images":[{"height":640,"url":"https://i.scdn.co/image/96a2e527431f7bf39cea4bf8702fc8159f08e2aa","width":640},{"height":320,"url":"https://i.scdn.co/image/5141cdd3e766fdf922fac1fb1ffb404b7536c8cd","width":320},{"height":160,"url":"https://i.scdn.co/image/f0e8d6a32549e39ed2d13f79e1f6561bcd44cc1f","width":160}],"name":"John Mayer","popularity":81,"type":"artist","uri":"spotify:artist:0hEurMDQu99nJRq8pTxO14"};
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