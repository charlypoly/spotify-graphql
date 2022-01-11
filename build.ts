import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { YamlConfig } from '@graphql-mesh/types'
import { JSONSchema6 } from 'json-schema'

const glob = require('glob')

import baseSchema from './schemas/base'

const baseSchemaPath = `./json-schemas/base.json`

const generateBaseSchema = (schema: JSONSchema6) => {
  fs.writeFileSync(baseSchemaPath, JSON.stringify(schema, null, 2))
}

const schemaToFilePath = (schema: JSONSchema6 | string, fieldName?: string) => {
  if (typeof schema === 'string') {
    // path
    return schema
  } else if (!schema.$ref) {
    const path = `./json-schemas/${fieldName}.json`
    fs.writeFileSync(path, JSON.stringify(schema, null, 2))
    return path
  } else {
    const baseSchema = JSON.parse(fs.readFileSync(baseSchemaPath).toString() || '{}')
    fs.writeFileSync(baseSchemaPath, JSON.stringify({ ...baseSchema, definitions: { ...(baseSchema.definitions || {}), ...(schema.definitions || {}) } }, null, 2))
    if (!schema.$ref) {
      console.log(schema.$ref, schema)
    }
    return `${baseSchemaPath}${schema.$ref}`
  }
}

const processOperationDefinition = (file): YamlConfig.JsonSchemaHTTPOperation => {
  const operation: YamlConfig.JsonSchemaHTTPOperation = require(file).default
  return {
    ...operation,
    ...(operation.requestTypeName && operation.requestTypeName !== 'Void' ? {
      requestTypeName: undefined,
      requestSchema: `${baseSchemaPath}#/definitions/${operation.requestTypeName}`
    } : {}),
    ...(operation.requestSchema
      ? {
        requestSchema: schemaToFilePath(
          operation.requestSchema,
          operation.field
        ),
      }
      : {}),
    ...(operation.responseTypeName && operation.responseTypeName !== 'Void' ? {
      responseTypeName: undefined,
      responseSchema: `${baseSchemaPath}#/definitions/${operation.responseTypeName}`
    } : {}),
    ...(operation.responseSchema
      ? {
        responseSchema: schemaToFilePath(
          operation.responseSchema,
          operation.field
        ),
      }
      : {}),
  }
}

//  "PrivateUserObject.playlists -> Query.mePlaylists"
//  "AlbumObject{ id }.tracks -> Query.albumTracks(id: id)"
const processAdditionalResolvers = (sourceName, additionalResolvers: string[]) => additionalResolvers.map(additionalResolver => {
  if (additionalResolver[0] === '.' || additionalResolver[0] === '/') {
    // path
    return additionalResolver
  } else {
    const [[targetTypeName, targetFieldName], [sourceTypeName, sourceFieldName]] = additionalResolver.split('->').map(s => s.trim().split('.'))
    let configuration: any = {
      sourceName,
      sourceTypeName,
      sourceFieldName,
      targetTypeName,
      targetFieldName,
    }
    // TODO: parsing error handling
    if (targetTypeName.includes('{') && sourceFieldName.includes('(')) {
      const [targetTypeNameWithoutSelection, requiredSelectionSet] = targetTypeName.split('{')
      configuration.requiredSelectionSet = `{${requiredSelectionSet}`
      configuration.targetTypeName = targetTypeNameWithoutSelection.trim()

      let sourceArgs = {}
      sourceFieldName.match(/\((.*)\)/)[1].split(',').forEach(keyTuple => {
        const [argKey, sourceKey] = keyTuple.split(':')
        sourceArgs[argKey.trim()] = `{root.${sourceKey.trim()}}`
      })

      configuration.sourceFieldName = sourceFieldName.match(/(.*)\(.*\)/)[1]

      if (sourceArgs) {
        configuration.sourceArgs = sourceArgs
      }
    }
    return configuration
  }
})

generateBaseSchema(baseSchema)

