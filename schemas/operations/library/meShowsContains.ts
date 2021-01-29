import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'meShowsContains',
  description:
    "Check User's Saved Shows: Check if one or more shows is already saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/shows/contains',
  requestSchema: schema.definition('MeShowsContainsInput', {
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
