import * as schema from 'functional-json-schema'

export const cursorPagingObjectOf = (type: string) => ({
  href: schema.types.type('string'),
  next: schema.types.type('string'),
  limit: schema.types.type('number'),
  total: schema.types.type('number'),
  items: schema.types.arrayOf(schema.types.definition(type)),
  cursors: schema.types.arrayOf(schema.types.definition('CursorObject')),
})

const base = schema.schema(
  {},
  {
    CursorObject: {
      after: schema.types.type('string'),
      before: schema.types.type('string'),
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
    PlayHistoryObject: {
      played_at: schema.types.type('string'), // timestamp
      context: schema.types.definition('ContextObject'),
      track: schema.types.definition('SimplifiedTrackObject'),
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
