import { YamlConfig } from '@graphql-mesh/types'
import { definition, types } from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'browseGenresSeed',
  description:
    'Get Recommendation Genres: Retrieve a list of available genres seed parameter values for recommendations.',
  path: '/recommendations/available-genre-seeds',
  responseSchema: definition('BrowseGenresSeedOutput', {
    genres: types.arrayOf(types.type('string')),
  }),
}

export default operation
