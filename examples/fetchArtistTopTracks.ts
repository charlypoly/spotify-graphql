import Client from '../src/spotify-graphql';

const accessToken = 'xxx';

Client(accessToken).query(`
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