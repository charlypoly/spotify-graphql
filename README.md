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
import { SpotifyApiGraphQL } from 'spotify-graphql';

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

let client = new SpotifyApiGraphQL('<access_token>');

client.query(query).then(result => {

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


### Technical notes

- https://github.com/apollostack/graphql-tools
- https://github.com/Aweary/json-to-graphql
- https://developer.spotify.com/web-api/object-model/
- https://developer.spotify.com/web-api/endpoint-reference/

