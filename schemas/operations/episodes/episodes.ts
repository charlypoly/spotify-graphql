import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'episodes',
  description:
    'Get Multiple Episodes: Get Spotify catalog information for several episodes based on their Spotify IDs.',
  path: '/episodes',
  requestSchema: schema.definition('EpisodesInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('EpisodesOutput', {
    episodes: schema.types.arrayOf(schema.types.definition('EpisodeObject')),
  }),
}

export default operation
