import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'mePlaylists',
  description:
    "Get a List of Current User's Playlists: Get a list of the playlists owned or followed by the current Spotify user.",
  path: '/me/playlists',
  requestSchema: schema.definition('MePlaylistsInput', {
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MePlaylistsOutput',
    offsetPagingObjectOf('SimplifiedPlaylistObject')
  ),
}

export default operation
