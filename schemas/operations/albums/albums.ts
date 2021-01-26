import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'albums',
  description:
    'Get Multiple Albums: Get Spotify catalog information for multiple albums identified by their Spotify IDs.',
  path: '/albums',
  requestSchema: schema.definition('AlbumsInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the albums. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('AlbumsOutput', {
    albums: schema.types.arrayOf(schema.types.definition('AlbumObject')),
  }),
}

export default operation
