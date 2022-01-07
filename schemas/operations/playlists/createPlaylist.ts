import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'createPlaylist',
  description:
    'Create a Playlist: Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)',
  path: '/users/{args.user_id}/playlists',
  requestSchema: schema.definition('UserPlaylistsInput', {
    name: schema.types.type('string', { required: true }),
    public: schema.types.type('boolean'),
    collaborative: schema.types.type('boolean'),
    description: schema.types.type('string'),
  }),
  argTypeMap: {
    user_id: 'String',
  },
  responseTypeName: 'PlaylistObject',
}

export default operation
