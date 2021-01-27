import * as schema from 'functional-json-schema'

export const objectTypes = {
  AlbumObject: {
    album_type: schema.types.enumOf('album', 'single', 'compilation'),
    artists: schema.types.arrayOf(schema.types.definition('ArtistObject')),
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    copyrights: schema.types.arrayOf(
      schema.types.definition('CopyrightObject')
    ),
    external_urls: schema.types.definition('ExternalUrlObject'),
    external_ids: schema.types.definition('ExternalIdObject'),
    genres: schema.types.arrayOf(schema.types.type('string')),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    label: schema.types.type('string'),
    name: schema.types.type('string'),
    popularity: schema.types.type('number'),
    release_date: schema.types.type('string'),
    release_date_precision: schema.types.enumOf('year', 'month', 'day'),
    restrictions: schema.types.definition('AlbumRestrictionObject'),
    tracks: schema.types.arrayOf(
      schema.types.definition('SimplifiedTrackObject')
    ),
    uri: schema.types.type('string'),
    type: schema.types.type('string'),
  },
  AlbumRestrictionObject: {
    reason: schema.types.enumOf('market', 'product', 'explicit'),
  },
  ArtistObject: {
    external_urls: schema.types.definition('ExternalUrlObject'),
    followers: schema.types.arrayOf(schema.types.definition('FollowersObject')),
    genres: schema.types.arrayOf(schema.types.type('string')),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
    popularity: schema.types.type('number'),
    name: schema.types.type('string'),
  },
  AudioFeaturesObject: {
    id: schema.types.type('string'),
    acousticness: schema.types.type('number'),
    analysis_url: schema.types.type('string'),
    danceability: schema.types.type('number'),
    duration_ms: schema.types.type('number'),
    energy: schema.types.type('number'),
    instrumentalness: schema.types.type('number'),
    key: schema.types.type('number'),
    liveness: schema.types.type('number'),
    loudness: schema.types.type('number'),
    mode: schema.types.type('number'),
    speechiness: schema.types.type('number'),
    tempo: schema.types.type('number'),
    time_signature: schema.types.type('number'),
    track_href: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
    valence: schema.types.type('number'),
  },
  CursorObject: {
    after: schema.types.type('string'),
    before: schema.types.type('string'),
  },
  CategoryObject: {
    href: schema.types.type('string'),
    icons: schema.types.arrayOf(schema.types.definition('ImageObject')),
    id: schema.types.type('string'),
    name: schema.types.type('string'),
  },
  ExternalUrlObject: {
    spotify: schema.types.type('string'),
  },
  ContextObject: {
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    type: schema.types.enumOf('artist', 'playlist', 'album', 'show'),
    url: schema.types.type('string'),
  },
  CopyrightObject: {
    text: schema.types.type('string'),
    type: schema.types.enumOf('C', 'P'),
  },
  CurrentlyPlayingContextObject: {
    actions: schema.types.definition('DisallowsObject'),
    context: schema.types.definition('ContextObject'),
    currently_playing_type: schema.types.type('string'),
    device: schema.types.definition('DeviceObject'),
    is_playing: schema.types.type('boolean'),
    item: schema.types.oneOf(
      schema.types.definition('TrackObject'),
      schema.types.definition('EpisodeObject')
    ),
    progress_ms: schema.types.type('number'),
    repeat_state: schema.types.type('string'),
    shuffle_state: schema.types.type('string'),
    timestamp: schema.types.type('number'),
  },
  CurrentlyPlayingObject: {
    context: schema.types.definition('ContextObject'),
    currently_playing_type: schema.types.type('string'),
    is_playing: schema.types.type('boolean'),
    item: schema.types.oneOf(
      schema.types.definition('TrackObject'),
      schema.types.definition('EpisodeObject')
    ),
    progress_ms: schema.types.type('number'),
    timestamp: schema.types.type('number'),
  },
  DeviceObject: {
    id: schema.types.type('string'),
    is_active: schema.types.type('boolean'),
    is_private_session: schema.types.type('boolean'),
    is_restricted: schema.types.type('boolean'),
    name: schema.types.type('string'),
    type: schema.types.type('string'),
    volume_percent: schema.types.type('number'),
  },
  DevicesObject: {
    devices: schema.types.arrayOf(schema.types.definition('DeviceObject')),
  },
  DisallowsObject: {
    interrupting_playback: schema.types.type('boolean'),
    pausing: schema.types.type('boolean'),
    resuming: schema.types.type('boolean'),
    seeking: schema.types.type('boolean'),
    skipping_next: schema.types.type('boolean'),
    skipping_prev: schema.types.type('boolean'),
    toggling_repeat_context: schema.types.type('boolean'),
    toggling_repeat_track: schema.types.type('boolean'),
    toggling_shuffle: schema.types.type('boolean'),
    transferring_playback: schema.types.type('boolean'),
  },
  EpisodeObject: {
    audio_preview_url: schema.types.type('string'),
    description: schema.types.type('string'),
    duration_ms: schema.types.type('number'),
    explicit: schema.types.type('boolean'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    is_externally_hosted: schema.types.type('boolean'),
    is_playable: schema.types.type('boolean'),
    language: schema.types.type('string'),
    languages: schema.types.arrayOf(schema.types.type('string')),
    name: schema.types.type('string'),
    release_date: schema.types.type('string'),
    release_date_precision: schema.types.enumOf('year', 'month', 'day'),
    resume_point: schema.types.definition('ResumePointObject'),
    show: schema.types.definition('SimplifiedShowObject'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  ErrorObject: {
    message: schema.types.type('string'),
    status: schema.types.type('number'),
  },
  ExplicitContentSettingsObject: {
    filter_enabled: schema.types.type('boolean'),
    filter_locker: schema.types.type('boolean'),
  },
  ExternalIdObject: {
    ean: schema.types.type('string'),
    isrc: schema.types.type('string'),
    upc: schema.types.type('string'),
  },
  FollowersObject: {
    href: schema.types.type('string'),
    total: schema.types.type('number'),
  },
  ImageObject: {
    url: schema.types.type('string'),
    height: schema.types.type('number'),
    width: schema.types.type('number'),
  },
  LinkedTrackObject: {
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  PlayHistoryObject: {
    played_at: schema.types.type('string'), // timestamp date string
    context: schema.types.definition('ContextObject'),
    track: schema.types.definition('SimplifiedTrackObject'),
  },
  PlayerErrorObject: {
    message: schema.types.type('string'),
    reason: schema.types.type('string'),
    status: schema.types.type('number'),
  },
  PlaylistObject: {
    collaborative: schema.types.type('boolean'),
    description: schema.types.type('string'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    followers: schema.types.arrayOf(schema.types.definition('FollowersObject')),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    name: schema.types.type('string'),
    owner: schema.types.definition('PublicUserObject'),
    public: schema.types.type('boolean'),
    snapshot_id: schema.types.type('string'),
    tracks: schema.types.arrayOf(
      schema.types.definition('PlaylistTrackObject')
    ),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  PlaylistTrackObject: {
    added_at: schema.types.type('string'), // timestamp date string
    added_by: schema.types.definition('PublicUserObject'),
    is_local: schema.types.type('boolean'),
    track: schema.types.definition('TrackObject'),
    // track: schema.types.oneOf(
    //   schema.types.definition('TrackObject'),
    //   schema.types.definition('EpisodeObject')
    // ),
  },
  PlaylistTracksRefObject: {
    href: schema.types.type('string'),
    total: schema.types.type('number'),
  },
  PrivateUserObject: {
    country: schema.types.type('string'),
    display_name: schema.types.type('string'),
    email: schema.types.type('string'),
    explicit_content: schema.types.definition('ExplicitContentSettingsObject'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    followers: schema.types.arrayOf(schema.types.definition('FollowersObject')),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    product: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  PublicUserObject: {
    display_name: schema.types.type('string'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    followers: schema.types.arrayOf(schema.types.definition('FollowersObject')),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  RecommendationSeedObject: {
    afterFilteringSize: schema.types.type('number'),
    afterRelinkingSize: schema.types.type('number'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    initialPoolSize: schema.types.type('number'),
    type: schema.types.type('string'),
  },
  RecommendationsObject: {
    seeds: schema.types.arrayOf(
      schema.types.definition('RecommendationSeedObject')
    ),
    tracks: schema.types.arrayOf(
      schema.types.definition('SimplifiedTrackObject')
    ),
  },
  ResumePointObject: {
    fully_played: schema.types.type('boolean'),
    resume_position_ms: schema.types.type('number'),
  },
  SavedAlbumObject: {
    added_at: schema.types.type('string'), // timestamp date string
    album: schema.types.definition('AlbumObject'),
  },
  SavedShowObject: {
    added_at: schema.types.type('string'), // timestamp date string
    album: schema.types.definition('SimplifiedShowObject'),
  },
  SavedTrackObject: {
    added_at: schema.types.type('string'), // timestamp date string
    album: schema.types.definition('TrackObject'),
  },
  ShowObject: {
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    copyrights: schema.types.arrayOf(
      schema.types.definition('CopyrightObject')
    ),
    description: schema.types.type('string'),
    episodes: schema.types.arrayOf(
      schema.types.definition('SimplifiedEpisodeObject')
    ),
    explicit: schema.types.type('boolean'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    is_externally_hosted: schema.types.type('boolean'),
    languages: schema.types.arrayOf(schema.types.type('string')),
    media_type: schema.types.type('string'),
    name: schema.types.type('string'),
    publisher: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  SimplifiedAlbumObject: {
    album_group: schema.types.type('string'),
    album_type: schema.types.type('string'),
    artists: schema.types.arrayOf(
      schema.types.definition('SimplifiedArtistObject')
    ),
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    name: schema.types.type('string'),
    release_date: schema.types.type('string'),
    release_date_precision: schema.types.enumOf('year', 'month', 'day'),
    restrictions: schema.types.definition('AlbumRestrictionObject'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  SimplifiedEpisodeObject: {
    audio_preview_url: schema.types.type('string'),
    description: schema.types.type('string'),
    duration_ms: schema.types.type('number'),
    explicit: schema.types.type('boolean'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    is_externally_hosted: schema.types.type('boolean'),
    is_playable: schema.types.type('boolean'),
    language: schema.types.type('string'),
    languages: schema.types.arrayOf(schema.types.type('string')),
    name: schema.types.type('string'),
    release_date: schema.types.type('string'),
    release_date_precision: schema.types.enumOf('year', 'month', 'day'),
    resume_point: schema.types.definition('ResumePointObject'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  SimplifiedPlaylistObject: {
    collaborative: schema.types.type('boolean'),
    description: schema.types.type('string'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    name: schema.types.type('string'),
    owner: schema.types.definition('PublicUserObject'),
    public: schema.types.type('boolean'),
    snapshot_id: schema.types.type('string'),
    tracks: schema.types.definition('PlaylistTracksRefObject'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  SimplifiedShowObject: {
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    copyrights: schema.types.arrayOf(
      schema.types.definition('CopyrightObject')
    ),
    description: schema.types.type('string'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    images: schema.types.arrayOf(schema.types.definition('ImageObject')),
    is_externally_hosted: schema.types.type('boolean'),
    languages: schema.types.arrayOf(schema.types.type('string')),
    media_type: schema.types.type('string'),
    name: schema.types.type('string'),
    publisher: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  SimplifiedArtistObject: {
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
    name: schema.types.type('string'),
  },
  TrackRestrictionObject: {
    reason: schema.types.enumOf('market', 'product', 'explicit'),
  },
  SimplifiedTrackObject: {
    artists: schema.types.arrayOf(
      schema.types.definition('SimplifiedArtistObject')
    ),
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    disc_number: schema.types.type('number'),
    duration_ms: schema.types.type('number'),
    explicit: schema.types.type('boolean'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    is_local: schema.types.type('boolean'),
    is_playable: schema.types.type('boolean'),
    // documented but not-found..
    // linked_from: schema.types.definition('LinkedTrackObject'),
    name: schema.types.type('string'),
    preview_url: schema.types.type('string'),
    restrictions: schema.types.definition('TrackRestrictionObject'),
    track_number: schema.types.type('number'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  TrackObject: {
    album: schema.types.definition('SimplifiedAlbumObject'),
    artists: schema.types.arrayOf(schema.types.definition('ArtistObject')),
    available_markets: schema.types.arrayOf(schema.types.type('string')),
    disc_number: schema.types.type('number'),
    duration_ms: schema.types.type('number'),
    explicit: schema.types.type('boolean'),
    external_ids: schema.types.definition('ExternalIdObject'),
    external_urls: schema.types.definition('ExternalUrlObject'),
    href: schema.types.type('string'),
    id: schema.types.type('string'),
    is_playable: schema.types.type('boolean'),
    // documented but not-found..
    // linked_from: schema.types.definition('LinkedTrackObject'),
    name: schema.types.type('string'),
    popularity: schema.types.type('number'),
    preview_url: schema.types.type('string'),
    restrictions: schema.types.definition('TrackRestrictionObject'),
    track_number: schema.types.type('number'),
    type: schema.types.type('string'),
    uri: schema.types.type('string'),
  },
  TuneableTrackObject: {
    acousticness: schema.types.type('number'),
    danceability: schema.types.type('number'),
    duration_ms: schema.types.type('number'),
    energy: schema.types.type('number'),
    instrumentalness: schema.types.type('number'),
    key: schema.types.type('number'),
    liveness: schema.types.type('number'),
    loudness: schema.types.type('number'),
    mode: schema.types.type('number'),
    popularity: schema.types.type('number'),
    speechiness: schema.types.type('number'),
    tempo: schema.types.type('number'),
    time_signature: schema.types.type('number'),
    valence: schema.types.type('number'),
  },
}

export const cursorPagingObjectOf = (type: keyof typeof objectTypes) => ({
  href: schema.types.type('string'),
  next: schema.types.type('string'),
  previous: schema.types.type('string'),
  limit: schema.types.type('number'),
  total: schema.types.type('number'),
  items: schema.types.arrayOf(schema.types.definition(type)),
  cursors: schema.types.arrayOf(schema.types.definition('CursorObject')),
})

export const offsetPagingObjectOf = (type: keyof typeof objectTypes) => ({
  href: schema.types.type('string'),
  next: schema.types.type('string'),
  previous: schema.types.type('string'),
  limit: schema.types.type('number'),
  total: schema.types.type('number'),
  items: schema.types.arrayOf(schema.types.definition(type)),
  offset: schema.types.type('number'),
})

const base = schema.schema(
  {},
  {
    ...objectTypes,
    SearchResultsArtists: offsetPagingObjectOf('ArtistObject'),
    SearchResultsAlbums: offsetPagingObjectOf('SimplifiedAlbumObject'),
    SearchResultsShows: offsetPagingObjectOf('SimplifiedShowObject'),
    SearchResultsTracks: offsetPagingObjectOf('TrackObject'),
    SearchResultsEpisodes: offsetPagingObjectOf('SimplifiedEpisodeObject'),
    BrowseNewReleasesAlbums: offsetPagingObjectOf('SimplifiedAlbumObject'),
    BrowseFeaturedPlaylistsPlaylists: offsetPagingObjectOf(
      'SimplifiedPlaylistObject'
    ),
    BrowseCategoryPlaylistsPlaylists: offsetPagingObjectOf(
      'SimplifiedPlaylistObject'
    ),
    BrowseCategoriesCategories: offsetPagingObjectOf('CategoryObject'),
  }
)

export default base
