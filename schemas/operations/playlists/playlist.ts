import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'playlist',
  description: 'Get a Playlist: Get a playlist owned by a Spotify user.',
  path: '/playlists/{args.id}',
  requestSchema: schema.definition('PlaylistInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'PlaylistObject',
}

export default operation
