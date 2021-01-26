import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'album',
  description:
    'Get an Album: Get Spotify catalog information for a single album.',
  path: '/albums/{args.id}',
  requestSchema: schema.definition('AlbumInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'AlbumObject',
}

export default operation
