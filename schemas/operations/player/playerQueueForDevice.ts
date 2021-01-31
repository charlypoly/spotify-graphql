import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerQueueForDevice',
  method: 'PUT',
  description:
    'Add an item to queue: Add an item to the end of the user’s current playback queue.',
  path: '/me/player/queue?device_id={args.device_id}&uri={args.uri}',
  responseTypeName: 'Void',
}

export default operation
