# Spotify GraphQL [![npm version](https://badge.fury.io/js/spotify-graphql.svg)](https://badge.fury.io/js/spotify-graphql) [![https://david-dm.org/wittydeveloper/spotify-graphql](https://david-dm.org/wittydeveloper/spotify-graphql.svg)](https://david-dm.org/wittydeveloper/spotify-graphql) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
GraphQL schema for Spotify Web API — TypeScript / Node.js (v6)

--------
**[Try with the interactive console !](https://spotify-api-graphql-console.herokuapp.com/)**

See [spotify-graphql-examples](https://github.com/wittydeveloper/spotify-graphql-examples) for more examples


-------

```typescript

import SpotifyGraphQLClient from '../src/spotify-graphql';
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

### Queries

### Albums
- Get an Album :white_check_mark:
- Get Several Albums :white_check_mark:
- Get an Album's Tracks :white_check_mark:
### Artists
- Get an Artist :white_check_mark:
- Get Several Artists :white_check_mark:
- Get an Artist's Albums :white_check_mark:
- Get an Artist's Top Tracks :white_check_mark:
- Get an Artist's Related Artists :white_check_mark:
### Tracks
- Get a Track :white_check_mark:
- Get Several Tracks :white_check_mark:
- Get Audio Features for a Track :white_check_mark:
- Get Audio Features for Several Tracks :white_check_mark:
- Get Audio Analysis for a Track :x:
### Search
- Search for an Item :white_check_mark:
### Playlists
- Get a List of a User's Playlists :white_check_mark:
- Get a List of Current User's Playlists :white_check_mark:
- Get a Playlist :white_check_mark:
- Get a Playlist's Tracks :white_check_mark:
### Create a Playlist
- Add Tracks to a Playlist :x:
- Remove Tracks from a Playlist :x:
- Reorder or replace a Playlist's Tracks :x:
- Change a Playlist's Details :x:
### User Profiles
- Get a User's Profile :white_check_mark:
- Get Current User's Profile :white_check_mark:
### User Library
- Get Current User's Saved Tracks :white_check_mark:
- Check Current User's Saved Tracks :x:
- Save Tracks for Current User :x:
- Remove Tracks for Current User :x:
- Get Current User's Saved Albums :white_check_mark: :x:
- Check Current User's Saved Albums :x:
- Save Albums for Current User :x:
- Remove Albums for Current User :x:
### Personalization
- Get User's Top Artists and Tracks :white_check_mark:
### Browse
- Get a List of New Releases :x:
- Get a List of Featured Playlists :x:
- Get a List of Browse Categories :x:
- Get a Single Browse Category :x:
- Get a Category's playlists :x:
- Get Recommendations Based on Seeds :x:
- Get Available Genre Seeds :x:
### Follow
- Get Followed Artists :x:
- Check if Current User Follows Artists or Users :x:
- Follow Artists or Users :x:
- Unfollow Artists or Users :x:
- Check if Users Follow a Playlist :x:
- Follow a Playlist :x:
- Unfollow a Playlist :x:
### Player
- Get the Current User's Recently Played Tracks :white_check_mark:
- Get Information About The User's Current Playback :white_check_mark:
- Transfer a User's Playback :x:
- Get a User's Available Devices :x:
- Get the User's Currently Playing Track :x:
- Start/Resume a User's Playback :x:
- Pause a User's Playback :x:
- Skip User's Playback To Next Track :x:
- Skip User's Playback To Previous Track :x:
- Seek To Position In Currently Playing Track :x:
- Set Repeat Mode On User's Playback :x:
- Set Volume For User's Playback :x:
- Toggle Shuffle For User's Playback :x:
