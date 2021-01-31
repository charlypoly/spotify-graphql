import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'artistRelatedArtists',
  description:
    "Get an Artist's Related Artists: Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.",
  path: '/artists/{args.id}/related-artists',
  responseSchema: schema.definition('ArtistRelatedArtistsOutput', {
    artists: schema.types.arrayOf(schema.types.definition('ArtistObject')),
  }),
  argTypeMap: {
    id: 'String',
  },
}

export default operation
