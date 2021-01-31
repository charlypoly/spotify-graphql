import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'playlistTracks',
  description: 'Get a Playlist: Get a playlist owned by a Spotify user.',
  path: '/playlists/{args.id}/tracks',
  requestSchema: schema.definition('PlaylistTracksInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'PlaylistTracksOutput',
    offsetPagingObjectOf('PlaylistTrackObject')
  ),
  argTypeMap: {
    id: 'String',
  },
}

export default operation
