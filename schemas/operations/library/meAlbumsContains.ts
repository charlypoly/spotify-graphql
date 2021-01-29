import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'meAlbumsContains',
  description:
    "Check User's Saved Albums: Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/albums/contains',
  requestSchema: schema.definition('MeAlbumsContainsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseSchema: {
    type: 'array',
    items: {
      type: 'boolean',
    },
  },
}

export default operation
