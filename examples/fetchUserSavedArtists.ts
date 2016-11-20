import SpotifyGraphQLClient from '../src/spotify-graphql';
import config from './config';

SpotifyGraphQLClient.create(config).query(`
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