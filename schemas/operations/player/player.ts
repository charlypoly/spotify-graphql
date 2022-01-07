import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'player',
  description:
    "Get Information About The User's Current Playback: Get information about the user’s current playback state, including track or episode, progress, and active device.",
  path: '/me/player',
  requestSchema: schema.definition('PlayerInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'CurrentlyPlayingContextObject',
}

export default operation
