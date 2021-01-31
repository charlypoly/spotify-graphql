import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'updatePlaylist',
  method: 'PUT',
  description:
    "Change a Playlist's Details: Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)",
  path: '/playlists/{args.id}',
  requestSchema: schema.definition('UpdatePlaylistInput', {
    name: schema.types.type('string'),
    public: schema.types.type('boolean'),
    collaborative: schema.types.type('boolean'),
    description: schema.types.type('string'),
  }),
  responseTypeName: 'PlaylistObject',
  argTypeMap: {
    id: 'String',
  },
}

export default operation
