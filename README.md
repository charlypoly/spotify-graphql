# Spotify GraphQL [![npm version](https://badge.fury.io/js/spotify-graphql.svg)](https://badge.fury.io/js/spotify-graphql) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
GraphQL schema for Spotify Web API — TypeScript / Node.js (v6)

--------

See [spotify-graphql-examples](https://github.com/thefrenchhouse/spotify-graphql-examples) for more examples

API documentation : http://thefrench.house/spotify-graphql/

-------

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

### Available endpoints

#### Albums
- Get an Album
- Get Several Albums
- Get an Album's Tracks

#### Artists
- Get an Artist
- Get Several Artists
- Get an Artist's Albums
- Get an Artist's Top Tracks
- Get an Artist's Related Artists

#### Tracks
- Get a Track
- Get Several Tracks
- Get Audio Features for a Track
- Get Audio Features for Several Tracks

#### Playlists
- Get a List of a User's Playlists
- Get a List of Current User's Playlists
- Get a Playlist
- Get a Playlist's Tracks

#### User Profiles
- Get a User's Profile
- Get Current User's Profile

#### User Library
- Get Current User's Saved Tracks
- Get Current User's Saved Albums

#### Personalization
- Get User's Top Artists and Tracks

### Available queries

```
me: PrivateUser
user(id: String!): PublicUser
track(id: String!): Track
tracks(ids: String!): [Track]
audio_features(trackIds: String!): [AudioFeatures]
audio_feature(trackId: String!): AudioFeatures
artist(id: String!): Artist
artists(ids: String!): [Artist]
album(id: String!): Album
albums(ids: String!): [Album]
playlist(id: String!, userId: String!): Playlist
```
