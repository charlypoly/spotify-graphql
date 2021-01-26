import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'browseCategories',
  description:
    'Get All Categories: Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).',
  path: '/browse/categories',
  requestSchema: schema.definition('BrowseCategoriesInput', {
    country: schema.types.type('string', {
      required: true,
      description: 'an ISO 3166-1 alpha-2 country code',
    }),
    locale: schema.types.type('string'),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition('BrowseCategoriesOutput', {
    categories: schema.types.definition('BrowseCategoriesCategories'),
  }),
}

export default operation
