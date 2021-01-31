import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'meSaveTracks',
  method: 'PUT',
  description:
    'Save Tracks for Current User: Save one or more tracks to the current user’s ‘Your Music’ library.',
  path: '/me/tracks',
  requestSchema: schema.definition('MeSaveTracksInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
