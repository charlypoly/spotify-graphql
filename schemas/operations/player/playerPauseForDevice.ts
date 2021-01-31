import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerPauseForDevice',
  method: 'PUT',
  description: "Pause a User's Playback: Pause playback on the user’s account.",
  path: '/me/player/pause?device_id={args.device_id}',
  responseTypeName: 'Void',
}

export default operation
