import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'unfollowUsers',
  method: 'DELETE',
  path: '/me/following?type=user&ids={args.ids}',
  responseTypeName: 'Void',
  argTypeMap: {
    ids: 'String',
  },
}

export default operation
