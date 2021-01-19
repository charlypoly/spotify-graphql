import * as schema from 'functional-json-schema'

export const cursorPagingObjectOf = (type: string) => ({
  href: schema.types.type('string'),
  next: schema.types.type('string'),
  previous: schema.types.type('string'),
  limit: schema.types.type('number'),
  total: schema.types.type('number'),
  items: schema.types.arrayOf(schema.types.definition(type)),
  cursors: schema.types.arrayOf(schema.types.definition('CursorObject')),
})

export const offsetPagingObjectOf = (type: string) => ({
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
      followers: schema.types.arrayOf(
        schema.types.definition('FollowersObject')
      ),
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
      item: schema.types.anyOf(
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
      item: schema.types.anyOf(
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
    EpisodeObject: {},
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
    PlaylistObject: {},

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
  }
)

export default base
