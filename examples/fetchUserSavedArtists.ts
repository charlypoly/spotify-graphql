import Client from '../src/spotify-graphql';

const accessToken = 'xxx';

Client(accessToken).query(`
  {
    me(load: false) {
      tracks {
        track {
          artists {
            name
          }
        }
      }
    }
  }
`).then(result => {
  console.log(JSON.stringify(result));
});