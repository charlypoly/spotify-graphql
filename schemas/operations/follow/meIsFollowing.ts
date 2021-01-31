import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'meIsFollowing',
  path: '/me/following/contains?type={args.type}&ids={args.ids}',
  argTypeMap: {
    ids: 'String',
    type: 'String',
  },
  responseSchema: {
    type: 'array',
    items: {
      type: 'boolean',
    },
  },
}

export default operation
