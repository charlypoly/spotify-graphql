import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerPause',
  method: 'PUT',
  description: "Pause a User's Playback: Pause playback on the user’s account.",
  path: '/me/player/pause',
  responseTypeName: 'Void',
}

export default operation
