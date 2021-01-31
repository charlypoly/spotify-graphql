import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerShuffle',
  method: 'PUT',
  description:
    'Toggle Shuffle For User’s Playback: Toggle shuffle on or off for user’s playback.',
  path: '/me/player/shuffle?state={args.state}',
  responseTypeName: 'Void',
  argTypeMap: {
    state: 'Boolean',
  },
}

export default operation
