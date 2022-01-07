import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'show',
  description:
    'Get a Show: Get Spotify catalog information for a single show identified by its unique Spotify ID.',
  path: '/shows/{args.id}',
  requestSchema: schema.definition('ShowInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'ShowObject',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
