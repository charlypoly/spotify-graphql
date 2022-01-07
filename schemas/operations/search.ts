import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Query',
  field: 'search',
  description:
    'Search for an Item: Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.',
  path: '/search',
  requestSchema: schema.definition('Search', {
    q: schema.types.type('string', { required: true }),
    // comma-separated list of item types to search across.
    type: schema.types.type('string', {
      required: true,
      description:
        'comma-separated list of item types to search across. Valid types are: album, artist, playlist, track, show and episode.',
    }),
    market: schema.types.type('string'),
    limit: schema.types.type('number'),
    include_external: schema.types.enumOf('audio'),
  }),
  responseSchema: schema.definition('SearchResults', {
    artists: schema.types.definition('SearchResultsArtists'),
    albums: schema.types.definition('SearchResultsAlbums'),
    shows: schema.types.definition('SearchResultsShows'),
    tracks: schema.types.definition('SearchResultsTracks'),
    episodes: schema.types.definition('SearchResultsEpisodes'),
  }),
}

export default operation
