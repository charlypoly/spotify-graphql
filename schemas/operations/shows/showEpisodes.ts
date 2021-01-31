import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'
import { offsetPagingObjectOf } from '../../base'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'showEpisodes',
  description:
    "Get a Show's Episodes: Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.",
  path: '/shows/{args.id}/episodes',
  requestSchema: schema.definition('ShowEpisodesInput', {
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition(
    'ShowEpisodesOutput',
    offsetPagingObjectOf('SimplifiedEpisodeObject')
  ),
  argTypeMap: {
    id: 'String',
  },
}

export default operation
