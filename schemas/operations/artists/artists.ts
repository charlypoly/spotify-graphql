import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'artists',
  description:
    'Get Multiple Artists: Get Spotify catalog information for several artists based on their Spotify IDs.',
  path: '/artists',
  requestSchema: schema.definition('ArtistsInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('ArtistsOutput', {
    artists: schema.types.arrayOf(schema.types.definition('ArtistObject')),
  }),
}

export default operation
