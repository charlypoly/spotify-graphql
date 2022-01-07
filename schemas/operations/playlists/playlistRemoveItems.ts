import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const requestSchema = schema.definition('PlaylistRemoveItemsInput', {
  tracks: schema.types.arrayOf(
    schema.types.definition('PlaylistRemoveItemsInputTracks')
  ),
  snapshot_id: schema.types.type('string'),
})

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playlistRemoveItems',
  method: 'DELETE',
  description:
    'Remove Items from a Playlist: Remove one or more items from a user’s playlist.',
  path: '/playlists/{args.id}/tracks',
  // this one is a bit hacky because this input type needs nested input types
  //  given GraphQL Mesh JSON Schema handler design, all the input types definitions required
  //  needs to be in the same requestSchema (not true for response schemas)
  requestSchema: {
    ...requestSchema,
    definitions: {
      PlaylistRemoveItemsInputTracks: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
          },
        },
      },
      ...requestSchema.definitions,
    },
  },
  argTypeMap: {
    id: 'String',
  },
  responseSchema: schema.definition('PlaylistRemoveItemsOutput', {
    snapshot_id: schema.types.type('string'),
  }),
}

export default operation
