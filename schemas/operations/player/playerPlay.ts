import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerPlay',
  method: 'PUT',
  description:
    "Start/Resume a User's Playback: Start a new context or resume current playback on the user’s active device.",
  path: '/me/player/play',
  requestSchema: schema.definition('PlayerPlayInput', {
    context_uri: schema.types.type('string'),
    uris: schema.types.arrayOf(schema.types.type('string')),
    // offset: schema.types.type('string'),
    position_ms: schema.types.type('number'),
  }),
  responseTypeName: 'Void',
}

export default operation
