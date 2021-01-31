import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Mutation',
  field: 'playlistReorderOrReplaceItems',
  method: 'PUT',
  description: "Reorder or Replace a Playlist's Items",
  path: '/playlists/{args.id}/tracks',
  requestSchema: schema.definition('PlaylistAddItemInput', {
    uris: schema.types.type('string', {
      description:
        'A comma-separated list of Spotify URIs to add, can be track or episode URIs.',
    }),
    range_start: schema.types.type('number'),
    insert_before: schema.types.type('number'),
    range_length: schema.types.type('number'),
    snapshot_id: schema.types.type('string'),
  }),
  responseSchema: schema.definition('PlaylistAddItemOutput', {
    snapshot_id: schema.types.type('string'),
  }),
  argTypeMap: {
    id: 'String',
  },
}

export default operation
