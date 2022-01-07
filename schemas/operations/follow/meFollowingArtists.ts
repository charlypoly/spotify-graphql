import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meFollowingArtists',
  description:
    "Get User's Followed Artists: Get the current user’s followed artists.",
  path: '/me/following?type=artist',
  requestSchema: schema.definition('MeFollowingArtistsInput', {
    limit: schema.types.type('number'),
    after: schema.types.type('string'),
  }),
  responseSchema: schema.definition('MeFollowingArtistsOutput', {
    artists: schema.types.definition('MeFollowingArtistsOutputArtists'),
  }),
}

export default operation
