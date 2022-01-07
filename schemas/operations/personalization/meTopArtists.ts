import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meTopArtists',
  description:
    'Get Current User top artists',
  path: '/me/top/artists',
  requestSchema: schema.definition('MeTopArtistsInput', {
    time_range: schema.types.enumOf('long_term', 'short_term'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeTopArtistsOutput',
    offsetPagingObjectOf('ArtistObject'),
    { title: 'MeTopArtistsOutput' }
  ),
}

export default operation
