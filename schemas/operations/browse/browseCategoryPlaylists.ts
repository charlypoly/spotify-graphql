import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'browseCategoryPlaylists',
  description:
    "Get a Category's Playlists: Get a list of Spotify playlists tagged with a particular category.",
  path: '/browse/categories/{args.category_id}/playlists',
  requestSchema: schema.definition('BrowseCategoryPlaylistsInput', {
    country: schema.types.type('string', {
      required: true,
      description: 'an ISO 3166-1 alpha-2 country code',
    }),
    locale: schema.types.type('string'),
  }),
  responseSchema: schema.definition('BrowseCategoryPlaylistsOutput', {
    playlists: schema.types.definition('BrowseCategoryPlaylistsPlaylists'),
  }),
}

export default operation
