# Spotify GraphQL
GraphQL schema for Spotify WebAPI (TypeScript)

--------

*Uses [graphql-js](https://github.com/graphql/graphql-js)*

### POC goals:

Make schema for following public (with no scopes) endpoints:
- Albums
- Artists
- Playlists
- Tracks


### "target" DSL examples :

```typescript
import { Client } from 'spotify-graphql';

var query = `
  query Album {
    album(id: 'xxxx') {
      uri
      name
      artist {
        name
        uri
      }
    }
  }
`;

let client = new Client('<access_token>');

client.graphql(schema, query).then(result => {

  // Prints
  // {
  //   data: {
  //     album : {
  //       uri: '...',
  //       name: '...',
  //       artist: {
  //         uri: '...',
  //         name: '...'
  //       }
  //     }
  //   }
  // }
  console.log(result);

});
```
