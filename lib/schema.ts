const schema = `
type Track {
  id: String
  album: SimplifiedAlbum
  artists: [SimplifiedArtist]
  available_markets: [String]
  audio_features: AudioFeatures
  disc_number: Int
  duration_ms: Int
  explicit: Boolean
  href: String
  is_playable: Boolean
  name: String
  popularity: Int
  preview_url: String
  track_number: Int
  type: String
  uri: String
}

type Artist {
  id: String
  genres: [String]
  href: String
  name: String
  popularity: Int
  type: String
  uri: String,
  topTracks: [Track]
}

type SimplifiedArtist {
  id: String
  href: String
  name: String
  type: String
  uri: String
}

type Album {
  id: String
  album_type: String
  artists: [Artist],
  available_markets: [String]
  genres: [String]
  href: String
  label: String
  name: String
  popularity: Int
  release_date: String
  release_date_precision: String
  type: String
  uri: String
}

type SimplifiedAlbum {
  id: String
  album_type: String
  artists: [Artist],
  available_markets: [String]
  href: String
  label: String
  name: String
  type: String
  uri: String
}

type PrivateUser {
  id: String
  birthday: String
  country: String
  display_name: String
  email: String
  href: String
  product: String
  uri: String
  tracks(throttle: Int, debug: Int, continueOnError: Int): [SavedTrack]
  playlists(throttle: Int, debug: Int, continueOnError: Int): [Playlist]
}

type SavedTrack {
  added_at: String
  track: Track
}

type PlaylistTrack {
  added_at: String
  track: Track
  added_by: PublicUser
  is_local: Boolean
}

type PublicUser {
  id: String
  display_name: String
  href: String
  uri: String
}

type Playlist {
  id: String
  description: String
  href: String
  name: String
  owner: PublicUser
  uri: String
  tracks(throttle: Int, debug: Int, continueOnError: Int): [PlaylistTrack]
  public: Boolean
}

type AudioFeatures {
  id: String
  acousticness: String
  analysis_url: String
  danceability: String
  duration_ms: String
  energy: String
  instrumentalness: String
  key: String
  liveness: String
  loudness: String
  mode: String
  speechiness: String
  tempo: String
  time_signature: String
  track_href: String
  valence: String
}


# the schema allows the following query:
type Query {
  track(id: String): Track
  me: PrivateUser
  user(id: String): PrivateUser
  artist(id: String): Artist
  audio_features(trackIds: String): [AudioFeatures]
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
}
`;

export default schema;