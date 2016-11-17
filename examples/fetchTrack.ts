import Client from '../src/spotify-graphql';

const accessToken = 'xxx';

Client(accessToken).query(`
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
`).then(result => {
  console.log(JSON.stringify(result));
});