glob('./schemas/operations/**/*.ts', (err, files) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  Promise.all(files.map(processOperationDefinition)).then((operations) => {
    const configuration: YamlConfig.Config = {
      sources: [
        {
          name: 'Spotify',
          handler: {
            JsonSchema: {
              baseUrl: 'https://api.spotify.com/v1/',
              operationHeaders: {
                'Authorization': 'Bearer {env.TOKEN}'
              },
              operations: operations as YamlConfig.JsonSchemaHTTPOperation[],
            },
          },
        },
      ],
      additionalTypeDefs: [
        `
        extend type PrivateUserObject {
          playlists: BrowseFeaturedPlaylistsPlaylists!
          player: CurrentlyPlayingContextObject!
          albums: MeAlbumsOutput!
          tracks: MeTracksOutput!
          topTracks: MeTopTracksOutput!
          topArtists: MeTopArtistsOutput!
          followingArtists: MeFollowingArtistsOutput!
          shows: MeShowsOutput!
          albumsContains(ids: String!): [Boolean!]!
          showsContains(ids: String!): [Boolean!]!
          tracksContains(ids: String!): [Boolean!]!
        }
        extend type AlbumObject {
          tracksFull: AlbumTracksOutput!
        }
        extend type ArtistObject {
          albums: ArtistAlbumsOutput!
          topTracks(market: String!): ArtistTopTracksOutput!
          relatedArtists: ArtistRelatedArtistsOutput!
        }
        extend type CurrentlyPlayingContextObject {
          recentlyPlayed: PlayerRecentlyPlayedOutput!
          devices: DevicesObject!
        }
        extend type ShowObject {
          episodesFull: ShowEpisodesOutput!
        }
        extend type PublicUserObject {
          playlists: UserPlaylistsOutput!
        }
        extend type TrackObject {
          audioFeatures: AudioFeaturesObject!
        }
        `
      ],
      additionalResolvers: processAdditionalResolvers(
        'Spotify', [
        "PrivateUserObject.playlists -> Query.mePlaylists",
        "PrivateUserObject.player -> Query.player",
        "PrivateUserObject.albums -> Query.meAlbums",
        "PrivateUserObject.tracks -> Query.meTracks",
        "PrivateUserObject.topTracks -> Query.meTopTracks",
        "PrivateUserObject.topArtists -> Query.meTopArtists",
        "AlbumObject { id }.tracksFull -> Query.albumTracks(id: id)",
        "ArtistObject { id }.albums -> Query.artistAlbums(id: id)",
        "ArtistObject { id }.topTracks -> Query.artistTopTracks(id: id)",
        "ArtistObject { id }.relatedArtists -> Query.artistRelatedArtists(id: id)",
        "CurrentlyPlayingContextObject.recentlyPlayed -> Query.playerRecentlyPlayed",
        "CurrentlyPlayingContextObject.devices -> Query.playerDevices",
        "PrivateUserObject.albumsContains -> Query.meAlbumsContains",
        "PrivateUserObject.followingArtists -> Query.meFollowingArtists",
        "PrivateUserObject.shows -> Query.meShows",
        "PrivateUserObject.showsContains -> Query.meShowsContains",
        "PrivateUserObject.tracksContains -> Query.meTracksContains",
        "ShowObject { id }.episodesFull -> Query.showEpisodes(id: id)",
        "TrackObject { id }.audioFeatures -> Query.trackAudioFeatures(id: id)",
        "PublicUserObject { id }.playlists -> Query.userPlaylists(user_id: id)"
      ]),
      transforms: [
        {
          filterSchema: {
            filters: [
              'Query.!{mePlaylists, meAlbums, meTracks, meTopArtists}',
              'Query.!albumTracks',
              'Query.!artistAlbums',
              'Query.!{meAlbumsContains, meFollowingArtists, meShows, meShowsContains, meTracksContains}',
              'Query.!{playerCurrentlyPlaying, playerRecentlyPlayed, playerDevices}',
              'Query.!{playlistCoverImages, playlistTracks}',
              'Query.!showEpisodes',
              'Query.!trackAudioFeatures',
              'Query.!userPlaylists'
            ]
          }
        }
      ]
    }

    const yamlContent = yaml.dump(configuration)
    fs.writeFileSync('.meshrc.yaml', yamlContent)
  })
})
