import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'followPlaylist',
  method: 'PUT',
  description:
    'Follow a Playlist: Add the current user as a follower of a playlist.',
  path: '/playlists/{args.playlist_id}/follower',
  requestSchema: schema.definition('FollowPlaylistInput', {
    public: schema.types.type('boolean'),
  }),
  responseTypeName: 'Void',
}

export default operation
