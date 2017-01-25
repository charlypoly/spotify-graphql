import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : me.playlists', () => {

  let meResponse = {"birthdate":"1992-04-21","country":"FR","display_name":"Charly Poly","email":"charly.poly@live.fr","external_urls":{"spotify":"https://open.spotify.com/user/11879785"},"followers":{"href":null,"total":14},"href":"https://api.spotify.com/v1/users/11879785","id":"11879785","images":[{"height":null,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14708149_10210705575656755_6613177863427368468_n.jpg?oh=edeed1fffe34e4a0f57669b5ffbb3def&oe=5914212D","width":null}],"product":"premium","type":"user","uri":"spotify:user:11879785"};
  let mePlaylistsResponse = {"href":"https://api.spotify.com/v1/users/11879785/playlists?offset=0&limit=2","items":[{"collaborative":false,"external_urls":{"spotify":"http://open.spotify.com/user/spotify/playlist/5UqllVe1ZknYIoptNFRueU"},"href":"https://api.spotify.com/v1/users/spotify/playlists/5UqllVe1ZknYIoptNFRueU","id":"5UqllVe1ZknYIoptNFRueU","images":[{"height":null,"url":"https://u.scdn.co/images/pl/default/70d4565bfd6f51ad19de67b47cc91c156bf5dacd","width":null}],"name":"This Is: Daft Punk","owner":{"external_urls":{"spotify":"http://open.spotify.com/user/spotify"},"href":"https://api.spotify.com/v1/users/spotify","id":"spotify","type":"user","uri":"spotify:user:spotify"},"public":false,"snapshot_id":"tz7i5bCHCaJGLGRvljJPkj27UKSP121amNY+GOom3IpI15dzxLlrzHAh9OF2gNR3","tracks":{"href":"https://api.spotify.com/v1/users/spotify/playlists/5UqllVe1ZknYIoptNFRueU/tracks","total":26},"type":"playlist","uri":"spotify:user:spotify:playlist:5UqllVe1ZknYIoptNFRueU"},{"collaborative":false,"external_urls":{"spotify":"http://open.spotify.com/user/11879785/playlist/0ACJVG9jDj6d2wu8u9MSvR"},"href":"https://api.spotify.com/v1/users/11879785/playlists/0ACJVG9jDj6d2wu8u9MSvR","id":"0ACJVG9jDj6d2wu8u9MSvR","images":[{"height":640,"url":"https://mosaic.scdn.co/640/73fb1de575a85db765a1c6c928f81a38d0db03aa5640a0a6dbcb39e79db25923e7d8cfac19c04fb54da529e345afffddf56ee449eb6256e963c0d67b4fcce9eab7f18546238b64e58ca1e8bc37d3af12","width":640},{"height":300,"url":"https://mosaic.scdn.co/300/73fb1de575a85db765a1c6c928f81a38d0db03aa5640a0a6dbcb39e79db25923e7d8cfac19c04fb54da529e345afffddf56ee449eb6256e963c0d67b4fcce9eab7f18546238b64e58ca1e8bc37d3af12","width":300},{"height":60,"url":"https://mosaic.scdn.co/60/73fb1de575a85db765a1c6c928f81a38d0db03aa5640a0a6dbcb39e79db25923e7d8cfac19c04fb54da529e345afffddf56ee449eb6256e963c0d67b4fcce9eab7f18546238b64e58ca1e8bc37d3af12","width":60}],"name":"Chill","owner":{"external_urls":{"spotify":"http://open.spotify.com/user/11879785"},"href":"https://api.spotify.com/v1/users/11879785","id":"11879785","type":"user","uri":"spotify:user:11879785"},"public":false,"snapshot_id":"3QIcR32NNvq+uhDvcJXHWtHuvba2LABqWwMAyXWnkXd+IJJe2z95ZmV4fMqLV9Pm","tracks":{"href":"https://api.spotify.com/v1/users/11879785/playlists/0ACJVG9jDj6d2wu8u9MSvR/tracks","total":9},"type":"playlist","uri":"spotify:user:11879785:playlist:0ACJVG9jDj6d2wu8u9MSvR"}],"limit":2,"next":"https://api.spotify.com/v1/users/11879785/playlists?offset=2&limit=2","offset":0,"previous":null,"total":2};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching', () => {
    let meRequest, mePlaylistsRequest;
    beforeEach(() => {
      meRequest = nock('https://api.spotify.com:443')
        .get('/v1/me')
        .reply(200, meResponse);
      mePlaylistsRequest = nock('https://api.spotify.com:443')
        .get('/v1/users/11879785/playlists?limit=50&offset=0')
        .reply(200, mePlaylistsResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.me.playlists[0].id).toBe('5UqllVe1ZknYIoptNFRueU');
        expect(!!executionResult.errors).toBeFalsy();
        expect(meRequest.isDone()).toBeTruthy();
        expect(mePlaylistsRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          me {
            id
            playlists {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});