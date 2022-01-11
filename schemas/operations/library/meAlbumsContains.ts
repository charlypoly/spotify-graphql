import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meAlbumsContains',
  description:
    "Check User's Saved Albums: Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/albums/contains?ids={args.ids}',
  requestSchema: schema.definition('MeAlbumsContainsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseSchema: './json-schemas/base.json#/definitions/ArrayOfBooleans',
}

export default operation
