import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'artistTopTracks',
  description:
    "Get an Artist's Top Tracks: Get Spotify catalog information about an artist’s top tracks by country.",
  path: '/artists/{args.id}/top-tracks',
  requestSchema: schema.definition('ArtistTopTracksInput', {
    market: schema.types.type('string', { required: true }),
  }),
  argTypeMap: {
    id: 'String',
  },
  responseSchema: schema.definition('ArtistTopTracksOutput', {
    tracks: schema.types.arrayOf(schema.types.definition('TrackObject')),
  }),
}

export default operation
