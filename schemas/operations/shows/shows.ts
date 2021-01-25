import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'shows',
  description:
    'Get Multiple Shows: Get Spotify catalog information for several shows based on their Spotify IDs.',
  path: '/shows',
  requestSchema: schema.definition('ShowsInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('ShowsOutput', {
    shows: schema.types.arrayOf(
      schema.types.definition('SimplifiedShowObject')
    ),
  }),
}

export default operation
