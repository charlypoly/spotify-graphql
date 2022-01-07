import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meTopTracks',
  description:
    'Get Current User top tracks',
  path: '/me/top/tracks',
  requestSchema: schema.definition('MeTopTracksInput', {
    time_range: schema.types.enumOf('long_term', 'short_term'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeTopTracksOutput',
    offsetPagingObjectOf('TrackObject'),
    { title: 'MeTopTracksOutput' }
  ),
}

export default operation
