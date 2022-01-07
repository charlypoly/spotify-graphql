import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'playerCurrentlyPlaying',
  description:
    "Get the User's Currently Playing Track: Get the object currently being played on the user’s Spotify account.",
  path: '/me/player/currently-playing',
  requestSchema: schema.definition('PlayerCurrentlyPlayingInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'CurrentlyPlayingContextObject',
}

export default operation
