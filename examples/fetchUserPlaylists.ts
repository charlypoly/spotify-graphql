import Client from '../src/spotify-graphql';

const accessToken = 'xxx';

Client(accessToken).query(`
  {
    user(id: "11879785") {
      playlists {
        name
        tracks {
          track {
            id
            name
          }
        }
      }
    }
  }
`).then(result => {
  console.log(JSON.stringify(result));
});