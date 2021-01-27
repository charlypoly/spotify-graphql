import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playlistAddItem',
  description:
    'Add Items to a Playlist: Add one or more items to a user’s playlist.',
  path: '/playlists/{args.id}/tracks',
  requestSchema: schema.definition('PlaylistAddItemInput', {
    position: schema.types.type('number'),
    uris: schema.types.type('string', {
      description:
        'A comma-separated list of Spotify URIs to add, can be track or episode URIs.',
    }),
  }),
  responseSchema: schema.definition('PlaylistAddItemOutput', {
    snapshot_id: schema.types.type('string'),
  }),
}

export default operation
