import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'track',
  description:
    'Get a Track: Get Spotify catalog information for a single track identified by its unique Spotify ID.',
  path: '/tracks/{args.id}',
  requestSchema: schema.definition('TrackInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'TrackObject',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
