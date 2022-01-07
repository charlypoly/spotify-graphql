import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'meSaveAlbums',
  method: 'PUT',
  description:
    'Save Albums for Current User: Save one or more albums to the current user’s ‘Your Music’ library.',
  path: '/me/albums',
  requestSchema: schema.definition('MeSaveAlbumsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
