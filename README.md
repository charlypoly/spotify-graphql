# Spotify GraphQL [![npm version](https://badge.fury.io/js/spotify-graphql.svg)](https://badge.fury.io/js/spotify-graphql) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
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

### Available queries
**expanded to 3 levels max for readability**
```
track(id: String) {
  artists {
    topTracks
  }
  album {
    artists {
      topTracks
    }
  }
}

me {
  tracks {
    artists {

    }
    album {
      artists {
        topTracks
      }
    }
  }
  playlists {
    tracks {
      artists
      album {
        artists {
          topTracks
        }
      }
    }
  }
}

user(id: String) {
  tracks {
    artists
    album {
      artists
    }
  }
  playlists {
    tracks {
      artists
      album {
        artists
      }
    }
  }
}

artist(id: String) {
  topTracks
}
```


### Roadmap

See [0.0.1 Roadmap](https://github.com/thefrenchhouse/spotify-graphql/pull/3)
