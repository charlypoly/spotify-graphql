import { YamlConfig } from '@graphql-mesh/types'
import { definition, schema, types } from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playerTransfer',
  method: 'PUT',
  description:
    "Get a User's Available Devices: Get information about a user’s available devices.",
  path: '/me/player/devices',
  requestSchema: definition('PlayerTransferInput', {
    device_ids: types.arrayOf(types.type('string'), {
      description:
        ' Although an array is accepted, only a single device_id is currently supported.',
    }),
    play: types.type('boolean'),
  }),
  responseSchema: definition('PlayerTransferOutput', {
    empty_response: types.type('string'),
  }),
}

export default operation
