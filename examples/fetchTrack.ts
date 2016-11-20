import SpotifyGraphQLClient from '../src/spotify-graphql';
import config from './config';

SpotifyGraphQLClient.create(config).query(`
  {
    track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
      name
      artists {
        name
      }
      album {
        name
      }
    }
  }
`).then(executionResult => {
  console.log(JSON.stringify(executionResult.data));
});