const schema = `
type Track {
  id: String
  album(full: Int): Album
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
  uri: String
  images: [Image]
  top_tracks(country: String): [Track]
  albums(throttle: Int, debug: Int, continueOnError: Int): [Album]
  related_artists(throttle: Int, debug: Int, continueOnError: Int): [Artist]
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
  artists: [Artist]
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
  images: [Image]
  tracks(throttle: Int, debug: Int, continueOnError: Int): [Track]
}

type SimplifiedAlbum {
  id: String
  album_type: String
  artists: [Artist]
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
  tracks: [SavedTrack]
  playlists: [Playlist]
  albums: [SavedAlbum]
  top_artists: [Artist]
  top_tracks: [Track]
  images: [Image]
}

type SavedTrack {
  added_at: String
  track: Track
}

type SavedAlbum {
  added_at: String
  album: Album
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
  playlists: [Playlist]
  images: [Image]
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
  images: [Image]
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

type Image {
  height: Int
  url: String
  width: Int
}

# the schema allows the following query:
type Query {
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
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
}
`;

export default schema;