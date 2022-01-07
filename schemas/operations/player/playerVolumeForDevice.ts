import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerVolumeForDevice',
  method: 'PUT',
  description:
    "Set Volume For User's Playback: Set the volume for the user’s current playback device.",
  path:
    '/me/player/volume?device_id={args.device_id}&volume_percent={args.state}',
  responseTypeName: 'Void',
  argTypeMap: {
    volume_percent: 'Int',
  },
}

export default operation
