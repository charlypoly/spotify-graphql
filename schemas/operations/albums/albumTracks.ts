import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'albumTracks',
  description:
    'Get an Album: Get Spotify catalog information for a single album.',
  path: '/albums/{args.id}/tracks',
  requestSchema: schema.definition('AlbumTracksInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'AlbumTracksOutput',
    offsetPagingObjectOf('SimplifiedTrackObject')
  ),
}

export default operation
