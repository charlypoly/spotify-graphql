import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'episode',
  description:
    'Get an Episode: Get Spotify catalog information for a single episode identified by its unique Spotify ID.',
  path: '/episodes/{args.id}',
  requestSchema: schema.definition('EpisodeInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'EpisodeObject',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
