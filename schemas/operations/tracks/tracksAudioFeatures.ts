import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'tracksAudioFeatures',
  description:
    'Get Audio Features for Several Tracks: Get audio features for multiple tracks based on their Spotify IDs.',
  path: '/audio-features',
  requestSchema: schema.definition('TracksAudioFeaturesInput', {
    ids: schema.types.type('string', {
      required: true,
      description:
        'A comma-separated list of the Spotify IDs for the tracks. Maximum: 50 IDs.',
    }),
    market: schema.types.type('string'),
  }),
  responseSchema: schema.definition('TracksAudioFeaturesOutput', {
    audio_features: schema.types.arrayOf(
      schema.types.definition('AudioFeaturesObject')
    ),
  }),
}

export default operation
