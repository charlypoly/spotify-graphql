import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'meAlbums',
  description:
    "Get User's Saved Albums: Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library.",
  path: '/me/albums',
  requestSchema: schema.definition('MeAlbumsInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'MeAlbumsOutput',
    offsetPagingObjectOf('SavedAlbumObject')
  ),
}

export default operation
