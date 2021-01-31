import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'followArtists',
  method: 'PUT',
  path: '/me/following?type=artist&ids={args.ids}',
  responseTypeName: 'Void',
  argTypeMap: {
    ids: 'String',
  },
}

export default operation
