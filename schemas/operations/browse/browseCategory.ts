import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'browseCategory',
  description:
    'Get a Category: Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).',
  path: '/browse/categories/{args.category_id}',
  requestSchema: schema.definition('BrowseCategoriesInput', {
    country: schema.types.type('string', {
      required: true,
      description: 'an ISO 3166-1 alpha-2 country code',
    }),
    locale: schema.types.type('string'),
  }),
  responseTypeName: 'CategoryObject',
}

export default operation
