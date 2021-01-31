import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'playlistCoverImages',
  description:
    'Get a Playlist Cover Image: Get the current image associated with a specific playlist.',
  path: '/playlists/{args.id}/images',
  responseSchema: {
    type: 'array',
    items: {
      $ref: '#/definitions/ImageObject',
    },
  },
  argTypeMap: {
    id: 'String',
  },
}

export default operation
