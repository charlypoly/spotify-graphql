import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'meRemoveAlbums',
  method: 'DELETE',
  description:
    'Remove Albums for Current User: Remove one or more albums from the current user’s ‘Your Music’ library.',
  path: '/me/albums',
  requestSchema: schema.definition('MeRemoveAlbumsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
