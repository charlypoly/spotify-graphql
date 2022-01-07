import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerShuffleForDevice',
  method: 'PUT',
  description:
    'Toggle Shuffle For User’s Playback: Toggle shuffle on or off for user’s playback.',
  path: '/me/player/shuffle?device_id={args.device_id}&state={args.state}',
  responseTypeName: 'Void',
  argTypeMap: {
    state: 'Boolean',
  },
}

export default operation
