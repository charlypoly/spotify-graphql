import { SpotifyGraphQLClient } from '../../index';
import * as nock from 'nock';

describe('Query: user(id: ...): PublicUser', () => {

  let response = {"display_name":"Charly Poly","external_urls":{"spotify":"https://open.spotify.com/user/11879785"},"followers":{"href":null,"total":14},"href":"https://api.spotify.com/v1/users/11879785","id":"11879785","images":[{"height":null,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/14708149_10210705575656755_6613177863427368468_n.jpg?oh=edeed1fffe34e4a0f57669b5ffbb3def&oe=5914212D","width":null}],"type":"user","uri":"spotify:user:11879785"};

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
        .get('/v1/users/11879785')
        .reply(200, response);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.user.display_name).toBe('Charly Poly')
        expect(data.user.id).toBe('11879785')
        expect(!!executionResult.errors).toBeFalsy();
        expect(request.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          user(id: "11879785") {
            id
            display_name
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });


});