import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'trackAudioFeatures',
  description:
    'Get Audio Features for a Track: Get audio feature information for a single track identified by its unique Spotify ID.',
  path: '/audio-features/{args.id}',
  requestSchema: schema.definition('TrackAudioFeaturesInput', {
    market: schema.types.type('string'),
  }),
  responseTypeName: 'AudioFeaturesObject',
}

export default operation
