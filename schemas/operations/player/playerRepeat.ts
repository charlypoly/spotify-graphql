import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerRepeat',
  method: 'PUT',
  description:
    'Set Repeat Mode On User’s Playback: Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.',
  path: '/me/player/repeat?state={args.state}',
  responseTypeName: 'Void',
}

export default operation
