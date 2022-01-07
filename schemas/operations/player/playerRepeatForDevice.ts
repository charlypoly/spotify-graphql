import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerRepeatForDevice',
  method: 'PUT',
  description:
    'Set Repeat Mode On User’s Playback: Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.',
  path: '/me/player/repeat?device_id={args.device_id}&state={args.state}',
  responseTypeName: 'Void',
}

export default operation
