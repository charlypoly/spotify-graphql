import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

import { cursorPagingObjectOf } from '../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'playerRecentlyPlayed',
  description:
    "Get Current User's Recently Played Tracks: Get tracks from the current user’s recently played tracks. Note: Currently doesn’t support podcast episodes.",
  path: '/me/player/recently-played',
  requestSchema: schema.definition('PlayerRecentlyPlayedInput', {
    limit: schema.types.type('number'),
    after: schema.types.type('number'),
    before: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'PlayerRecentlyPlayed',
    cursorPagingObjectOf('PlayHistoryObject')
  ),
}

export default operation
