import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'checkUsersFollowPlaylist',
  description:
    'Check if Users Follow a Playlist: Check to see if one or more Spotify users are following a specified playlist.',
  path: '/playlists/{args.playlist_id}/followers/contains?ids={args.ids}',
  responseTypeName: 'Void',
  argTypeMap: {
    ids: 'String',
  },
}

export default operation
