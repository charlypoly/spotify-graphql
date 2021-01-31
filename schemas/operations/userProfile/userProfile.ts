import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'user',
  description:
    "Get a User's Profile: Get public profile information about a Spotify user.",
  path: '/users/{args.id}',
  responseTypeName: 'PublicUserObject',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
