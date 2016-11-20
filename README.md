# Spotify GraphQL [![Code Climate](https://codeclimate.com/github/thefrenchhouse/spotify-graphql/badges/gpa.svg)](https://codeclimate.com/github/thefrenchhouse/spotify-graphql) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
GraphQL schema for Spotify WebAPI (TypeScript)

--------

*Uses [graphql-js](https://github.com/graphql/graphql-js)*

```typescript

import SpotifyGraphQLClient from '../src/spotify-graphql';
// config is an object like :
//   {
//     "clientId" : "",
//     "clientSecret" : "",
//     "redirectUri" : "",
//     "accessToken" : ""
//   }
import config from './config';

SpotifyGraphQLClient.create(config).query(`
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

See `examples` folder for more examples


### Roadmap

See [0.0.1 Roadmap](https://github.com/thefrenchhouse/spotify-graphql/pull/3)

### Technical notes

- http://graphql.org/graphql-js/
- https://github.com/apollostack/graphql-tools
- https://github.com/Aweary/json-to-graphql
- https://developer.spotify.com/web-api/object-model/
- https://developer.spotify.com/web-api/endpoint-reference/

