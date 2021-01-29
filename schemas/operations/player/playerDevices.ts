import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'playerDevices',
  description:
    "Get a User's Available Devices: Get information about a user’s available devices.",
  path: '/me/player/devices',
  responseTypeName: 'DevicesObject',
}

export default operation
