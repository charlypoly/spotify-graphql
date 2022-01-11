import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'userPlaylists',
  description:
    "Get a List of a User's Playlists: Get a list of the playlists owned or followed by a Spotify user.",
  path: '/users/{args.user_id}/playlists',
  requestSchema: schema.definition('UserPlaylistsInput', {
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'UserPlaylistsOutput',
    offsetPagingObjectOf('SimplifiedPlaylistObject'),
    { title: 'UserPlaylistsOutput' }
  ),
  argTypeMap: {
    user_id: 'String',
  },
}

export default operation
