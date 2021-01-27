import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'me',
  description:
    "Get Current User's Profile: Get detailed profile information about the current user (including the current user’s username).",
  path: '/me',
  responseTypeName: 'PrivateUserObject',
}

export default operation
