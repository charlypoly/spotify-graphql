module.exports = {
  "$ref": "#/definitions/_schema",
  "definitions": {
    "AlbumObject_album_type": {
      "enum": [
        "album",
        "single",
        "compilation"
      ],
      "title": "AlbumObject_album_type"
    },
    "AlbumObject_available_markets_items": {
      "type": "string",
      "title": "AlbumObject_available_markets_items"
    },
    "ExternalUrlObject": {
      "type": "object",
      "required": [],
      "properties": {
        "spotify": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ExternalUrlObject"
    },
    "AlbumObject_popularity": {
      "type": "number",
      "title": "AlbumObject_popularity"
    },
    "FollowersObject": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "FollowersObject"
    },
    "ArtistObject_followers": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/FollowersObject"
      },
      "title": "ArtistObject_followers"
    },
    "AlbumObject_available_markets": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/AlbumObject_available_markets_items"
      },
      "title": "AlbumObject_available_markets"
    },
    "ImageObject": {
      "type": "object",
      "required": [],
      "properties": {
        "url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "height": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "width": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "ImageObject"
    },
    "AlbumObject_images": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ImageObject"
      },
      "title": "AlbumObject_images"
    },
    "ArtistObject": {
      "type": "object",
      "required": [],
      "properties": {
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "followers": {
          "$ref": "#/definitions/ArtistObject_followers"
        },
        "genres": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "popularity": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ArtistObject"
    },
    "AlbumObject_artists": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/ArtistObject"
      },
      "title": "AlbumObject_artists"
    },
    "CopyrightObject_type": {
      "enum": [
        "C",
        "P"
      ],
      "title": "CopyrightObject_type"
    },
    "CopyrightObject": {
      "type": "object",
      "required": [],
      "properties": {
        "text": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/CopyrightObject_type"
        }
      },
      "title": "CopyrightObject"
    },
    "AlbumObject_copyrights": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/CopyrightObject"
      },
      "title": "AlbumObject_copyrights"
    },
    "ExternalIdObject": {
      "type": "object",
      "required": [],
      "properties": {
        "ean": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "isrc": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "upc": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ExternalIdObject"
    },
    "AlbumObject_release_date_precision": {
      "enum": [
        "year",
        "month",
        "day"
      ],
      "title": "AlbumObject_release_date_precision"
    },
    "AlbumRestrictionObject_reason": {
      "enum": [
        "market",
        "product",
        "explicit"
      ],
      "title": "AlbumRestrictionObject_reason"
    },
    "AlbumRestrictionObject": {
      "type": "object",
      "required": [],
      "properties": {
        "reason": {
          "$ref": "#/definitions/AlbumRestrictionObject_reason"
        }
      },
      "title": "AlbumRestrictionObject"
    },
    "SimplifiedArtistObject": {
      "type": "object",
      "required": [],
      "properties": {
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedArtistObject"
    },
    "SimplifiedAlbumObject_artists": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedArtistObject"
      },
      "title": "SimplifiedAlbumObject_artists"
    },
    "CurrentlyPlayingContextObject_is_playing": {
      "type": "boolean",
      "title": "CurrentlyPlayingContextObject_is_playing"
    },
    "SimplifiedTrackObject": {
      "type": "object",
      "required": [],
      "properties": {
        "artists": {
          "$ref": "#/definitions/SimplifiedAlbumObject_artists"
        },
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "disc_number": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "duration_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "explicit": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "is_local": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "is_playable": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "preview_url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "restrictions": {
          "$ref": "#/definitions/AlbumRestrictionObject"
        },
        "track_number": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedTrackObject"
    },
    "AlbumObject_tracks": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedTrackObject"
      },
      "title": "AlbumObject_tracks"
    },
    "AlbumObject": {
      "type": "object",
      "required": [],
      "properties": {
        "album_type": {
          "$ref": "#/definitions/AlbumObject_album_type"
        },
        "artists": {
          "$ref": "#/definitions/AlbumObject_artists"
        },
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "copyrights": {
          "$ref": "#/definitions/AlbumObject_copyrights"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "external_ids": {
          "$ref": "#/definitions/ExternalIdObject"
        },
        "genres": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "label": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "popularity": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "release_date": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date_precision": {
          "$ref": "#/definitions/AlbumObject_release_date_precision"
        },
        "restrictions": {
          "$ref": "#/definitions/AlbumRestrictionObject"
        },
        "tracks": {
          "$ref": "#/definitions/AlbumObject_tracks"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "AlbumObject"
    },
    "AlbumsOutput_albums": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/AlbumObject"
      },
      "title": "AlbumsOutput_albums"
    },
    "AlbumsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "albums": {
          "$ref": "#/definitions/AlbumsOutput_albums"
        }
      },
      "title": "AlbumsOutput"
    },
    "AlbumTracksOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/AlbumObject_tracks"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "AlbumTracksOutput"
    },
    "SimplifiedAlbumObject": {
      "type": "object",
      "required": [],
      "properties": {
        "album_group": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "album_type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "artists": {
          "$ref": "#/definitions/SimplifiedAlbumObject_artists"
        },
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date_precision": {
          "$ref": "#/definitions/AlbumObject_release_date_precision"
        },
        "restrictions": {
          "$ref": "#/definitions/AlbumRestrictionObject"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedAlbumObject"
    },
    "SearchResultsAlbums_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedAlbumObject"
      },
      "title": "SearchResultsAlbums_items"
    },
    "ArtistAlbumsOutput": {
      "title": "ArtistAlbumsOutput",
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/SearchResultsAlbums_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      }
    },
    "ArtistRelatedArtistsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "artists": {
          "$ref": "#/definitions/AlbumObject_artists"
        }
      },
      "title": "ArtistRelatedArtistsOutput"
    },
    "TrackObject": {
      "type": "object",
      "required": [],
      "properties": {
        "album": {
          "$ref": "#/definitions/SimplifiedAlbumObject"
        },
        "artists": {
          "$ref": "#/definitions/AlbumObject_artists"
        },
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "disc_number": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "duration_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "explicit": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "external_ids": {
          "$ref": "#/definitions/ExternalIdObject"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "is_playable": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "popularity": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "preview_url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "restrictions": {
          "$ref": "#/definitions/AlbumRestrictionObject"
        },
        "track_number": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "TrackObject"
    },
    "SearchResultsTracks_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/TrackObject"
      },
      "title": "SearchResultsTracks_items"
    },
    "ArtistTopTracksOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "tracks": {
          "$ref": "#/definitions/SearchResultsTracks_items"
        }
      },
      "title": "ArtistTopTracksOutput"
    },
    "CategoryObject": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "icons": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "CategoryObject"
    },
    "BrowseCategoriesCategories_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/CategoryObject"
      },
      "title": "BrowseCategoriesCategories_items"
    },
    "BrowseCategoriesCategories": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/BrowseCategoriesCategories_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "BrowseCategoriesCategories"
    },
    "BrowseCategoriesOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "categories": {
          "$ref": "#/definitions/BrowseCategoriesCategories"
        }
      },
      "title": "BrowseCategoriesOutput"
    },
    "PublicUserObject": {
      "type": "object",
      "required": [],
      "properties": {
        "display_name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "followers": {
          "$ref": "#/definitions/ArtistObject_followers"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PublicUserObject"
    },
    "SimplifiedPlaylistObject": {
      "type": "object",
      "required": [],
      "properties": {
        "collaborative": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "owner": {
          "$ref": "#/definitions/PublicUserObject"
        },
        "public": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "snapshot_id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "tracks": {
          "$ref": "#/definitions/FollowersObject"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedPlaylistObject"
    },
    "BrowseFeaturedPlaylistsPlaylists_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedPlaylistObject"
      },
      "title": "BrowseFeaturedPlaylistsPlaylists_items"
    },
    "BrowseFeaturedPlaylistsPlaylists": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/BrowseFeaturedPlaylistsPlaylists_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "BrowseFeaturedPlaylistsPlaylists"
    },
    "BrowseCategoryPlaylistsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "playlists": {
          "$ref": "#/definitions/BrowseFeaturedPlaylistsPlaylists"
        }
      },
      "title": "BrowseCategoryPlaylistsOutput"
    },
    "BrowseGenresSeedOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "genres": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        }
      },
      "title": "BrowseGenresSeedOutput"
    },
    "SearchResultsAlbums": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/SearchResultsAlbums_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "SearchResultsAlbums"
    },
    "BrowseNewReleasesOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "albums": {
          "$ref": "#/definitions/SearchResultsAlbums"
        }
      },
      "title": "BrowseNewReleasesOutput"
    },
    "ResumePointObject": {
      "type": "object",
      "required": [],
      "properties": {
        "fully_played": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "resume_position_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "ResumePointObject"
    },
    "SimplifiedShowObject": {
      "type": "object",
      "required": [],
      "properties": {
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "copyrights": {
          "$ref": "#/definitions/AlbumObject_copyrights"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "is_externally_hosted": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "languages": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "media_type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "publisher": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedShowObject"
    },
    "EpisodeObject": {
      "type": "object",
      "required": [],
      "properties": {
        "audio_preview_url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "duration_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "explicit": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "is_externally_hosted": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "is_playable": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "language": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "languages": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date_precision": {
          "$ref": "#/definitions/AlbumObject_release_date_precision"
        },
        "resume_point": {
          "$ref": "#/definitions/ResumePointObject"
        },
        "show": {
          "$ref": "#/definitions/SimplifiedShowObject"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "EpisodeObject"
    },
    "EpisodesOutput_episodes": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/EpisodeObject"
      },
      "title": "EpisodesOutput_episodes"
    },
    "EpisodesOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "episodes": {
          "$ref": "#/definitions/EpisodesOutput_episodes"
        }
      },
      "title": "EpisodesOutput"
    },
    "query_checkUsersFollowPlaylist_anyOf_0": {
      "type": "object",
      "additionalProperties": true,
      "title": "query_checkUsersFollowPlaylist_anyOf_0"
    },
    "query_checkUsersFollowPlaylist_anyOf_1": {
      "type": "string",
      "title": "query_checkUsersFollowPlaylist_anyOf_1"
    },
    "query_checkUsersFollowPlaylist_anyOf_2": {
      "type": "number",
      "title": "query_checkUsersFollowPlaylist_anyOf_2"
    },
    "query_checkUsersFollowPlaylist_anyOf_3": {
      "type": "boolean",
      "title": "query_checkUsersFollowPlaylist_anyOf_3"
    },
    "Void": {
      "title": "Void",
      "anyOf": [
        {
          "$ref": "#/definitions/query_checkUsersFollowPlaylist_anyOf_0"
        },
        {
          "$ref": "#/definitions/query_checkUsersFollowPlaylist_anyOf_1"
        },
        {
          "$ref": "#/definitions/query_checkUsersFollowPlaylist_anyOf_2"
        },
        {
          "$ref": "#/definitions/query_checkUsersFollowPlaylist_anyOf_3"
        }
      ]
    },
    "CursorObject": {
      "type": "object",
      "required": [],
      "properties": {
        "after": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "before": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "CursorObject"
    },
    "MeFollowingArtistsOutputArtists": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/AlbumObject_artists"
        },
        "cursors": {
          "$ref": "#/definitions/CursorObject"
        }
      },
      "title": "MeFollowingArtistsOutputArtists"
    },
    "MeFollowingArtistsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "artists": {
          "$ref": "#/definitions/MeFollowingArtistsOutputArtists"
        }
      },
      "title": "MeFollowingArtistsOutput"
    },
    "ArrayOfBooleans": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
      },
      "title": "ArrayOfBooleans"
    },
    "SavedAlbumObject": {
      "type": "object",
      "required": [],
      "properties": {
        "added_at": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "album": {
          "$ref": "#/definitions/AlbumObject"
        }
      },
      "title": "SavedAlbumObject"
    },
    "MeAlbumsOutput_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SavedAlbumObject"
      },
      "title": "MeAlbumsOutput_items"
    },
    "MeAlbumsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/MeAlbumsOutput_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "MeAlbumsOutput"
    },
    "SavedShowObject": {
      "type": "object",
      "required": [],
      "properties": {
        "added_at": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "album": {
          "$ref": "#/definitions/SimplifiedShowObject"
        }
      },
      "title": "SavedShowObject"
    },
    "MeShowsOutput_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SavedShowObject"
      },
      "title": "MeShowsOutput_items"
    },
    "MeShowsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/MeShowsOutput_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "MeShowsOutput"
    },
    "SavedTrackObject": {
      "type": "object",
      "required": [],
      "properties": {
        "added_at": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "album": {
          "$ref": "#/definitions/TrackObject"
        }
      },
      "title": "SavedTrackObject"
    },
    "MeTracksOutput_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SavedTrackObject"
      },
      "title": "MeTracksOutput_items"
    },
    "MeTracksOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/MeTracksOutput_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "MeTracksOutput"
    },
    "MeTopArtistsOutput": {
      "title": "MeTopArtistsOutput",
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/AlbumObject_artists"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      }
    },
    "MeTopTracksOutput": {
      "title": "MeTopTracksOutput",
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/SearchResultsTracks_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      }
    },
    "DisallowsObject": {
      "type": "object",
      "required": [],
      "properties": {
        "interrupting_playback": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "pausing": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "resuming": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "seeking": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "skipping_next": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "skipping_prev": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "toggling_repeat_context": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "toggling_repeat_track": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "toggling_shuffle": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "transferring_playback": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        }
      },
      "title": "DisallowsObject"
    },
    "ContextObject_type": {
      "enum": [
        "artist",
        "playlist",
        "album",
        "show"
      ],
      "title": "ContextObject_type"
    },
    "ContextObject": {
      "type": "object",
      "required": [],
      "properties": {
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/ContextObject_type"
        },
        "url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ContextObject"
    },
    "DeviceObject": {
      "type": "object",
      "required": [],
      "properties": {
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "is_active": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "is_private_session": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "is_restricted": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "volume_percent": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "DeviceObject"
    },
    "CurrentlyPlayingContextObject": {
      "type": "object",
      "required": [],
      "properties": {
        "actions": {
          "$ref": "#/definitions/DisallowsObject"
        },
        "context": {
          "$ref": "#/definitions/ContextObject"
        },
        "currently_playing_type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "device": {
          "$ref": "#/definitions/DeviceObject"
        },
        "is_playing": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "item": {
          "$ref": "#/definitions/TrackObject"
        },
        "progress_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "repeat_state": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "shuffle_state": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "timestamp": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "CurrentlyPlayingContextObject"
    },
    "DevicesObject_devices": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/DeviceObject"
      },
      "title": "DevicesObject_devices"
    },
    "DevicesObject": {
      "type": "object",
      "required": [],
      "properties": {
        "devices": {
          "$ref": "#/definitions/DevicesObject_devices"
        }
      },
      "title": "DevicesObject"
    },
    "PlayHistoryObject": {
      "type": "object",
      "required": [],
      "properties": {
        "played_at": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "context": {
          "$ref": "#/definitions/ContextObject"
        },
        "track": {
          "$ref": "#/definitions/SimplifiedTrackObject"
        }
      },
      "title": "PlayHistoryObject"
    },
    "PlayerRecentlyPlayedOutput_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/PlayHistoryObject"
      },
      "title": "PlayerRecentlyPlayedOutput_items"
    },
    "PlayerRecentlyPlayedOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/PlayerRecentlyPlayedOutput_items"
        },
        "cursors": {
          "$ref": "#/definitions/CursorObject"
        }
      },
      "title": "PlayerRecentlyPlayedOutput"
    },
    "PlaylistTrackObject": {
      "type": "object",
      "required": [],
      "properties": {
        "added_at": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "added_by": {
          "$ref": "#/definitions/PublicUserObject"
        },
        "is_local": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "track": {
          "$ref": "#/definitions/TrackObject"
        }
      },
      "title": "PlaylistTrackObject"
    },
    "PlaylistObject_tracks": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/PlaylistTrackObject"
      },
      "title": "PlaylistObject_tracks"
    },
    "PlaylistObject": {
      "type": "object",
      "required": [],
      "properties": {
        "collaborative": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "followers": {
          "$ref": "#/definitions/ArtistObject_followers"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "owner": {
          "$ref": "#/definitions/PublicUserObject"
        },
        "public": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "snapshot_id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "tracks": {
          "$ref": "#/definitions/PlaylistObject_tracks"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PlaylistObject"
    },
    "PlaylistTracksOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/PlaylistObject_tracks"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "PlaylistTracksOutput"
    },
    "UserPlaylistsOutput": {
      "title": "UserPlaylistsOutput",
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/BrowseFeaturedPlaylistsPlaylists_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      }
    },
    "SearchResultsArtists": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/AlbumObject_artists"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "SearchResultsArtists"
    },
    "SearchResultsShows_items": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedShowObject"
      },
      "title": "SearchResultsShows_items"
    },
    "SearchResultsShows": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/SearchResultsShows_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "SearchResultsShows"
    },
    "SearchResultsTracks": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/SearchResultsTracks_items"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "SearchResultsTracks"
    },
    "SimplifiedEpisodeObject": {
      "type": "object",
      "required": [],
      "properties": {
        "audio_preview_url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "duration_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "explicit": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "is_externally_hosted": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "is_playable": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "language": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "languages": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "release_date_precision": {
          "$ref": "#/definitions/AlbumObject_release_date_precision"
        },
        "resume_point": {
          "$ref": "#/definitions/ResumePointObject"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "SimplifiedEpisodeObject"
    },
    "ShowObject_episodes": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SimplifiedEpisodeObject"
      },
      "title": "ShowObject_episodes"
    },
    "SearchResultsEpisodes": {
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/ShowObject_episodes"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "SearchResultsEpisodes"
    },
    "SearchResults": {
      "type": "object",
      "required": [],
      "properties": {
        "artists": {
          "$ref": "#/definitions/SearchResultsArtists"
        },
        "albums": {
          "$ref": "#/definitions/SearchResultsAlbums"
        },
        "shows": {
          "$ref": "#/definitions/SearchResultsShows"
        },
        "tracks": {
          "$ref": "#/definitions/SearchResultsTracks"
        },
        "episodes": {
          "$ref": "#/definitions/SearchResultsEpisodes"
        }
      },
      "title": "SearchResults"
    },
    "ShowObject": {
      "type": "object",
      "required": [],
      "properties": {
        "available_markets": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "copyrights": {
          "$ref": "#/definitions/AlbumObject_copyrights"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "episodes": {
          "$ref": "#/definitions/ShowObject_episodes"
        },
        "explicit": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "is_externally_hosted": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "languages": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "media_type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "publisher": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ShowObject"
    },
    "ShowEpisodesOutput": {
      "title": "ShowEpisodesOutput",
      "type": "object",
      "required": [],
      "properties": {
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "next": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "previous": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "total": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "items": {
          "$ref": "#/definitions/ShowObject_episodes"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      }
    },
    "ShowsOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "shows": {
          "$ref": "#/definitions/SearchResultsShows_items"
        }
      },
      "title": "ShowsOutput"
    },
    "AudioFeaturesObject": {
      "type": "object",
      "required": [],
      "properties": {
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "acousticness": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "analysis_url": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "danceability": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "duration_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "energy": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "instrumentalness": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "key": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "liveness": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "loudness": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "mode": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "speechiness": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "tempo": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "time_signature": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "track_href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "valence": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "AudioFeaturesObject"
    },
    "TracksAudioFeaturesOutput_audio_features": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/AudioFeaturesObject"
      },
      "title": "TracksAudioFeaturesOutput_audio_features"
    },
    "TracksAudioFeaturesOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "audio_features": {
          "$ref": "#/definitions/TracksAudioFeaturesOutput_audio_features"
        }
      },
      "title": "TracksAudioFeaturesOutput"
    },
    "ExplicitContentSettingsObject": {
      "type": "object",
      "required": [],
      "properties": {
        "filter_enabled": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "filter_locker": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        }
      },
      "title": "ExplicitContentSettingsObject"
    },
    "PrivateUserObject": {
      "type": "object",
      "required": [],
      "properties": {
        "country": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "display_name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "email": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "explicit_content": {
          "$ref": "#/definitions/ExplicitContentSettingsObject"
        },
        "external_urls": {
          "$ref": "#/definitions/ExternalUrlObject"
        },
        "followers": {
          "$ref": "#/definitions/ArtistObject_followers"
        },
        "href": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "images": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "product": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PrivateUserObject"
    },
    "Query": {
      "type": "object",
      "title": "Query",
      "properties": {
        "album": {
          "$ref": "#/definitions/AlbumObject"
        },
        "albums": {
          "$ref": "#/definitions/AlbumsOutput"
        },
        "albumTracks": {
          "$ref": "#/definitions/AlbumTracksOutput"
        },
        "artist": {
          "$ref": "#/definitions/ArtistObject"
        },
        "artistAlbums": {
          "$ref": "#/definitions/ArtistAlbumsOutput"
        },
        "artistRelatedArtists": {
          "$ref": "#/definitions/ArtistRelatedArtistsOutput"
        },
        "artists": {
          "$ref": "#/definitions/ArtistRelatedArtistsOutput"
        },
        "artistTopTracks": {
          "$ref": "#/definitions/ArtistTopTracksOutput"
        },
        "browseCategories": {
          "$ref": "#/definitions/BrowseCategoriesOutput"
        },
        "browseCategory": {
          "$ref": "#/definitions/CategoryObject"
        },
        "browseCategoryPlaylists": {
          "$ref": "#/definitions/BrowseCategoryPlaylistsOutput"
        },
        "browseFeaturedPlaylists": {
          "$ref": "#/definitions/BrowseCategoryPlaylistsOutput"
        },
        "browseGenresSeed": {
          "$ref": "#/definitions/BrowseGenresSeedOutput"
        },
        "browseNewReleases": {
          "$ref": "#/definitions/BrowseNewReleasesOutput"
        },
        "episode": {
          "$ref": "#/definitions/EpisodeObject"
        },
        "episodes": {
          "$ref": "#/definitions/EpisodesOutput"
        },
        "checkUsersFollowPlaylist": {
          "$ref": "#/definitions/Void"
        },
        "meFollowingArtists": {
          "$ref": "#/definitions/MeFollowingArtistsOutput"
        },
        "meIsFollowing": {
          "$ref": "#/definitions/ArrayOfBooleans"
        },
        "meAlbums": {
          "$ref": "#/definitions/MeAlbumsOutput"
        },
        "meAlbumsContains": {
          "$ref": "#/definitions/ArrayOfBooleans"
        },
        "meShows": {
          "$ref": "#/definitions/MeShowsOutput"
        },
        "meShowsContains": {
          "$ref": "#/definitions/ArrayOfBooleans"
        },
        "meTracks": {
          "$ref": "#/definitions/MeTracksOutput"
        },
        "meTracksContains": {
          "$ref": "#/definitions/ArrayOfBooleans"
        },
        "meTopArtists": {
          "$ref": "#/definitions/MeTopArtistsOutput"
        },
        "meTopTracks": {
          "$ref": "#/definitions/MeTopTracksOutput"
        },
        "player": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject"
        },
        "playerCurrentlyPlaying": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject"
        },
        "playerDevices": {
          "$ref": "#/definitions/DevicesObject"
        },
        "playerRecentlyPlayed": {
          "$ref": "#/definitions/PlayerRecentlyPlayedOutput"
        },
        "mePlaylists": {
          "$ref": "#/definitions/BrowseFeaturedPlaylistsPlaylists"
        },
        "playlist": {
          "$ref": "#/definitions/PlaylistObject"
        },
        "playlistCoverImages": {
          "$ref": "#/definitions/AlbumObject_images"
        },
        "playlistTracks": {
          "$ref": "#/definitions/PlaylistTracksOutput"
        },
        "userPlaylists": {
          "$ref": "#/definitions/UserPlaylistsOutput"
        },
        "search": {
          "$ref": "#/definitions/SearchResults"
        },
        "show": {
          "$ref": "#/definitions/ShowObject"
        },
        "showEpisodes": {
          "$ref": "#/definitions/ShowEpisodesOutput"
        },
        "shows": {
          "$ref": "#/definitions/ShowsOutput"
        },
        "track": {
          "$ref": "#/definitions/TrackObject"
        },
        "trackAudioFeatures": {
          "$ref": "#/definitions/AudioFeaturesObject"
        },
        "tracks": {
          "$ref": "#/definitions/ArtistTopTracksOutput"
        },
        "tracksAudioFeatures": {
          "$ref": "#/definitions/TracksAudioFeaturesOutput"
        },
        "me": {
          "$ref": "#/definitions/PrivateUserObject"
        },
        "user": {
          "$ref": "#/definitions/PublicUserObject"
        }
      }
    },
    "AlbumInput": {
      "type": "object",
      "required": [],
      "properties": {
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "AlbumInput"
    },
    "AlbumsInput": {
      "type": "object",
      "required": [
        "ids"
      ],
      "properties": {
        "ids": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "AlbumsInput"
    },
    "AlbumTracksInput": {
      "type": "object",
      "required": [],
      "properties": {
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "AlbumTracksInput"
    },
    "ArtistAlbumsInput": {
      "type": "object",
      "required": [
        "market",
        "include_groups"
      ],
      "properties": {
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "include_groups": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "ArtistAlbumsInput"
    },
    "ArtistTopTracksInput": {
      "type": "object",
      "required": [
        "market"
      ],
      "properties": {
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "ArtistTopTracksInput"
    },
    "BrowseCategoriesInput": {
      "type": "object",
      "required": [
        "country"
      ],
      "properties": {
        "country": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "locale": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "BrowseCategoriesInput"
    },
    "BrowseFeaturedPlaylistsInput": {
      "type": "object",
      "required": [
        "country",
        "timestamp"
      ],
      "properties": {
        "country": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "timestamp": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "locale": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "BrowseFeaturedPlaylistsInput"
    },
    "BrowseNewReleasesInput": {
      "type": "object",
      "required": [
        "country"
      ],
      "properties": {
        "country": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "BrowseNewReleasesInput"
    },
    "MeFollowingArtistsInput": {
      "type": "object",
      "required": [],
      "properties": {
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "after": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "MeFollowingArtistsInput"
    },
    "MeAlbumsContainsInput": {
      "type": "object",
      "required": [],
      "properties": {
        "ids": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "MeAlbumsContainsInput"
    },
    "MeTopArtistsInput_time_range": {
      "enum": [
        "long_term",
        "short_term"
      ],
      "title": "MeTopArtistsInput_time_range"
    },
    "MeTopArtistsInput": {
      "type": "object",
      "required": [],
      "properties": {
        "time_range": {
          "$ref": "#/definitions/MeTopArtistsInput_time_range"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "MeTopArtistsInput"
    },
    "PlayerRecentlyPlayedInput": {
      "type": "object",
      "required": [],
      "properties": {
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "after": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "before": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "PlayerRecentlyPlayedInput"
    },
    "UserPlaylistsInput": {
      "type": "object",
      "required": [],
      "properties": {
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "offset": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "UserPlaylistsInput"
    },
    "Search_include_external": {
      "enum": [
        "audio"
      ],
      "title": "Search_include_external"
    },
    "Search": {
      "type": "object",
      "required": [
        "q",
        "type"
      ],
      "properties": {
        "q": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "type": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "market": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "limit": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "include_external": {
          "$ref": "#/definitions/Search_include_external"
        }
      },
      "title": "Search"
    },
    "QueryInput": {
      "type": "object",
      "title": "QueryInput",
      "properties": {
        "album": {
          "$ref": "#/definitions/AlbumInput"
        },
        "albums": {
          "$ref": "#/definitions/AlbumsInput"
        },
        "albumTracks": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "artist": {
          "$ref": "#/definitions/AlbumInput"
        },
        "artistAlbums": {
          "$ref": "#/definitions/ArtistAlbumsInput"
        },
        "artists": {
          "$ref": "#/definitions/AlbumsInput"
        },
        "artistTopTracks": {
          "$ref": "#/definitions/ArtistTopTracksInput"
        },
        "browseCategories": {
          "$ref": "#/definitions/BrowseCategoriesInput"
        },
        "browseCategory": {
          "$ref": "#/definitions/BrowseCategoriesInput"
        },
        "browseCategoryPlaylists": {
          "$ref": "#/definitions/BrowseCategoriesInput"
        },
        "browseFeaturedPlaylists": {
          "$ref": "#/definitions/BrowseFeaturedPlaylistsInput"
        },
        "browseNewReleases": {
          "$ref": "#/definitions/BrowseNewReleasesInput"
        },
        "episode": {
          "$ref": "#/definitions/AlbumInput"
        },
        "episodes": {
          "$ref": "#/definitions/AlbumsInput"
        },
        "meFollowingArtists": {
          "$ref": "#/definitions/MeFollowingArtistsInput"
        },
        "meAlbums": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "meAlbumsContains": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meShows": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "meShowsContains": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meTracks": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "meTracksContains": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meTopArtists": {
          "$ref": "#/definitions/MeTopArtistsInput"
        },
        "meTopTracks": {
          "$ref": "#/definitions/MeTopArtistsInput"
        },
        "player": {
          "$ref": "#/definitions/AlbumInput"
        },
        "playerCurrentlyPlaying": {
          "$ref": "#/definitions/AlbumInput"
        },
        "playerRecentlyPlayed": {
          "$ref": "#/definitions/PlayerRecentlyPlayedInput"
        },
        "mePlaylists": {
          "$ref": "#/definitions/UserPlaylistsInput"
        },
        "playlist": {
          "$ref": "#/definitions/AlbumInput"
        },
        "playlistTracks": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "userPlaylists": {
          "$ref": "#/definitions/UserPlaylistsInput"
        },
        "search": {
          "$ref": "#/definitions/Search"
        },
        "show": {
          "$ref": "#/definitions/AlbumInput"
        },
        "showEpisodes": {
          "$ref": "#/definitions/AlbumTracksInput"
        },
        "shows": {
          "$ref": "#/definitions/AlbumsInput"
        },
        "track": {
          "$ref": "#/definitions/AlbumInput"
        },
        "trackAudioFeatures": {
          "$ref": "#/definitions/AlbumInput"
        },
        "tracks": {
          "$ref": "#/definitions/AlbumsInput"
        },
        "tracksAudioFeatures": {
          "$ref": "#/definitions/AlbumsInput"
        }
      }
    },
    "PlaylistAddItemOutput": {
      "type": "object",
      "required": [],
      "properties": {
        "snapshot_id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PlaylistAddItemOutput"
    },
    "Mutation": {
      "type": "object",
      "title": "Mutation",
      "properties": {
        "followArtists": {
          "$ref": "#/definitions/Void"
        },
        "followPlaylist": {
          "$ref": "#/definitions/Void"
        },
        "followUsers": {
          "$ref": "#/definitions/Void"
        },
        "unfollowArtists": {
          "$ref": "#/definitions/Void"
        },
        "unfollowPlaylist": {
          "$ref": "#/definitions/Void"
        },
        "unfollowUsers": {
          "$ref": "#/definitions/Void"
        },
        "meRemoveAlbums": {
          "$ref": "#/definitions/Void"
        },
        "meRemoveShows": {
          "$ref": "#/definitions/Void"
        },
        "meRemoveTracks": {
          "$ref": "#/definitions/Void"
        },
        "meSaveAlbums": {
          "$ref": "#/definitions/Void"
        },
        "meSaveShows": {
          "$ref": "#/definitions/Void"
        },
        "meSaveTracks": {
          "$ref": "#/definitions/Void"
        },
        "playerPause": {
          "$ref": "#/definitions/Void"
        },
        "playerPauseForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerPlay": {
          "$ref": "#/definitions/Void"
        },
        "playerPlayForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerPrevious": {
          "$ref": "#/definitions/Void"
        },
        "playerPreviousForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerQueue": {
          "$ref": "#/definitions/Void"
        },
        "playerQueueForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerRepeat": {
          "$ref": "#/definitions/Void"
        },
        "playerRepeatForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerSeek": {
          "$ref": "#/definitions/Void"
        },
        "playerSeekForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerShuffle": {
          "$ref": "#/definitions/Void"
        },
        "playerShuffleForDevice": {
          "$ref": "#/definitions/Void"
        },
        "playerTransfer": {
          "$ref": "#/definitions/Void"
        },
        "playerVolume": {
          "$ref": "#/definitions/Void"
        },
        "playerVolumeForDevice": {
          "$ref": "#/definitions/Void"
        },
        "createPlaylist": {
          "$ref": "#/definitions/PlaylistObject"
        },
        "playlistAddItem": {
          "$ref": "#/definitions/PlaylistAddItemOutput"
        },
        "playlistRemoveItems": {
          "$ref": "#/definitions/PlaylistAddItemOutput"
        },
        "playlistReorderOrReplaceItems": {
          "$ref": "#/definitions/PlaylistAddItemOutput"
        },
        "updatePlaylist": {
          "$ref": "#/definitions/PlaylistObject"
        }
      }
    },
    "FollowPlaylistInput": {
      "type": "object",
      "required": [],
      "properties": {
        "public": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        }
      },
      "title": "FollowPlaylistInput"
    },
    "PlayerPlayInput": {
      "type": "object",
      "required": [],
      "properties": {
        "context_uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "uris": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "position_ms": {
          "$ref": "#/definitions/AlbumObject_popularity"
        }
      },
      "title": "PlayerPlayInput"
    },
    "PlayerTransferInput": {
      "type": "object",
      "required": [],
      "properties": {
        "device_ids": {
          "$ref": "#/definitions/AlbumObject_available_markets"
        },
        "play": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        }
      },
      "title": "PlayerTransferInput"
    },
    "PlaylistAddItemInput": {
      "type": "object",
      "required": [],
      "properties": {
        "uris": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "range_start": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "insert_before": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "range_length": {
          "$ref": "#/definitions/AlbumObject_popularity"
        },
        "snapshot_id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PlaylistAddItemInput"
    },
    "PlaylistRemoveItemsInputTracks": {
      "type": "object",
      "properties": {
        "uri": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PlaylistRemoveItemsInputTracks"
    },
    "PlaylistRemoveItemsInput_tracks": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/PlaylistRemoveItemsInputTracks"
      },
      "title": "PlaylistRemoveItemsInput_tracks"
    },
    "PlaylistRemoveItemsInput": {
      "type": "object",
      "required": [],
      "properties": {
        "tracks": {
          "$ref": "#/definitions/PlaylistRemoveItemsInput_tracks"
        },
        "snapshot_id": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "PlaylistRemoveItemsInput"
    },
    "UpdatePlaylistInput": {
      "type": "object",
      "required": [],
      "properties": {
        "name": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        },
        "public": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "collaborative": {
          "$ref": "#/definitions/CurrentlyPlayingContextObject_is_playing"
        },
        "description": {
          "$ref": "#/definitions/AlbumObject_available_markets_items"
        }
      },
      "title": "UpdatePlaylistInput"
    },
    "MutationInput": {
      "type": "object",
      "title": "MutationInput",
      "properties": {
        "followPlaylist": {
          "$ref": "#/definitions/FollowPlaylistInput"
        },
        "meRemoveAlbums": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meRemoveShows": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meRemoveTracks": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meSaveAlbums": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meSaveShows": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "meSaveTracks": {
          "$ref": "#/definitions/MeAlbumsContainsInput"
        },
        "playerPlay": {
          "$ref": "#/definitions/PlayerPlayInput"
        },
        "playerPlayForDevice": {
          "$ref": "#/definitions/PlayerPlayInput"
        },
        "playerTransfer": {
          "$ref": "#/definitions/PlayerTransferInput"
        },
        "createPlaylist": {
          "$ref": "#/definitions/UserPlaylistsInput"
        },
        "playlistAddItem": {
          "$ref": "#/definitions/PlaylistAddItemInput"
        },
        "playlistRemoveItems": {
          "$ref": "#/definitions/PlaylistRemoveItemsInput"
        },
        "playlistReorderOrReplaceItems": {
          "$ref": "#/definitions/PlaylistAddItemInput"
        },
        "updatePlaylist": {
          "$ref": "#/definitions/UpdatePlaylistInput"
        }
      }
    },
    "_schema": {
      "type": "object",
      "title": "_schema",
      "properties": {
        "query": {
          "$ref": "#/definitions/Query"
        },
        "queryInput": {
          "$ref": "#/definitions/QueryInput"
        },
        "mutation": {
          "$ref": "#/definitions/Mutation"
        },
        "mutationInput": {
          "$ref": "#/definitions/MutationInput"
        }
      },
      "required": [
        "query"
      ]
    }
  }
}