import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meTracks',
  description:
    "Get User's Saved Tracks: Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/tracks',
  requestSchema: schema.definition('MeTracksInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeTracksOutput',
    offsetPagingObjectOf('SavedTrackObject')
  ),
}

export default operation
