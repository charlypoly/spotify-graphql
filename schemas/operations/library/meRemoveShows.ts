import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'meRemoveShows',
  method: 'DELETE',
  description:
    'Remove Shows for Current User: Remove one or more Shows from the current user’s ‘Your Music’ library.',
  path: '/me/shows',
  requestSchema: schema.definition('MeRemoveShowsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
