# Spotify GraphQL [![npm version](https://badge.fury.io/js/spotify-graphql.svg)](https://badge.fury.io/js/spotify-graphql) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
GraphQL schema for Spotify WebAPI (TypeScript)

--------

**Find some examples [here](https://github.com/thefrenchhouse/spotify-graphql-examples)**

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

SpotifyGraphQLClient(config).query(`
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

See [spotify-graphql-examples](https://github.com/thefrenchhouse/spotify-graphql-examples) for more examples

### Available types ([object models](https://developer.spotify.com/web-api/object-model/))

<table>
  <tr>
    <td>
      Track
    </td>
  </tr>
  <tr>
    <td>
      Artist
    </td>
  </tr>
  <tr>
    <td>
      SimplifiedArtist
    </td>
  </tr>
  <tr>
    <td>
      Album
    </td>
  </tr>
  <tr>
    <td>
      SimplifiedAlbum
    </td>
  </tr>
  <tr>
    <td>
      PrivateUser
    </td>
  </tr>
  <tr>
    <td>
      SavedTrack
    </td>
  </tr>
  <tr>
    <td>
      PlaylistTrack
    </td>
  </tr>
  <tr>
    <td>
      PublicUser
    </td>
  </tr>
  <tr>
    <td>
      Playlist
    </td>
  </tr>
  <tr>
    <td>
      AudioFeatures
    </td>
  </tr>
  <tr>
    <td>
      Query
    </td>
  </tr>
</table>

### Available queries

```
track(id: String): Track
me: PrivateUser
user(id: String): PrivateUser
artist(id: String): Artist
audio_features(trackIds: String): [AudioFeatures]
```
