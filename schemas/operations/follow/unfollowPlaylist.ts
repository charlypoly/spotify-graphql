import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'unfollowPlaylist',
  method: 'DELETE',
  description:
    'Unfollow Playlist: Remove the current user as a follower of a playlist.',
  path: '/playlists/{args.playlist_id}/follower',
  responseTypeName: 'Void',
}

export default operation
