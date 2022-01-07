import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'tracks',
  description:
    'Get Several Tracks: Get Spotify catalog information for multiple tracks based on their Spotify IDs.',
  path: '/tracks',
  requestSchema: schema.definition('TracksInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('TracksOutput', {
    tracks: schema.types.arrayOf(schema.types.definition('TrackObject')),
  }),
}

export default operation
