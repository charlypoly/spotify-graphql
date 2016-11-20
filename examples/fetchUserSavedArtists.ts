import SpotifyGraphQLClient from '../src/spotify-graphql';
import config from './config';

SpotifyGraphQLClient.create(config).query(`
  {
    me {
      display_name
      tracks {
        track {
          artists {
            name
          }
        }
      }
    }
  }
`).then(executionResult => {
  console.log(JSON.stringify(executionResult.data));
});