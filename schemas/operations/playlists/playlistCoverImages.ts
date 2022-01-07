import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'playlistCoverImages',
  description:
    'Get a Playlist Cover Image: Get the current image associated with a specific playlist.',
  path: '/playlists/{args.id}/images',
  responseSchema: './json-schemas/base.json#/definitions/ArrayOfImageObjects',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
