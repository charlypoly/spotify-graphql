import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meTracksContains',
  description:
    "Check User's Saved Tracks: Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/tracks/contains',
  requestSchema: schema.definition('MeTracksContainsInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseSchema: './json-schemas/base.json#/definitions/ArrayOfBooleans',
}

export default operation
