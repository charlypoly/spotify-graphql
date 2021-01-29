import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'meTopArtists',
  description:
    'Get Several Artists: Get Spotify catalog information for multiple artists based on their Spotify IDs.',
  path: '/me/top/artists',
  requestSchema: schema.definition('MeTopArtistsInput', {
    time_range: schema.types.enumOf('long_term', 'short_term'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeTopArtistsOutput',
    offsetPagingObjectOf('ArtistObject')
  ),
}

export default operation
