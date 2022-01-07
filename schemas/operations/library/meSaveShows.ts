import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'meSaveShows',
  method: 'PUT',
  description:
    'Save Shows for Current User: Save one or more shows to the current user’s ‘Your Music’ library.',
  path: '/me/shows',
  requestSchema: schema.definition('MeSaveShowsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
