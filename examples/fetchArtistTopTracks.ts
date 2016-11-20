import SpotifyGraphQLClient from '../src/spotify-graphql';
import config from './config';

SpotifyGraphQLClient.create(config).query(`
  {
    artist(id: "0oSGxfWSnnOXhD2fKuz2Gy") {
      name
      topTracks {
        name
      }
    }
  }
`).then(result => {
  console.log(JSON.stringify(result));
});