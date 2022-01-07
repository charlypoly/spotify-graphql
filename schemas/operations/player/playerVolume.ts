import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerVolume',
  method: 'PUT',
  description:
    "Set Volume For User's Playback: Set the volume for the user’s current playback device.",
  path: '/me/player/volume?volume_percent={args.state}',
  responseTypeName: 'Void',
  argTypeMap: {
    volume_percent: 'Int',
  },
}

export default operation
