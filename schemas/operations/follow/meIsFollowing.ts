import { YamlConfig } from '@graphql-mesh/types'
import { definition } from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meIsFollowing',
  path: '/me/following/contains?type={args.type}&ids={args.ids}',
  argTypeMap: {
    ids: 'String',
    type: 'String',
  },
  responseSchema: './json-schemas/base.json#/definitions/ArrayOfBooleans',
}

export default operation
