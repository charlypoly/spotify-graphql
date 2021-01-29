import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'meTopTracks',
  description:
    'Get Several Tracks: Get Spotify catalog information for multiple tracks based on their Spotify IDs.',
  path: '/me/top/tracks',
  requestSchema: schema.definition('MeTopTracksInput', {
    time_range: schema.types.enumOf('long_term', 'short_term'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeTopTracksOutput',
    offsetPagingObjectOf('TrackObject')
  ),
}

export default operation
