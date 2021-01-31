import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'artistAlbums',
  description:
    "Get an Artist's Albums: Get Spotify catalog information about an artist’s albums.",
  path: '/artists/{args.id}/albums',
  requestSchema: schema.definition('ArtistAlbumsInput', {
    market: schema.types.type('string', { required: true }),
    include_groups: schema.types.type('string', {
      required: true,
      description: 'comma-separated in: album,single,appears_on,compilation',
    }),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  argTypeMap: {
    id: 'String',
  },
  responseSchema: schema.definition(
    'ArtistAlbumsOutput',
    offsetPagingObjectOf('SimplifiedAlbumObject')
  ),
}

export default operation
