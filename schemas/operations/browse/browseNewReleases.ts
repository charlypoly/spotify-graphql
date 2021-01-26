import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaOperation = {
  type: 'Query',
  field: 'browseNewReleases',
  description:
    'Get All New Releases: Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).',
  path: '/browse/new-releases',
  requestSchema: schema.definition('BrowseNewReleasesInput', {
    country: schema.types.type('string', {
      required: true,
      description: 'an ISO 3166-1 alpha-2 country code',
    }),
    limit: schema.types.type('number'),
    offset: schema.types.type('number'),
  }),
  responseSchema: schema.definition('BrowseNewReleasesOutput', {
    albums: schema.types.definition('BrowseNewReleasesAlbums'),
  }),
}

export default operation
