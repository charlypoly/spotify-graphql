import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'artist',
  description:
    'Get an Artist: Get Spotify catalog information for a single artist identified by their unique Spotify ID.',
  path: '/artists/{args.id}',
  requestSchema: schema.definition('ArtistInput', {
    market: schema.types.type('string'),
  }),
  argTypeMap: {
    id: 'String',
  },
  responseTypeName: 'ArtistObject',
}

export default operation
