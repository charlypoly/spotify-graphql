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

import Client from 'spotify-graphql';

const accessToken = 'xxx';

Client(accessToken).query(`
  {
    track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
      name
      artists {
        name
      }
    }
  }
`).then(result => {
  console.log(JSON.stringify(result));
});

// Print : 
// {
//   "data": {
//     "track": {
//       "name": "You & Me - Flume Remix",
//       "artists": [
//         {
//           "name": "Disclosure"
//         },
//         {
//           "name": "Eliza Doolittle"
//         },
//         {
//           "name": "Flume"
//         }
//       ]
//     }
//   }
// }

```


### Technical notes

- http://graphql.org/graphql-js/
- https://github.com/apollostack/graphql-tools
- https://github.com/Aweary/json-to-graphql
- https://developer.spotify.com/web-api/object-model/
- https://developer.spotify.com/web-api/endpoint-reference/

