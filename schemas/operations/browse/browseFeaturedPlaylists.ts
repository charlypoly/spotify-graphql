import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'browseFeaturedPlaylists',
  description:
    'Get All New Releases: Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).',
  path: '/browse/featured-playlists',
  requestSchema: schema.definition('BrowseFeaturedPlaylistsInput', {
    country: schema.types.type('string', {
      required: true,
      description: 'an ISO 3166-1 alpha-2 country code',
    }),
    timestamp: schema.types.type('string', {
      required: true,
      description: 'a timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss',
    }),
    locale: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition('BrowseFeaturedPlaylistsOutput', {
    playlists: schema.types.definition('BrowseFeaturedPlaylistsPlaylists'),
  }),
}

export default operation
