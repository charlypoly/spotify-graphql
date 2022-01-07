import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meShows',
  description:
    "Get User's Saved Shows: Get a list of shows saved in the current Spotify user’s library. Optional parameters can be used to limit the number of shows returned.",
  path: '/me/shows',
  requestSchema: schema.definition('MeShowsInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeShowsOutput',
    offsetPagingObjectOf('SavedShowObject')
  ),
}

export default operation
