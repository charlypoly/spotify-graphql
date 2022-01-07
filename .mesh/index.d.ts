import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLSchema } from 'graphql';
import { CompilerOptions } from 'graphql-jit';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number;
    Void: any;
};
export declare type Query = {
    /** Get an Album: Get Spotify catalog information for a single album. */
    album?: Maybe<AlbumObject>;
    /** Get Multiple Albums: Get Spotify catalog information for multiple albums identified by their Spotify IDs. */
    albums?: Maybe<AlbumsOutput>;
    /** Get an Album: Get Spotify catalog information for a single album. */
    albumTracks?: Maybe<AlbumTracksOutput>;
    /** Get an Artist: Get Spotify catalog information for a single artist identified by their unique Spotify ID. */
    artist?: Maybe<ArtistObject>;
    /** Get an Artist's Albums: Get Spotify catalog information about an artist’s albums. */
    artistAlbums?: Maybe<SearchResultsAlbums>;
    /** Get an Artist's Related Artists: Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history. */
    artistRelatedArtists?: Maybe<ArtistRelatedArtistsOutput>;
    /** Get Multiple Artists: Get Spotify catalog information for several artists based on their Spotify IDs. */
    artists?: Maybe<ArtistRelatedArtistsOutput>;
    /** Get an Artist's Top Tracks: Get Spotify catalog information about an artist’s top tracks by country. */
    artistTopTracks?: Maybe<ArtistTopTracksOutput>;
    /** Get All Categories: Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). */
    browseCategories?: Maybe<BrowseCategoriesOutput>;
    /** Get a Category: Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab). */
    browseCategory?: Maybe<CategoryObject>;
    /** Get a Category's Playlists: Get a list of Spotify playlists tagged with a particular category. */
    browseCategoryPlaylists?: Maybe<BrowseCategoryPlaylistsOutput>;
    /** Get All New Releases: Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab). */
    browseFeaturedPlaylists?: Maybe<BrowseCategoryPlaylistsOutput>;
    /** Get Recommendation Genres: Retrieve a list of available genres seed parameter values for recommendations. */
    browseGenresSeed?: Maybe<BrowseGenresSeedOutput>;
    /** Get All New Releases: Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab). */
    browseNewReleases?: Maybe<BrowseNewReleasesOutput>;
    /** Get an Episode: Get Spotify catalog information for a single episode identified by its unique Spotify ID. */
    episode?: Maybe<EpisodeObject>;
    /** Get Multiple Episodes: Get Spotify catalog information for several episodes based on their Spotify IDs. */
    episodes?: Maybe<EpisodesOutput>;
    /** Check if Users Follow a Playlist: Check to see if one or more Spotify users are following a specified playlist. */
    checkUsersFollowPlaylist?: Maybe<Scalars['Void']>;
    /** Get User's Followed Artists: Get the current user’s followed artists. */
    meFollowingArtists?: Maybe<MeFollowingArtistsOutput>;
    /** undefined /me/following/contains?type={args.type}&ids={args.ids} */
    meIsFollowing?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    /** Get User's Saved Albums: Get a list of the albums saved in the current Spotify user’s ‘Your Music’ library. */
    meAlbums?: Maybe<MeAlbumsOutput>;
    /** Check User's Saved Albums: Check if one or more albums is already saved in the current Spotify user’s ‘Your Music’ library. */
    meAlbumsContains?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    /** Get User's Saved Shows: Get a list of shows saved in the current Spotify user’s library. Optional parameters can be used to limit the number of shows returned. */
    meShows?: Maybe<MeShowsOutput>;
    /** Check User's Saved Shows: Check if one or more shows is already saved in the current Spotify user’s ‘Your Music’ library. */
    meShowsContains?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    /** Get User's Saved Tracks: Get a list of the songs saved in the current Spotify user’s ‘Your Music’ library. */
    meTracks?: Maybe<MeTracksOutput>;
    /** Check User's Saved Tracks: Check if one or more tracks is already saved in the current Spotify user’s ‘Your Music’ library. */
    meTracksContains?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    /** Get Current User top artists */
    meTopArtists?: Maybe<SearchResultsArtists>;
    /** Get Current User top tracks */
    meTopTracks?: Maybe<SearchResultsTracks>;
    /** Get Information About The User's Current Playback: Get information about the user’s current playback state, including track or episode, progress, and active device. */
    player?: Maybe<CurrentlyPlayingContextObject>;
    /** Get the User's Currently Playing Track: Get the object currently being played on the user’s Spotify account. */
    playerCurrentlyPlaying?: Maybe<CurrentlyPlayingContextObject>;
    /** Get a User's Available Devices: Get information about a user’s available devices. */
    playerDevices?: Maybe<DevicesObject>;
    /** Get Current User's Recently Played Tracks: Get tracks from the current user’s recently played tracks. Note: Currently doesn’t support podcast episodes. */
    playerRecentlyPlayed?: Maybe<PlayerRecentlyPlayedOutput>;
    /** Get a List of Current User's Playlists: Get a list of the playlists owned or followed by the current Spotify user. */
    mePlaylists?: Maybe<BrowseFeaturedPlaylistsPlaylists>;
    /** Get a Playlist: Get a playlist owned by a Spotify user. */
    playlist?: Maybe<PlaylistObject>;
    /** Get a Playlist Cover Image: Get the current image associated with a specific playlist. */
    playlistCoverImages?: Maybe<Array<Maybe<ImageObject>>>;
    /** Get a Playlist: Get a playlist owned by a Spotify user. */
    playlistTracks?: Maybe<PlaylistTracksOutput>;
    /** Get a List of a User's Playlists: Get a list of the playlists owned or followed by a Spotify user. */
    userPlaylists?: Maybe<BrowseFeaturedPlaylistsPlaylists>;
    /** Search for an Item: Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string. */
    search?: Maybe<SearchResults>;
    /** Get a Show: Get Spotify catalog information for a single show identified by its unique Spotify ID. */
    show?: Maybe<ShowObject>;
    /** Get a Show's Episodes: Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned. */
    showEpisodes?: Maybe<SearchResultsEpisodes>;
    /** Get Multiple Shows: Get Spotify catalog information for several shows based on their Spotify IDs. */
    shows?: Maybe<ShowsOutput>;
    /** Get a Track: Get Spotify catalog information for a single track identified by its unique Spotify ID. */
    track?: Maybe<TrackObject>;
    /** Get Audio Features for a Track: Get audio feature information for a single track identified by its unique Spotify ID. */
    trackAudioFeatures?: Maybe<AudioFeaturesObject>;
    /** Get Several Tracks: Get Spotify catalog information for multiple tracks based on their Spotify IDs. */
    tracks?: Maybe<ArtistTopTracksOutput>;
    /** Get Audio Features for Several Tracks: Get audio features for multiple tracks based on their Spotify IDs. */
    tracksAudioFeatures?: Maybe<TracksAudioFeaturesOutput>;
    /** Get Current User's Profile: Get detailed profile information about the current user (including the current user’s username). */
    me?: Maybe<PrivateUserObject>;
    /** Get a User's Profile: Get public profile information about a Spotify user. */
    user?: Maybe<PublicUserObject>;
};
export declare type QueryalbumArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryalbumsArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QueryalbumTracksArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryartistArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryartistAlbumsArgs = {
    input?: InputMaybe<ArtistAlbumsInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryartistRelatedArtistsArgs = {
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryartistsArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QueryartistTopTracksArgs = {
    input?: InputMaybe<ArtistTopTracksInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QuerybrowseCategoriesArgs = {
    input?: InputMaybe<BrowseCategoriesInput_Input>;
};
export declare type QuerybrowseCategoryArgs = {
    input?: InputMaybe<BrowseCategoriesInput_Input>;
    category_id?: InputMaybe<Scalars['String']>;
};
export declare type QuerybrowseCategoryPlaylistsArgs = {
    input?: InputMaybe<BrowseCategoriesInput_Input>;
    category_id?: InputMaybe<Scalars['String']>;
};
export declare type QuerybrowseFeaturedPlaylistsArgs = {
    input?: InputMaybe<BrowseFeaturedPlaylistsInput_Input>;
};
export declare type QuerybrowseNewReleasesArgs = {
    input?: InputMaybe<BrowseNewReleasesInput_Input>;
};
export declare type QueryepisodeArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryepisodesArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QuerycheckUsersFollowPlaylistArgs = {
    playlist_id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Scalars['String']>;
};
export declare type QuerymeFollowingArtistsArgs = {
    input?: InputMaybe<MeFollowingArtistsInput_Input>;
};
export declare type QuerymeIsFollowingArgs = {
    type?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Scalars['String']>;
};
export declare type QuerymeAlbumsArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
};
export declare type QuerymeAlbumsContainsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type QuerymeShowsArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
};
export declare type QuerymeShowsContainsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type QuerymeTracksArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
};
export declare type QuerymeTracksContainsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type QuerymeTopArtistsArgs = {
    input?: InputMaybe<MeTopArtistsInput_Input>;
};
export declare type QuerymeTopTracksArgs = {
    input?: InputMaybe<MeTopArtistsInput_Input>;
};
export declare type QueryplayerArgs = {
    input?: InputMaybe<AlbumInput_Input>;
};
export declare type QueryplayerCurrentlyPlayingArgs = {
    input?: InputMaybe<AlbumInput_Input>;
};
export declare type QueryplayerRecentlyPlayedArgs = {
    input?: InputMaybe<PlayerRecentlyPlayedInput_Input>;
};
export declare type QuerymePlaylistsArgs = {
    input?: InputMaybe<UserPlaylistsInput_Input>;
};
export declare type QueryplaylistArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryplaylistCoverImagesArgs = {
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryplaylistTracksArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryuserPlaylistsArgs = {
    input?: InputMaybe<UserPlaylistsInput_Input>;
    user_id?: InputMaybe<Scalars['String']>;
};
export declare type QuerysearchArgs = {
    input?: InputMaybe<Search_Input>;
};
export declare type QueryshowArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryshowEpisodesArgs = {
    input?: InputMaybe<AlbumTracksInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QueryshowsArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QuerytrackArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QuerytrackAudioFeaturesArgs = {
    input?: InputMaybe<AlbumInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type QuerytracksArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QuerytracksAudioFeaturesArgs = {
    input?: InputMaybe<AlbumsInput_Input>;
};
export declare type QueryuserArgs = {
    id?: InputMaybe<Scalars['String']>;
};
export declare type AlbumObject = {
    album_type?: Maybe<AlbumObject_album_type>;
    artists?: Maybe<Array<Maybe<ArtistObject>>>;
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    copyrights?: Maybe<Array<Maybe<CopyrightObject>>>;
    external_urls?: Maybe<ExternalUrlObject>;
    external_ids?: Maybe<ExternalIdObject>;
    genres?: Maybe<Array<Maybe<Scalars['String']>>>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    label?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    popularity?: Maybe<Scalars['Float']>;
    release_date?: Maybe<Scalars['String']>;
    release_date_precision?: Maybe<AlbumObject_release_date_precision>;
    restrictions?: Maybe<AlbumRestrictionObject>;
    tracks?: Maybe<Array<Maybe<SimplifiedTrackObject>>>;
    uri?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};
export declare type AlbumObject_album_type = 'album' | 'single' | 'compilation';
export declare type ArtistObject = {
    external_urls?: Maybe<ExternalUrlObject>;
    followers?: Maybe<Array<Maybe<FollowersObject>>>;
    genres?: Maybe<Array<Maybe<Scalars['String']>>>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
    popularity?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
};
export declare type ExternalUrlObject = {
    spotify?: Maybe<Scalars['String']>;
};
export declare type FollowersObject = {
    href?: Maybe<Scalars['String']>;
    total?: Maybe<Scalars['Float']>;
};
export declare type ImageObject = {
    url?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};
export declare type CopyrightObject = {
    text?: Maybe<Scalars['String']>;
    type?: Maybe<CopyrightObject_type>;
};
export declare type CopyrightObject_type = 'C' | 'P';
export declare type ExternalIdObject = {
    ean?: Maybe<Scalars['String']>;
    isrc?: Maybe<Scalars['String']>;
    upc?: Maybe<Scalars['String']>;
};
export declare type AlbumObject_release_date_precision = 'year' | 'month' | 'day';
export declare type AlbumRestrictionObject = {
    reason?: Maybe<AlbumRestrictionObject_reason>;
};
export declare type AlbumRestrictionObject_reason = 'market' | 'product' | 'explicit';
export declare type SimplifiedTrackObject = {
    artists?: Maybe<Array<Maybe<SimplifiedArtistObject>>>;
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    disc_number?: Maybe<Scalars['Float']>;
    duration_ms?: Maybe<Scalars['Float']>;
    explicit?: Maybe<Scalars['Boolean']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    is_local?: Maybe<Scalars['Boolean']>;
    is_playable?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    preview_url?: Maybe<Scalars['String']>;
    restrictions?: Maybe<AlbumRestrictionObject>;
    track_number?: Maybe<Scalars['Float']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type SimplifiedArtistObject = {
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type AlbumInput_Input = {
    market?: InputMaybe<Scalars['String']>;
};
export declare type AlbumsOutput = {
    albums?: Maybe<Array<Maybe<AlbumObject>>>;
};
export declare type AlbumsInput_Input = {
    ids: Scalars['String'];
    market?: InputMaybe<Scalars['String']>;
};
export declare type AlbumTracksOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SimplifiedTrackObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type AlbumTracksInput_Input = {
    market?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type SearchResultsAlbums = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SimplifiedAlbumObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SimplifiedAlbumObject = {
    album_group?: Maybe<Scalars['String']>;
    album_type?: Maybe<Scalars['String']>;
    artists?: Maybe<Array<Maybe<SimplifiedArtistObject>>>;
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    name?: Maybe<Scalars['String']>;
    release_date?: Maybe<Scalars['String']>;
    release_date_precision?: Maybe<AlbumObject_release_date_precision>;
    restrictions?: Maybe<AlbumRestrictionObject>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type ArtistAlbumsInput_Input = {
    market: Scalars['String'];
    include_groups: Scalars['String'];
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type ArtistRelatedArtistsOutput = {
    artists?: Maybe<Array<Maybe<ArtistObject>>>;
};
export declare type ArtistTopTracksOutput = {
    tracks?: Maybe<Array<Maybe<TrackObject>>>;
};
export declare type TrackObject = {
    album?: Maybe<SimplifiedAlbumObject>;
    artists?: Maybe<Array<Maybe<ArtistObject>>>;
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    disc_number?: Maybe<Scalars['Float']>;
    duration_ms?: Maybe<Scalars['Float']>;
    explicit?: Maybe<Scalars['Boolean']>;
    external_ids?: Maybe<ExternalIdObject>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    is_playable?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    popularity?: Maybe<Scalars['Float']>;
    preview_url?: Maybe<Scalars['String']>;
    restrictions?: Maybe<AlbumRestrictionObject>;
    track_number?: Maybe<Scalars['Float']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type ArtistTopTracksInput_Input = {
    market: Scalars['String'];
};
export declare type BrowseCategoriesOutput = {
    categories?: Maybe<BrowseCategoriesCategories>;
};
export declare type BrowseCategoriesCategories = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<CategoryObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type CategoryObject = {
    href?: Maybe<Scalars['String']>;
    icons?: Maybe<Array<Maybe<ImageObject>>>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type BrowseCategoriesInput_Input = {
    country: Scalars['String'];
    locale?: InputMaybe<Scalars['String']>;
};
export declare type BrowseCategoryPlaylistsOutput = {
    playlists?: Maybe<BrowseFeaturedPlaylistsPlaylists>;
};
export declare type BrowseFeaturedPlaylistsPlaylists = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SimplifiedPlaylistObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SimplifiedPlaylistObject = {
    collaborative?: Maybe<Scalars['Boolean']>;
    description?: Maybe<Scalars['String']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<PublicUserObject>;
    public?: Maybe<Scalars['Boolean']>;
    snapshot_id?: Maybe<Scalars['String']>;
    tracks?: Maybe<FollowersObject>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type PublicUserObject = {
    display_name?: Maybe<Scalars['String']>;
    external_urls?: Maybe<ExternalUrlObject>;
    followers?: Maybe<Array<Maybe<FollowersObject>>>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type BrowseFeaturedPlaylistsInput_Input = {
    country: Scalars['String'];
    timestamp: Scalars['String'];
    locale?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type BrowseGenresSeedOutput = {
    genres?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type BrowseNewReleasesOutput = {
    albums?: Maybe<SearchResultsAlbums>;
};
export declare type BrowseNewReleasesInput_Input = {
    country: Scalars['String'];
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type EpisodeObject = {
    audio_preview_url?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    duration_ms?: Maybe<Scalars['Float']>;
    explicit?: Maybe<Scalars['Boolean']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    is_externally_hosted?: Maybe<Scalars['Boolean']>;
    is_playable?: Maybe<Scalars['Boolean']>;
    language?: Maybe<Scalars['String']>;
    languages?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    release_date?: Maybe<Scalars['String']>;
    release_date_precision?: Maybe<AlbumObject_release_date_precision>;
    resume_point?: Maybe<ResumePointObject>;
    show?: Maybe<SimplifiedShowObject>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type ResumePointObject = {
    fully_played?: Maybe<Scalars['Boolean']>;
    resume_position_ms?: Maybe<Scalars['Float']>;
};
export declare type SimplifiedShowObject = {
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    copyrights?: Maybe<Array<Maybe<CopyrightObject>>>;
    description?: Maybe<Scalars['String']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    is_externally_hosted?: Maybe<Scalars['Boolean']>;
    languages?: Maybe<Array<Maybe<Scalars['String']>>>;
    media_type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    publisher?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type EpisodesOutput = {
    episodes?: Maybe<Array<Maybe<EpisodeObject>>>;
};
export declare type MeFollowingArtistsOutput = {
    artists?: Maybe<MeFollowingArtistsOutputArtists>;
};
export declare type MeFollowingArtistsOutputArtists = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<ArtistObject>>>;
    cursors?: Maybe<CursorObject>;
};
export declare type CursorObject = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
};
export declare type MeFollowingArtistsInput_Input = {
    limit?: InputMaybe<Scalars['Float']>;
    after?: InputMaybe<Scalars['String']>;
};
export declare type MeAlbumsOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SavedAlbumObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SavedAlbumObject = {
    added_at?: Maybe<Scalars['String']>;
    album?: Maybe<AlbumObject>;
};
export declare type MeAlbumsContainsInput_Input = {
    ids?: InputMaybe<Scalars['String']>;
};
export declare type MeShowsOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SavedShowObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SavedShowObject = {
    added_at?: Maybe<Scalars['String']>;
    album?: Maybe<SimplifiedShowObject>;
};
export declare type MeTracksOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SavedTrackObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SavedTrackObject = {
    added_at?: Maybe<Scalars['String']>;
    album?: Maybe<TrackObject>;
};
export declare type SearchResultsArtists = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<ArtistObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type MeTopArtistsInput_Input = {
    time_range?: InputMaybe<MeTopArtistsInput_time_range>;
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type MeTopArtistsInput_time_range = 'long_term' | 'short_term';
export declare type SearchResultsTracks = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<TrackObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type CurrentlyPlayingContextObject = {
    actions?: Maybe<DisallowsObject>;
    context?: Maybe<ContextObject>;
    currently_playing_type?: Maybe<Scalars['String']>;
    device?: Maybe<DeviceObject>;
    is_playing?: Maybe<Scalars['Boolean']>;
    item?: Maybe<TrackObject>;
    progress_ms?: Maybe<Scalars['Float']>;
    repeat_state?: Maybe<Scalars['String']>;
    shuffle_state?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Float']>;
};
export declare type DisallowsObject = {
    interrupting_playback?: Maybe<Scalars['Boolean']>;
    pausing?: Maybe<Scalars['Boolean']>;
    resuming?: Maybe<Scalars['Boolean']>;
    seeking?: Maybe<Scalars['Boolean']>;
    skipping_next?: Maybe<Scalars['Boolean']>;
    skipping_prev?: Maybe<Scalars['Boolean']>;
    toggling_repeat_context?: Maybe<Scalars['Boolean']>;
    toggling_repeat_track?: Maybe<Scalars['Boolean']>;
    toggling_shuffle?: Maybe<Scalars['Boolean']>;
    transferring_playback?: Maybe<Scalars['Boolean']>;
};
export declare type ContextObject = {
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    type?: Maybe<ContextObject_type>;
    url?: Maybe<Scalars['String']>;
};
export declare type ContextObject_type = 'artist' | 'playlist' | 'album' | 'show';
export declare type DeviceObject = {
    id?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    is_private_session?: Maybe<Scalars['Boolean']>;
    is_restricted?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    volume_percent?: Maybe<Scalars['Float']>;
};
export declare type DevicesObject = {
    devices?: Maybe<Array<Maybe<DeviceObject>>>;
};
export declare type PlayerRecentlyPlayedOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<PlayHistoryObject>>>;
    cursors?: Maybe<CursorObject>;
};
export declare type PlayHistoryObject = {
    played_at?: Maybe<Scalars['String']>;
    context?: Maybe<ContextObject>;
    track?: Maybe<SimplifiedTrackObject>;
};
export declare type PlayerRecentlyPlayedInput_Input = {
    limit?: InputMaybe<Scalars['Float']>;
    after?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['Float']>;
};
export declare type UserPlaylistsInput_Input = {
    limit?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Float']>;
};
export declare type PlaylistObject = {
    collaborative?: Maybe<Scalars['Boolean']>;
    description?: Maybe<Scalars['String']>;
    external_urls?: Maybe<ExternalUrlObject>;
    followers?: Maybe<Array<Maybe<FollowersObject>>>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<PublicUserObject>;
    public?: Maybe<Scalars['Boolean']>;
    snapshot_id?: Maybe<Scalars['String']>;
    tracks?: Maybe<Array<Maybe<PlaylistTrackObject>>>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type PlaylistTrackObject = {
    added_at?: Maybe<Scalars['String']>;
    added_by?: Maybe<PublicUserObject>;
    is_local?: Maybe<Scalars['Boolean']>;
    track?: Maybe<TrackObject>;
};
export declare type PlaylistTracksOutput = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<PlaylistTrackObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SearchResults = {
    artists?: Maybe<SearchResultsArtists>;
    albums?: Maybe<SearchResultsAlbums>;
    shows?: Maybe<SearchResultsShows>;
    tracks?: Maybe<SearchResultsTracks>;
    episodes?: Maybe<SearchResultsEpisodes>;
};
export declare type SearchResultsShows = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SimplifiedShowObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SearchResultsEpisodes = {
    href?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    previous?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    total?: Maybe<Scalars['Float']>;
    items?: Maybe<Array<Maybe<SimplifiedEpisodeObject>>>;
    offset?: Maybe<Scalars['Float']>;
};
export declare type SimplifiedEpisodeObject = {
    audio_preview_url?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    duration_ms?: Maybe<Scalars['Float']>;
    explicit?: Maybe<Scalars['Boolean']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    is_externally_hosted?: Maybe<Scalars['Boolean']>;
    is_playable?: Maybe<Scalars['Boolean']>;
    language?: Maybe<Scalars['String']>;
    languages?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    release_date?: Maybe<Scalars['String']>;
    release_date_precision?: Maybe<AlbumObject_release_date_precision>;
    resume_point?: Maybe<ResumePointObject>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type Search_Input = {
    q: Scalars['String'];
    type: Scalars['String'];
    market?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Float']>;
    include_external?: InputMaybe<Search_include_external>;
};
export declare type Search_include_external = 'audio';
export declare type ShowObject = {
    available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
    copyrights?: Maybe<Array<Maybe<CopyrightObject>>>;
    description?: Maybe<Scalars['String']>;
    episodes?: Maybe<Array<Maybe<SimplifiedEpisodeObject>>>;
    explicit?: Maybe<Scalars['Boolean']>;
    external_urls?: Maybe<ExternalUrlObject>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    is_externally_hosted?: Maybe<Scalars['Boolean']>;
    languages?: Maybe<Array<Maybe<Scalars['String']>>>;
    media_type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    publisher?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type ShowsOutput = {
    shows?: Maybe<Array<Maybe<SimplifiedShowObject>>>;
};
export declare type AudioFeaturesObject = {
    id?: Maybe<Scalars['String']>;
    acousticness?: Maybe<Scalars['Float']>;
    analysis_url?: Maybe<Scalars['String']>;
    danceability?: Maybe<Scalars['Float']>;
    duration_ms?: Maybe<Scalars['Float']>;
    energy?: Maybe<Scalars['Float']>;
    instrumentalness?: Maybe<Scalars['Float']>;
    key?: Maybe<Scalars['Float']>;
    liveness?: Maybe<Scalars['Float']>;
    loudness?: Maybe<Scalars['Float']>;
    mode?: Maybe<Scalars['Float']>;
    speechiness?: Maybe<Scalars['Float']>;
    tempo?: Maybe<Scalars['Float']>;
    time_signature?: Maybe<Scalars['Float']>;
    track_href?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
    valence?: Maybe<Scalars['Float']>;
};
export declare type TracksAudioFeaturesOutput = {
    audio_features?: Maybe<Array<Maybe<AudioFeaturesObject>>>;
};
export declare type PrivateUserObject = {
    country?: Maybe<Scalars['String']>;
    display_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    explicit_content?: Maybe<ExplicitContentSettingsObject>;
    external_urls?: Maybe<ExternalUrlObject>;
    followers?: Maybe<Array<Maybe<FollowersObject>>>;
    href?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    images?: Maybe<Array<Maybe<ImageObject>>>;
    product?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    uri?: Maybe<Scalars['String']>;
};
export declare type ExplicitContentSettingsObject = {
    filter_enabled?: Maybe<Scalars['Boolean']>;
    filter_locker?: Maybe<Scalars['Boolean']>;
};
export declare type Mutation = {
    /** PUT /me/following?type=artist&ids={args.ids} */
    followArtists?: Maybe<Scalars['Void']>;
    /** Follow a Playlist: Add the current user as a follower of a playlist. */
    followPlaylist?: Maybe<Scalars['Void']>;
    /** PUT /me/following?type=user&ids={args.ids} */
    followUsers?: Maybe<Scalars['Void']>;
    /** DELETE /me/following?type=artist&ids={args.ids} */
    unfollowArtists?: Maybe<Scalars['Void']>;
    /** Unfollow Playlist: Remove the current user as a follower of a playlist. */
    unfollowPlaylist?: Maybe<Scalars['Void']>;
    /** DELETE /me/following?type=user&ids={args.ids} */
    unfollowUsers?: Maybe<Scalars['Void']>;
    /** Remove Albums for Current User: Remove one or more albums from the current user’s ‘Your Music’ library. */
    meRemoveAlbums?: Maybe<Scalars['Void']>;
    /** Remove Shows for Current User: Remove one or more Shows from the current user’s ‘Your Music’ library. */
    meRemoveShows?: Maybe<Scalars['Void']>;
    /** Remove Tracks for Current User: Remove one or more Tracks from the current user’s ‘Your Music’ library. */
    meRemoveTracks?: Maybe<Scalars['Void']>;
    /** Save Albums for Current User: Save one or more albums to the current user’s ‘Your Music’ library. */
    meSaveAlbums?: Maybe<Scalars['Void']>;
    /** Save Shows for Current User: Save one or more shows to the current user’s ‘Your Music’ library. */
    meSaveShows?: Maybe<Scalars['Void']>;
    /** Save Tracks for Current User: Save one or more tracks to the current user’s ‘Your Music’ library. */
    meSaveTracks?: Maybe<Scalars['Void']>;
    /** Pause a User's Playback: Pause playback on the user’s account. */
    playerPause?: Maybe<Scalars['Void']>;
    /** Pause a User's Playback: Pause playback on the user’s account. */
    playerPauseForDevice?: Maybe<Scalars['Void']>;
    /** Start/Resume a User's Playback: Start a new context or resume current playback on the user’s active device. */
    playerPlay?: Maybe<Scalars['Void']>;
    /** Start/Resume a User's Playback: Start a new context or resume current playback on the user’s active device. */
    playerPlayForDevice?: Maybe<Scalars['Void']>;
    /** Skip User’s Playback To Previous Track: Skips to previous track in the user’s queue. */
    playerPrevious?: Maybe<Scalars['Void']>;
    /** Skip User’s Playback To Previous Track: Skips to previous track in the user’s queue. */
    playerPreviousForDevice?: Maybe<Scalars['Void']>;
    /** Add an item to queue: Add an item to the end of the user’s current playback queue. */
    playerQueue?: Maybe<Scalars['Void']>;
    /** Add an item to queue: Add an item to the end of the user’s current playback queue. */
    playerQueueForDevice?: Maybe<Scalars['Void']>;
    /** Set Repeat Mode On User’s Playback: Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off. */
    playerRepeat?: Maybe<Scalars['Void']>;
    /** Set Repeat Mode On User’s Playback: Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off. */
    playerRepeatForDevice?: Maybe<Scalars['Void']>;
    /** Seek To Position In Currently Playing Track: Seeks to the given position in the user’s currently playing track. */
    playerSeek?: Maybe<Scalars['Void']>;
    /** Seek To Position In Currently Playing Track: Seeks to the given position in the user’s currently playing track. */
    playerSeekForDevice?: Maybe<Scalars['Void']>;
    /** Toggle Shuffle For User’s Playback: Toggle shuffle on or off for user’s playback. */
    playerShuffle?: Maybe<Scalars['Void']>;
    /** Toggle Shuffle For User’s Playback: Toggle shuffle on or off for user’s playback. */
    playerShuffleForDevice?: Maybe<Scalars['Void']>;
    /** Get a User's Available Devices: Get information about a user’s available devices. */
    playerTransfer?: Maybe<Scalars['Void']>;
    /** Set Volume For User's Playback: Set the volume for the user’s current playback device. */
    playerVolume?: Maybe<Scalars['Void']>;
    /** Set Volume For User's Playback: Set the volume for the user’s current playback device. */
    playerVolumeForDevice?: Maybe<Scalars['Void']>;
    /** Create a Playlist: Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.) */
    createPlaylist?: Maybe<PlaylistObject>;
    /** Add Items to a Playlist: Add one or more items to a user’s playlist. */
    playlistAddItem?: Maybe<PlaylistAddItemOutput>;
    /** Remove Items from a Playlist: Remove one or more items from a user’s playlist. */
    playlistRemoveItems?: Maybe<PlaylistAddItemOutput>;
    /** Reorder or Replace a Playlist's Items */
    playlistReorderOrReplaceItems?: Maybe<PlaylistAddItemOutput>;
    /** Change a Playlist's Details: Change a playlist’s name and public/private state. (The user must, of course, own the playlist.) */
    updatePlaylist?: Maybe<PlaylistObject>;
};
export declare type MutationfollowArtistsArgs = {
    ids?: InputMaybe<Scalars['String']>;
};
export declare type MutationfollowPlaylistArgs = {
    input?: InputMaybe<FollowPlaylistInput_Input>;
    playlist_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationfollowUsersArgs = {
    ids?: InputMaybe<Scalars['String']>;
};
export declare type MutationunfollowArtistsArgs = {
    ids?: InputMaybe<Scalars['String']>;
};
export declare type MutationunfollowPlaylistArgs = {
    playlist_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationunfollowUsersArgs = {
    ids?: InputMaybe<Scalars['String']>;
};
export declare type MutationmeRemoveAlbumsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationmeRemoveShowsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationmeRemoveTracksArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationmeSaveAlbumsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationmeSaveShowsArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationmeSaveTracksArgs = {
    input?: InputMaybe<MeAlbumsContainsInput_Input>;
};
export declare type MutationplayerPauseArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerPauseForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerPlayArgs = {
    input?: InputMaybe<PlayerPlayInput_Input>;
};
export declare type MutationplayerPlayForDeviceArgs = {
    input?: InputMaybe<PlayerPlayInput_Input>;
    device_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerPreviousForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerQueueArgs = {
    uri?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerQueueForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
    uri?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerRepeatArgs = {
    state?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerRepeatForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
    state?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerSeekArgs = {
    position_ms?: InputMaybe<Scalars['Int']>;
};
export declare type MutationplayerSeekForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
    position_ms?: InputMaybe<Scalars['Int']>;
};
export declare type MutationplayerShuffleArgs = {
    state?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationplayerShuffleForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
    state?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationplayerTransferArgs = {
    input?: InputMaybe<PlayerTransferInput_Input>;
};
export declare type MutationplayerVolumeArgs = {
    state?: InputMaybe<Scalars['ID']>;
};
export declare type MutationplayerVolumeForDeviceArgs = {
    device_id?: InputMaybe<Scalars['ID']>;
    state?: InputMaybe<Scalars['ID']>;
};
export declare type MutationcreatePlaylistArgs = {
    input?: InputMaybe<UserPlaylistsInput_Input>;
    user_id?: InputMaybe<Scalars['String']>;
};
export declare type MutationplaylistAddItemArgs = {
    input?: InputMaybe<PlaylistAddItemInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type MutationplaylistRemoveItemsArgs = {
    input?: InputMaybe<PlaylistRemoveItemsInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type MutationplaylistReorderOrReplaceItemsArgs = {
    input?: InputMaybe<PlaylistAddItemInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type MutationupdatePlaylistArgs = {
    input?: InputMaybe<UpdatePlaylistInput_Input>;
    id?: InputMaybe<Scalars['String']>;
};
export declare type FollowPlaylistInput_Input = {
    public?: InputMaybe<Scalars['Boolean']>;
};
export declare type PlayerPlayInput_Input = {
    context_uri?: InputMaybe<Scalars['String']>;
    uris?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    position_ms?: InputMaybe<Scalars['Float']>;
};
export declare type PlayerTransferInput_Input = {
    device_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    play?: InputMaybe<Scalars['Boolean']>;
};
export declare type PlaylistAddItemOutput = {
    snapshot_id?: Maybe<Scalars['String']>;
};
export declare type PlaylistAddItemInput_Input = {
    uris?: InputMaybe<Scalars['String']>;
    range_start?: InputMaybe<Scalars['Float']>;
    insert_before?: InputMaybe<Scalars['Float']>;
    range_length?: InputMaybe<Scalars['Float']>;
    snapshot_id?: InputMaybe<Scalars['String']>;
};
export declare type PlaylistRemoveItemsInput_Input = {
    tracks?: InputMaybe<Array<InputMaybe<PlaylistRemoveItemsInputTracks_Input>>>;
    snapshot_id?: InputMaybe<Scalars['String']>;
};
export declare type PlaylistRemoveItemsInputTracks_Input = {
    uri?: InputMaybe<Scalars['String']>;
};
export declare type UpdatePlaylistInput_Input = {
    name?: InputMaybe<Scalars['String']>;
    public?: InputMaybe<Scalars['Boolean']>;
    collaborative?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
};
export declare type WithIndex<TObject> = TObject & Record<string, any>;
export declare type ResolversObject<TObject> = WithIndex<TObject>;
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    AlbumObject: ResolverTypeWrapper<AlbumObject>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    AlbumObject_album_type: AlbumObject_album_type;
    ArtistObject: ResolverTypeWrapper<ArtistObject>;
    ExternalUrlObject: ResolverTypeWrapper<ExternalUrlObject>;
    FollowersObject: ResolverTypeWrapper<FollowersObject>;
    ImageObject: ResolverTypeWrapper<ImageObject>;
    CopyrightObject: ResolverTypeWrapper<CopyrightObject>;
    CopyrightObject_type: CopyrightObject_type;
    ExternalIdObject: ResolverTypeWrapper<ExternalIdObject>;
    AlbumObject_release_date_precision: AlbumObject_release_date_precision;
    AlbumRestrictionObject: ResolverTypeWrapper<AlbumRestrictionObject>;
    AlbumRestrictionObject_reason: AlbumRestrictionObject_reason;
    SimplifiedTrackObject: ResolverTypeWrapper<SimplifiedTrackObject>;
    SimplifiedArtistObject: ResolverTypeWrapper<SimplifiedArtistObject>;
    AlbumInput_Input: AlbumInput_Input;
    AlbumsOutput: ResolverTypeWrapper<AlbumsOutput>;
    AlbumsInput_Input: AlbumsInput_Input;
    AlbumTracksOutput: ResolverTypeWrapper<AlbumTracksOutput>;
    AlbumTracksInput_Input: AlbumTracksInput_Input;
    SearchResultsAlbums: ResolverTypeWrapper<SearchResultsAlbums>;
    SimplifiedAlbumObject: ResolverTypeWrapper<SimplifiedAlbumObject>;
    ArtistAlbumsInput_Input: ArtistAlbumsInput_Input;
    ArtistRelatedArtistsOutput: ResolverTypeWrapper<ArtistRelatedArtistsOutput>;
    ArtistTopTracksOutput: ResolverTypeWrapper<ArtistTopTracksOutput>;
    TrackObject: ResolverTypeWrapper<TrackObject>;
    ArtistTopTracksInput_Input: ArtistTopTracksInput_Input;
    BrowseCategoriesOutput: ResolverTypeWrapper<BrowseCategoriesOutput>;
    BrowseCategoriesCategories: ResolverTypeWrapper<BrowseCategoriesCategories>;
    CategoryObject: ResolverTypeWrapper<CategoryObject>;
    BrowseCategoriesInput_Input: BrowseCategoriesInput_Input;
    BrowseCategoryPlaylistsOutput: ResolverTypeWrapper<BrowseCategoryPlaylistsOutput>;
    BrowseFeaturedPlaylistsPlaylists: ResolverTypeWrapper<BrowseFeaturedPlaylistsPlaylists>;
    SimplifiedPlaylistObject: ResolverTypeWrapper<SimplifiedPlaylistObject>;
    PublicUserObject: ResolverTypeWrapper<PublicUserObject>;
    BrowseFeaturedPlaylistsInput_Input: BrowseFeaturedPlaylistsInput_Input;
    BrowseGenresSeedOutput: ResolverTypeWrapper<BrowseGenresSeedOutput>;
    BrowseNewReleasesOutput: ResolverTypeWrapper<BrowseNewReleasesOutput>;
    BrowseNewReleasesInput_Input: BrowseNewReleasesInput_Input;
    EpisodeObject: ResolverTypeWrapper<EpisodeObject>;
    ResumePointObject: ResolverTypeWrapper<ResumePointObject>;
    SimplifiedShowObject: ResolverTypeWrapper<SimplifiedShowObject>;
    EpisodesOutput: ResolverTypeWrapper<EpisodesOutput>;
    Void: ResolverTypeWrapper<Scalars['Void']>;
    MeFollowingArtistsOutput: ResolverTypeWrapper<MeFollowingArtistsOutput>;
    MeFollowingArtistsOutputArtists: ResolverTypeWrapper<MeFollowingArtistsOutputArtists>;
    CursorObject: ResolverTypeWrapper<CursorObject>;
    MeFollowingArtistsInput_Input: MeFollowingArtistsInput_Input;
    MeAlbumsOutput: ResolverTypeWrapper<MeAlbumsOutput>;
    SavedAlbumObject: ResolverTypeWrapper<SavedAlbumObject>;
    MeAlbumsContainsInput_Input: MeAlbumsContainsInput_Input;
    MeShowsOutput: ResolverTypeWrapper<MeShowsOutput>;
    SavedShowObject: ResolverTypeWrapper<SavedShowObject>;
    MeTracksOutput: ResolverTypeWrapper<MeTracksOutput>;
    SavedTrackObject: ResolverTypeWrapper<SavedTrackObject>;
    SearchResultsArtists: ResolverTypeWrapper<SearchResultsArtists>;
    MeTopArtistsInput_Input: MeTopArtistsInput_Input;
    MeTopArtistsInput_time_range: MeTopArtistsInput_time_range;
    SearchResultsTracks: ResolverTypeWrapper<SearchResultsTracks>;
    CurrentlyPlayingContextObject: ResolverTypeWrapper<CurrentlyPlayingContextObject>;
    DisallowsObject: ResolverTypeWrapper<DisallowsObject>;
    ContextObject: ResolverTypeWrapper<ContextObject>;
    ContextObject_type: ContextObject_type;
    DeviceObject: ResolverTypeWrapper<DeviceObject>;
    DevicesObject: ResolverTypeWrapper<DevicesObject>;
    PlayerRecentlyPlayedOutput: ResolverTypeWrapper<PlayerRecentlyPlayedOutput>;
    PlayHistoryObject: ResolverTypeWrapper<PlayHistoryObject>;
    PlayerRecentlyPlayedInput_Input: PlayerRecentlyPlayedInput_Input;
    UserPlaylistsInput_Input: UserPlaylistsInput_Input;
    PlaylistObject: ResolverTypeWrapper<PlaylistObject>;
    PlaylistTrackObject: ResolverTypeWrapper<PlaylistTrackObject>;
    PlaylistTracksOutput: ResolverTypeWrapper<PlaylistTracksOutput>;
    SearchResults: ResolverTypeWrapper<SearchResults>;
    SearchResultsShows: ResolverTypeWrapper<SearchResultsShows>;
    SearchResultsEpisodes: ResolverTypeWrapper<SearchResultsEpisodes>;
    SimplifiedEpisodeObject: ResolverTypeWrapper<SimplifiedEpisodeObject>;
    Search_Input: Search_Input;
    Search_include_external: Search_include_external;
    ShowObject: ResolverTypeWrapper<ShowObject>;
    ShowsOutput: ResolverTypeWrapper<ShowsOutput>;
    AudioFeaturesObject: ResolverTypeWrapper<AudioFeaturesObject>;
    TracksAudioFeaturesOutput: ResolverTypeWrapper<TracksAudioFeaturesOutput>;
    PrivateUserObject: ResolverTypeWrapper<PrivateUserObject>;
    ExplicitContentSettingsObject: ResolverTypeWrapper<ExplicitContentSettingsObject>;
    Mutation: ResolverTypeWrapper<{}>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    FollowPlaylistInput_Input: FollowPlaylistInput_Input;
    PlayerPlayInput_Input: PlayerPlayInput_Input;
    PlayerTransferInput_Input: PlayerTransferInput_Input;
    PlaylistAddItemOutput: ResolverTypeWrapper<PlaylistAddItemOutput>;
    PlaylistAddItemInput_Input: PlaylistAddItemInput_Input;
    PlaylistRemoveItemsInput_Input: PlaylistRemoveItemsInput_Input;
    PlaylistRemoveItemsInputTracks_Input: PlaylistRemoveItemsInputTracks_Input;
    UpdatePlaylistInput_Input: UpdatePlaylistInput_Input;
}>;
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = ResolversObject<{
    Query: {};
    String: Scalars['String'];
    ID: Scalars['ID'];
    Boolean: Scalars['Boolean'];
    AlbumObject: AlbumObject;
    Float: Scalars['Float'];
    ArtistObject: ArtistObject;
    ExternalUrlObject: ExternalUrlObject;
    FollowersObject: FollowersObject;
    ImageObject: ImageObject;
    CopyrightObject: CopyrightObject;
    ExternalIdObject: ExternalIdObject;
    AlbumRestrictionObject: AlbumRestrictionObject;
    SimplifiedTrackObject: SimplifiedTrackObject;
    SimplifiedArtistObject: SimplifiedArtistObject;
    AlbumInput_Input: AlbumInput_Input;
    AlbumsOutput: AlbumsOutput;
    AlbumsInput_Input: AlbumsInput_Input;
    AlbumTracksOutput: AlbumTracksOutput;
    AlbumTracksInput_Input: AlbumTracksInput_Input;
    SearchResultsAlbums: SearchResultsAlbums;
    SimplifiedAlbumObject: SimplifiedAlbumObject;
    ArtistAlbumsInput_Input: ArtistAlbumsInput_Input;
    ArtistRelatedArtistsOutput: ArtistRelatedArtistsOutput;
    ArtistTopTracksOutput: ArtistTopTracksOutput;
    TrackObject: TrackObject;
    ArtistTopTracksInput_Input: ArtistTopTracksInput_Input;
    BrowseCategoriesOutput: BrowseCategoriesOutput;
    BrowseCategoriesCategories: BrowseCategoriesCategories;
    CategoryObject: CategoryObject;
    BrowseCategoriesInput_Input: BrowseCategoriesInput_Input;
    BrowseCategoryPlaylistsOutput: BrowseCategoryPlaylistsOutput;
    BrowseFeaturedPlaylistsPlaylists: BrowseFeaturedPlaylistsPlaylists;
    SimplifiedPlaylistObject: SimplifiedPlaylistObject;
    PublicUserObject: PublicUserObject;
    BrowseFeaturedPlaylistsInput_Input: BrowseFeaturedPlaylistsInput_Input;
    BrowseGenresSeedOutput: BrowseGenresSeedOutput;
    BrowseNewReleasesOutput: BrowseNewReleasesOutput;
    BrowseNewReleasesInput_Input: BrowseNewReleasesInput_Input;
    EpisodeObject: EpisodeObject;
    ResumePointObject: ResumePointObject;
    SimplifiedShowObject: SimplifiedShowObject;
    EpisodesOutput: EpisodesOutput;
    Void: Scalars['Void'];
    MeFollowingArtistsOutput: MeFollowingArtistsOutput;
    MeFollowingArtistsOutputArtists: MeFollowingArtistsOutputArtists;
    CursorObject: CursorObject;
    MeFollowingArtistsInput_Input: MeFollowingArtistsInput_Input;
    MeAlbumsOutput: MeAlbumsOutput;
    SavedAlbumObject: SavedAlbumObject;
    MeAlbumsContainsInput_Input: MeAlbumsContainsInput_Input;
    MeShowsOutput: MeShowsOutput;
    SavedShowObject: SavedShowObject;
    MeTracksOutput: MeTracksOutput;
    SavedTrackObject: SavedTrackObject;
    SearchResultsArtists: SearchResultsArtists;
    MeTopArtistsInput_Input: MeTopArtistsInput_Input;
    SearchResultsTracks: SearchResultsTracks;
    CurrentlyPlayingContextObject: CurrentlyPlayingContextObject;
    DisallowsObject: DisallowsObject;
    ContextObject: ContextObject;
    DeviceObject: DeviceObject;
    DevicesObject: DevicesObject;
    PlayerRecentlyPlayedOutput: PlayerRecentlyPlayedOutput;
    PlayHistoryObject: PlayHistoryObject;
    PlayerRecentlyPlayedInput_Input: PlayerRecentlyPlayedInput_Input;
    UserPlaylistsInput_Input: UserPlaylistsInput_Input;
    PlaylistObject: PlaylistObject;
    PlaylistTrackObject: PlaylistTrackObject;
    PlaylistTracksOutput: PlaylistTracksOutput;
    SearchResults: SearchResults;
    SearchResultsShows: SearchResultsShows;
    SearchResultsEpisodes: SearchResultsEpisodes;
    SimplifiedEpisodeObject: SimplifiedEpisodeObject;
    Search_Input: Search_Input;
    ShowObject: ShowObject;
    ShowsOutput: ShowsOutput;
    AudioFeaturesObject: AudioFeaturesObject;
    TracksAudioFeaturesOutput: TracksAudioFeaturesOutput;
    PrivateUserObject: PrivateUserObject;
    ExplicitContentSettingsObject: ExplicitContentSettingsObject;
    Mutation: {};
    Int: Scalars['Int'];
    FollowPlaylistInput_Input: FollowPlaylistInput_Input;
    PlayerPlayInput_Input: PlayerPlayInput_Input;
    PlayerTransferInput_Input: PlayerTransferInput_Input;
    PlaylistAddItemOutput: PlaylistAddItemOutput;
    PlaylistAddItemInput_Input: PlaylistAddItemInput_Input;
    PlaylistRemoveItemsInput_Input: PlaylistRemoveItemsInput_Input;
    PlaylistRemoveItemsInputTracks_Input: PlaylistRemoveItemsInputTracks_Input;
    UpdatePlaylistInput_Input: UpdatePlaylistInput_Input;
}>;
export declare type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    album?: Resolver<Maybe<ResolversTypes['AlbumObject']>, ParentType, ContextType, RequireFields<QueryalbumArgs, never>>;
    albums?: Resolver<Maybe<ResolversTypes['AlbumsOutput']>, ParentType, ContextType, RequireFields<QueryalbumsArgs, never>>;
    albumTracks?: Resolver<Maybe<ResolversTypes['AlbumTracksOutput']>, ParentType, ContextType, RequireFields<QueryalbumTracksArgs, never>>;
    artist?: Resolver<Maybe<ResolversTypes['ArtistObject']>, ParentType, ContextType, RequireFields<QueryartistArgs, never>>;
    artistAlbums?: Resolver<Maybe<ResolversTypes['SearchResultsAlbums']>, ParentType, ContextType, RequireFields<QueryartistAlbumsArgs, never>>;
    artistRelatedArtists?: Resolver<Maybe<ResolversTypes['ArtistRelatedArtistsOutput']>, ParentType, ContextType, RequireFields<QueryartistRelatedArtistsArgs, never>>;
    artists?: Resolver<Maybe<ResolversTypes['ArtistRelatedArtistsOutput']>, ParentType, ContextType, RequireFields<QueryartistsArgs, never>>;
    artistTopTracks?: Resolver<Maybe<ResolversTypes['ArtistTopTracksOutput']>, ParentType, ContextType, RequireFields<QueryartistTopTracksArgs, never>>;
    browseCategories?: Resolver<Maybe<ResolversTypes['BrowseCategoriesOutput']>, ParentType, ContextType, RequireFields<QuerybrowseCategoriesArgs, never>>;
    browseCategory?: Resolver<Maybe<ResolversTypes['CategoryObject']>, ParentType, ContextType, RequireFields<QuerybrowseCategoryArgs, never>>;
    browseCategoryPlaylists?: Resolver<Maybe<ResolversTypes['BrowseCategoryPlaylistsOutput']>, ParentType, ContextType, RequireFields<QuerybrowseCategoryPlaylistsArgs, never>>;
    browseFeaturedPlaylists?: Resolver<Maybe<ResolversTypes['BrowseCategoryPlaylistsOutput']>, ParentType, ContextType, RequireFields<QuerybrowseFeaturedPlaylistsArgs, never>>;
    browseGenresSeed?: Resolver<Maybe<ResolversTypes['BrowseGenresSeedOutput']>, ParentType, ContextType>;
    browseNewReleases?: Resolver<Maybe<ResolversTypes['BrowseNewReleasesOutput']>, ParentType, ContextType, RequireFields<QuerybrowseNewReleasesArgs, never>>;
    episode?: Resolver<Maybe<ResolversTypes['EpisodeObject']>, ParentType, ContextType, RequireFields<QueryepisodeArgs, never>>;
    episodes?: Resolver<Maybe<ResolversTypes['EpisodesOutput']>, ParentType, ContextType, RequireFields<QueryepisodesArgs, never>>;
    checkUsersFollowPlaylist?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<QuerycheckUsersFollowPlaylistArgs, never>>;
    meFollowingArtists?: Resolver<Maybe<ResolversTypes['MeFollowingArtistsOutput']>, ParentType, ContextType, RequireFields<QuerymeFollowingArtistsArgs, never>>;
    meIsFollowing?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType, RequireFields<QuerymeIsFollowingArgs, never>>;
    meAlbums?: Resolver<Maybe<ResolversTypes['MeAlbumsOutput']>, ParentType, ContextType, RequireFields<QuerymeAlbumsArgs, never>>;
    meAlbumsContains?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType, RequireFields<QuerymeAlbumsContainsArgs, never>>;
    meShows?: Resolver<Maybe<ResolversTypes['MeShowsOutput']>, ParentType, ContextType, RequireFields<QuerymeShowsArgs, never>>;
    meShowsContains?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType, RequireFields<QuerymeShowsContainsArgs, never>>;
    meTracks?: Resolver<Maybe<ResolversTypes['MeTracksOutput']>, ParentType, ContextType, RequireFields<QuerymeTracksArgs, never>>;
    meTracksContains?: Resolver<Maybe<Array<Maybe<ResolversTypes['Boolean']>>>, ParentType, ContextType, RequireFields<QuerymeTracksContainsArgs, never>>;
    meTopArtists?: Resolver<Maybe<ResolversTypes['SearchResultsArtists']>, ParentType, ContextType, RequireFields<QuerymeTopArtistsArgs, never>>;
    meTopTracks?: Resolver<Maybe<ResolversTypes['SearchResultsTracks']>, ParentType, ContextType, RequireFields<QuerymeTopTracksArgs, never>>;
    player?: Resolver<Maybe<ResolversTypes['CurrentlyPlayingContextObject']>, ParentType, ContextType, RequireFields<QueryplayerArgs, never>>;
    playerCurrentlyPlaying?: Resolver<Maybe<ResolversTypes['CurrentlyPlayingContextObject']>, ParentType, ContextType, RequireFields<QueryplayerCurrentlyPlayingArgs, never>>;
    playerDevices?: Resolver<Maybe<ResolversTypes['DevicesObject']>, ParentType, ContextType>;
    playerRecentlyPlayed?: Resolver<Maybe<ResolversTypes['PlayerRecentlyPlayedOutput']>, ParentType, ContextType, RequireFields<QueryplayerRecentlyPlayedArgs, never>>;
    mePlaylists?: Resolver<Maybe<ResolversTypes['BrowseFeaturedPlaylistsPlaylists']>, ParentType, ContextType, RequireFields<QuerymePlaylistsArgs, never>>;
    playlist?: Resolver<Maybe<ResolversTypes['PlaylistObject']>, ParentType, ContextType, RequireFields<QueryplaylistArgs, never>>;
    playlistCoverImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType, RequireFields<QueryplaylistCoverImagesArgs, never>>;
    playlistTracks?: Resolver<Maybe<ResolversTypes['PlaylistTracksOutput']>, ParentType, ContextType, RequireFields<QueryplaylistTracksArgs, never>>;
    userPlaylists?: Resolver<Maybe<ResolversTypes['BrowseFeaturedPlaylistsPlaylists']>, ParentType, ContextType, RequireFields<QueryuserPlaylistsArgs, never>>;
    search?: Resolver<Maybe<ResolversTypes['SearchResults']>, ParentType, ContextType, RequireFields<QuerysearchArgs, never>>;
    show?: Resolver<Maybe<ResolversTypes['ShowObject']>, ParentType, ContextType, RequireFields<QueryshowArgs, never>>;
    showEpisodes?: Resolver<Maybe<ResolversTypes['SearchResultsEpisodes']>, ParentType, ContextType, RequireFields<QueryshowEpisodesArgs, never>>;
    shows?: Resolver<Maybe<ResolversTypes['ShowsOutput']>, ParentType, ContextType, RequireFields<QueryshowsArgs, never>>;
    track?: Resolver<Maybe<ResolversTypes['TrackObject']>, ParentType, ContextType, RequireFields<QuerytrackArgs, never>>;
    trackAudioFeatures?: Resolver<Maybe<ResolversTypes['AudioFeaturesObject']>, ParentType, ContextType, RequireFields<QuerytrackAudioFeaturesArgs, never>>;
    tracks?: Resolver<Maybe<ResolversTypes['ArtistTopTracksOutput']>, ParentType, ContextType, RequireFields<QuerytracksArgs, never>>;
    tracksAudioFeatures?: Resolver<Maybe<ResolversTypes['TracksAudioFeaturesOutput']>, ParentType, ContextType, RequireFields<QuerytracksAudioFeaturesArgs, never>>;
    me?: Resolver<Maybe<ResolversTypes['PrivateUserObject']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['PublicUserObject']>, ParentType, ContextType, RequireFields<QueryuserArgs, never>>;
}>;
export declare type AlbumObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AlbumObject'] = ResolversParentTypes['AlbumObject']> = ResolversObject<{
    album_type?: Resolver<Maybe<ResolversTypes['AlbumObject_album_type']>, ParentType, ContextType>;
    artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistObject']>>>, ParentType, ContextType>;
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    copyrights?: Resolver<Maybe<Array<Maybe<ResolversTypes['CopyrightObject']>>>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    external_ids?: Resolver<Maybe<ResolversTypes['ExternalIdObject']>, ParentType, ContextType>;
    genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date_precision?: Resolver<Maybe<ResolversTypes['AlbumObject_release_date_precision']>, ParentType, ContextType>;
    restrictions?: Resolver<Maybe<ResolversTypes['AlbumRestrictionObject']>, ParentType, ContextType>;
    tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedTrackObject']>>>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ArtistObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ArtistObject'] = ResolversParentTypes['ArtistObject']> = ResolversObject<{
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowersObject']>>>, ParentType, ContextType>;
    genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExternalUrlObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExternalUrlObject'] = ResolversParentTypes['ExternalUrlObject']> = ResolversObject<{
    spotify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FollowersObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FollowersObject'] = ResolversParentTypes['FollowersObject']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ImageObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImageObject'] = ResolversParentTypes['ImageObject']> = ResolversObject<{
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type CopyrightObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CopyrightObject'] = ResolversParentTypes['CopyrightObject']> = ResolversObject<{
    text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['CopyrightObject_type']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExternalIdObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExternalIdObject'] = ResolversParentTypes['ExternalIdObject']> = ResolversObject<{
    ean?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    upc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AlbumRestrictionObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AlbumRestrictionObject'] = ResolversParentTypes['AlbumRestrictionObject']> = ResolversObject<{
    reason?: Resolver<Maybe<ResolversTypes['AlbumRestrictionObject_reason']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedTrackObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedTrackObject'] = ResolversParentTypes['SimplifiedTrackObject']> = ResolversObject<{
    artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedArtistObject']>>>, ParentType, ContextType>;
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    disc_number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    is_local?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    is_playable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    restrictions?: Resolver<Maybe<ResolversTypes['AlbumRestrictionObject']>, ParentType, ContextType>;
    track_number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedArtistObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedArtistObject'] = ResolversParentTypes['SimplifiedArtistObject']> = ResolversObject<{
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AlbumsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AlbumsOutput'] = ResolversParentTypes['AlbumsOutput']> = ResolversObject<{
    albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['AlbumObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AlbumTracksOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AlbumTracksOutput'] = ResolversParentTypes['AlbumTracksOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedTrackObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsAlbumsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsAlbums'] = ResolversParentTypes['SearchResultsAlbums']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedAlbumObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedAlbumObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedAlbumObject'] = ResolversParentTypes['SimplifiedAlbumObject']> = ResolversObject<{
    album_group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    album_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedArtistObject']>>>, ParentType, ContextType>;
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date_precision?: Resolver<Maybe<ResolversTypes['AlbumObject_release_date_precision']>, ParentType, ContextType>;
    restrictions?: Resolver<Maybe<ResolversTypes['AlbumRestrictionObject']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ArtistRelatedArtistsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ArtistRelatedArtistsOutput'] = ResolversParentTypes['ArtistRelatedArtistsOutput']> = ResolversObject<{
    artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ArtistTopTracksOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ArtistTopTracksOutput'] = ResolversParentTypes['ArtistTopTracksOutput']> = ResolversObject<{
    tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TrackObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrackObject'] = ResolversParentTypes['TrackObject']> = ResolversObject<{
    album?: Resolver<Maybe<ResolversTypes['SimplifiedAlbumObject']>, ParentType, ContextType>;
    artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistObject']>>>, ParentType, ContextType>;
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    disc_number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_ids?: Resolver<Maybe<ResolversTypes['ExternalIdObject']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    is_playable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    restrictions?: Resolver<Maybe<ResolversTypes['AlbumRestrictionObject']>, ParentType, ContextType>;
    track_number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseCategoriesOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseCategoriesOutput'] = ResolversParentTypes['BrowseCategoriesOutput']> = ResolversObject<{
    categories?: Resolver<Maybe<ResolversTypes['BrowseCategoriesCategories']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseCategoriesCategoriesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseCategoriesCategories'] = ResolversParentTypes['BrowseCategoriesCategories']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type CategoryObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CategoryObject'] = ResolversParentTypes['CategoryObject']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icons?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseCategoryPlaylistsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseCategoryPlaylistsOutput'] = ResolversParentTypes['BrowseCategoryPlaylistsOutput']> = ResolversObject<{
    playlists?: Resolver<Maybe<ResolversTypes['BrowseFeaturedPlaylistsPlaylists']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseFeaturedPlaylistsPlaylistsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseFeaturedPlaylistsPlaylists'] = ResolversParentTypes['BrowseFeaturedPlaylistsPlaylists']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedPlaylistObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedPlaylistObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedPlaylistObject'] = ResolversParentTypes['SimplifiedPlaylistObject']> = ResolversObject<{
    collaborative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['PublicUserObject']>, ParentType, ContextType>;
    public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    snapshot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tracks?: Resolver<Maybe<ResolversTypes['FollowersObject']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PublicUserObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PublicUserObject'] = ResolversParentTypes['PublicUserObject']> = ResolversObject<{
    display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowersObject']>>>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseGenresSeedOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseGenresSeedOutput'] = ResolversParentTypes['BrowseGenresSeedOutput']> = ResolversObject<{
    genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BrowseNewReleasesOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BrowseNewReleasesOutput'] = ResolversParentTypes['BrowseNewReleasesOutput']> = ResolversObject<{
    albums?: Resolver<Maybe<ResolversTypes['SearchResultsAlbums']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type EpisodeObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EpisodeObject'] = ResolversParentTypes['EpisodeObject']> = ResolversObject<{
    audio_preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    is_externally_hosted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    is_playable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date_precision?: Resolver<Maybe<ResolversTypes['AlbumObject_release_date_precision']>, ParentType, ContextType>;
    resume_point?: Resolver<Maybe<ResolversTypes['ResumePointObject']>, ParentType, ContextType>;
    show?: Resolver<Maybe<ResolversTypes['SimplifiedShowObject']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ResumePointObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResumePointObject'] = ResolversParentTypes['ResumePointObject']> = ResolversObject<{
    fully_played?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    resume_position_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedShowObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedShowObject'] = ResolversParentTypes['SimplifiedShowObject']> = ResolversObject<{
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    copyrights?: Resolver<Maybe<Array<Maybe<ResolversTypes['CopyrightObject']>>>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    is_externally_hosted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type EpisodesOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EpisodesOutput'] = ResolversParentTypes['EpisodesOutput']> = ResolversObject<{
    episodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EpisodeObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
    name: 'Void';
}
export declare type MeFollowingArtistsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeFollowingArtistsOutput'] = ResolversParentTypes['MeFollowingArtistsOutput']> = ResolversObject<{
    artists?: Resolver<Maybe<ResolversTypes['MeFollowingArtistsOutputArtists']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MeFollowingArtistsOutputArtistsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeFollowingArtistsOutputArtists'] = ResolversParentTypes['MeFollowingArtistsOutputArtists']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistObject']>>>, ParentType, ContextType>;
    cursors?: Resolver<Maybe<ResolversTypes['CursorObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type CursorObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CursorObject'] = ResolversParentTypes['CursorObject']> = ResolversObject<{
    after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MeAlbumsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeAlbumsOutput'] = ResolversParentTypes['MeAlbumsOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedAlbumObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SavedAlbumObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SavedAlbumObject'] = ResolversParentTypes['SavedAlbumObject']> = ResolversObject<{
    added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    album?: Resolver<Maybe<ResolversTypes['AlbumObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MeShowsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeShowsOutput'] = ResolversParentTypes['MeShowsOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedShowObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SavedShowObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SavedShowObject'] = ResolversParentTypes['SavedShowObject']> = ResolversObject<{
    added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    album?: Resolver<Maybe<ResolversTypes['SimplifiedShowObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MeTracksOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MeTracksOutput'] = ResolversParentTypes['MeTracksOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SavedTrackObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SavedTrackObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SavedTrackObject'] = ResolversParentTypes['SavedTrackObject']> = ResolversObject<{
    added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    album?: Resolver<Maybe<ResolversTypes['TrackObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsArtistsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsArtists'] = ResolversParentTypes['SearchResultsArtists']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsTracksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsTracks'] = ResolversParentTypes['SearchResultsTracks']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['TrackObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type CurrentlyPlayingContextObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrentlyPlayingContextObject'] = ResolversParentTypes['CurrentlyPlayingContextObject']> = ResolversObject<{
    actions?: Resolver<Maybe<ResolversTypes['DisallowsObject']>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['ContextObject']>, ParentType, ContextType>;
    currently_playing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    device?: Resolver<Maybe<ResolversTypes['DeviceObject']>, ParentType, ContextType>;
    is_playing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    item?: Resolver<Maybe<ResolversTypes['TrackObject']>, ParentType, ContextType>;
    progress_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    repeat_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    shuffle_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type DisallowsObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DisallowsObject'] = ResolversParentTypes['DisallowsObject']> = ResolversObject<{
    interrupting_playback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    pausing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    resuming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    seeking?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    skipping_next?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    skipping_prev?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    toggling_repeat_context?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    toggling_repeat_track?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    toggling_shuffle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    transferring_playback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ContextObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContextObject'] = ResolversParentTypes['ContextObject']> = ResolversObject<{
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['ContextObject_type']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type DeviceObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DeviceObject'] = ResolversParentTypes['DeviceObject']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    is_private_session?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    is_restricted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    volume_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type DevicesObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DevicesObject'] = ResolversParentTypes['DevicesObject']> = ResolversObject<{
    devices?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PlayerRecentlyPlayedOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlayerRecentlyPlayedOutput'] = ResolversParentTypes['PlayerRecentlyPlayedOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayHistoryObject']>>>, ParentType, ContextType>;
    cursors?: Resolver<Maybe<ResolversTypes['CursorObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PlayHistoryObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlayHistoryObject'] = ResolversParentTypes['PlayHistoryObject']> = ResolversObject<{
    played_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    context?: Resolver<Maybe<ResolversTypes['ContextObject']>, ParentType, ContextType>;
    track?: Resolver<Maybe<ResolversTypes['SimplifiedTrackObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PlaylistObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistObject'] = ResolversParentTypes['PlaylistObject']> = ResolversObject<{
    collaborative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowersObject']>>>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['PublicUserObject']>, ParentType, ContextType>;
    public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    snapshot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistTrackObject']>>>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PlaylistTrackObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistTrackObject'] = ResolversParentTypes['PlaylistTrackObject']> = ResolversObject<{
    added_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    added_by?: Resolver<Maybe<ResolversTypes['PublicUserObject']>, ParentType, ContextType>;
    is_local?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    track?: Resolver<Maybe<ResolversTypes['TrackObject']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PlaylistTracksOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistTracksOutput'] = ResolversParentTypes['PlaylistTracksOutput']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlaylistTrackObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResults'] = ResolversParentTypes['SearchResults']> = ResolversObject<{
    artists?: Resolver<Maybe<ResolversTypes['SearchResultsArtists']>, ParentType, ContextType>;
    albums?: Resolver<Maybe<ResolversTypes['SearchResultsAlbums']>, ParentType, ContextType>;
    shows?: Resolver<Maybe<ResolversTypes['SearchResultsShows']>, ParentType, ContextType>;
    tracks?: Resolver<Maybe<ResolversTypes['SearchResultsTracks']>, ParentType, ContextType>;
    episodes?: Resolver<Maybe<ResolversTypes['SearchResultsEpisodes']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsShowsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsShows'] = ResolversParentTypes['SearchResultsShows']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedShowObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SearchResultsEpisodesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SearchResultsEpisodes'] = ResolversParentTypes['SearchResultsEpisodes']> = ResolversObject<{
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedEpisodeObject']>>>, ParentType, ContextType>;
    offset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SimplifiedEpisodeObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SimplifiedEpisodeObject'] = ResolversParentTypes['SimplifiedEpisodeObject']> = ResolversObject<{
    audio_preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    is_externally_hosted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    is_playable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_date_precision?: Resolver<Maybe<ResolversTypes['AlbumObject_release_date_precision']>, ParentType, ContextType>;
    resume_point?: Resolver<Maybe<ResolversTypes['ResumePointObject']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ShowObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShowObject'] = ResolversParentTypes['ShowObject']> = ResolversObject<{
    available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    copyrights?: Resolver<Maybe<Array<Maybe<ResolversTypes['CopyrightObject']>>>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    episodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedEpisodeObject']>>>, ParentType, ContextType>;
    explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    is_externally_hosted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ShowsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ShowsOutput'] = ResolversParentTypes['ShowsOutput']> = ResolversObject<{
    shows?: Resolver<Maybe<Array<Maybe<ResolversTypes['SimplifiedShowObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AudioFeaturesObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AudioFeaturesObject'] = ResolversParentTypes['AudioFeaturesObject']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    acousticness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    analysis_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    danceability?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    duration_ms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    energy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    instrumentalness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    key?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    liveness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    loudness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    mode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    speechiness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    tempo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    time_signature?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    track_href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    valence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TracksAudioFeaturesOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TracksAudioFeaturesOutput'] = ResolversParentTypes['TracksAudioFeaturesOutput']> = ResolversObject<{
    audio_features?: Resolver<Maybe<Array<Maybe<ResolversTypes['AudioFeaturesObject']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PrivateUserObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PrivateUserObject'] = ResolversParentTypes['PrivateUserObject']> = ResolversObject<{
    country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    explicit_content?: Resolver<Maybe<ResolversTypes['ExplicitContentSettingsObject']>, ParentType, ContextType>;
    external_urls?: Resolver<Maybe<ResolversTypes['ExternalUrlObject']>, ParentType, ContextType>;
    followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowersObject']>>>, ParentType, ContextType>;
    href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageObject']>>>, ParentType, ContextType>;
    product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExplicitContentSettingsObjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExplicitContentSettingsObject'] = ResolversParentTypes['ExplicitContentSettingsObject']> = ResolversObject<{
    filter_enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    filter_locker?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    followArtists?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationfollowArtistsArgs, never>>;
    followPlaylist?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationfollowPlaylistArgs, never>>;
    followUsers?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationfollowUsersArgs, never>>;
    unfollowArtists?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationunfollowArtistsArgs, never>>;
    unfollowPlaylist?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationunfollowPlaylistArgs, never>>;
    unfollowUsers?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationunfollowUsersArgs, never>>;
    meRemoveAlbums?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeRemoveAlbumsArgs, never>>;
    meRemoveShows?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeRemoveShowsArgs, never>>;
    meRemoveTracks?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeRemoveTracksArgs, never>>;
    meSaveAlbums?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeSaveAlbumsArgs, never>>;
    meSaveShows?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeSaveShowsArgs, never>>;
    meSaveTracks?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationmeSaveTracksArgs, never>>;
    playerPause?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerPauseArgs, never>>;
    playerPauseForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerPauseForDeviceArgs, never>>;
    playerPlay?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerPlayArgs, never>>;
    playerPlayForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerPlayForDeviceArgs, never>>;
    playerPrevious?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
    playerPreviousForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerPreviousForDeviceArgs, never>>;
    playerQueue?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerQueueArgs, never>>;
    playerQueueForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerQueueForDeviceArgs, never>>;
    playerRepeat?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerRepeatArgs, never>>;
    playerRepeatForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerRepeatForDeviceArgs, never>>;
    playerSeek?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerSeekArgs, never>>;
    playerSeekForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerSeekForDeviceArgs, never>>;
    playerShuffle?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerShuffleArgs, never>>;
    playerShuffleForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerShuffleForDeviceArgs, never>>;
    playerTransfer?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerTransferArgs, never>>;
    playerVolume?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerVolumeArgs, never>>;
    playerVolumeForDevice?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationplayerVolumeForDeviceArgs, never>>;
    createPlaylist?: Resolver<Maybe<ResolversTypes['PlaylistObject']>, ParentType, ContextType, RequireFields<MutationcreatePlaylistArgs, never>>;
    playlistAddItem?: Resolver<Maybe<ResolversTypes['PlaylistAddItemOutput']>, ParentType, ContextType, RequireFields<MutationplaylistAddItemArgs, never>>;
    playlistRemoveItems?: Resolver<Maybe<ResolversTypes['PlaylistAddItemOutput']>, ParentType, ContextType, RequireFields<MutationplaylistRemoveItemsArgs, never>>;
    playlistReorderOrReplaceItems?: Resolver<Maybe<ResolversTypes['PlaylistAddItemOutput']>, ParentType, ContextType, RequireFields<MutationplaylistReorderOrReplaceItemsArgs, never>>;
    updatePlaylist?: Resolver<Maybe<ResolversTypes['PlaylistObject']>, ParentType, ContextType, RequireFields<MutationupdatePlaylistArgs, never>>;
}>;
export declare type PlaylistAddItemOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PlaylistAddItemOutput'] = ResolversParentTypes['PlaylistAddItemOutput']> = ResolversObject<{
    snapshot_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    AlbumObject?: AlbumObjectResolvers<ContextType>;
    ArtistObject?: ArtistObjectResolvers<ContextType>;
    ExternalUrlObject?: ExternalUrlObjectResolvers<ContextType>;
    FollowersObject?: FollowersObjectResolvers<ContextType>;
    ImageObject?: ImageObjectResolvers<ContextType>;
    CopyrightObject?: CopyrightObjectResolvers<ContextType>;
    ExternalIdObject?: ExternalIdObjectResolvers<ContextType>;
    AlbumRestrictionObject?: AlbumRestrictionObjectResolvers<ContextType>;
    SimplifiedTrackObject?: SimplifiedTrackObjectResolvers<ContextType>;
    SimplifiedArtistObject?: SimplifiedArtistObjectResolvers<ContextType>;
    AlbumsOutput?: AlbumsOutputResolvers<ContextType>;
    AlbumTracksOutput?: AlbumTracksOutputResolvers<ContextType>;
    SearchResultsAlbums?: SearchResultsAlbumsResolvers<ContextType>;
    SimplifiedAlbumObject?: SimplifiedAlbumObjectResolvers<ContextType>;
    ArtistRelatedArtistsOutput?: ArtistRelatedArtistsOutputResolvers<ContextType>;
    ArtistTopTracksOutput?: ArtistTopTracksOutputResolvers<ContextType>;
    TrackObject?: TrackObjectResolvers<ContextType>;
    BrowseCategoriesOutput?: BrowseCategoriesOutputResolvers<ContextType>;
    BrowseCategoriesCategories?: BrowseCategoriesCategoriesResolvers<ContextType>;
    CategoryObject?: CategoryObjectResolvers<ContextType>;
    BrowseCategoryPlaylistsOutput?: BrowseCategoryPlaylistsOutputResolvers<ContextType>;
    BrowseFeaturedPlaylistsPlaylists?: BrowseFeaturedPlaylistsPlaylistsResolvers<ContextType>;
    SimplifiedPlaylistObject?: SimplifiedPlaylistObjectResolvers<ContextType>;
    PublicUserObject?: PublicUserObjectResolvers<ContextType>;
    BrowseGenresSeedOutput?: BrowseGenresSeedOutputResolvers<ContextType>;
    BrowseNewReleasesOutput?: BrowseNewReleasesOutputResolvers<ContextType>;
    EpisodeObject?: EpisodeObjectResolvers<ContextType>;
    ResumePointObject?: ResumePointObjectResolvers<ContextType>;
    SimplifiedShowObject?: SimplifiedShowObjectResolvers<ContextType>;
    EpisodesOutput?: EpisodesOutputResolvers<ContextType>;
    Void?: GraphQLScalarType;
    MeFollowingArtistsOutput?: MeFollowingArtistsOutputResolvers<ContextType>;
    MeFollowingArtistsOutputArtists?: MeFollowingArtistsOutputArtistsResolvers<ContextType>;
    CursorObject?: CursorObjectResolvers<ContextType>;
    MeAlbumsOutput?: MeAlbumsOutputResolvers<ContextType>;
    SavedAlbumObject?: SavedAlbumObjectResolvers<ContextType>;
    MeShowsOutput?: MeShowsOutputResolvers<ContextType>;
    SavedShowObject?: SavedShowObjectResolvers<ContextType>;
    MeTracksOutput?: MeTracksOutputResolvers<ContextType>;
    SavedTrackObject?: SavedTrackObjectResolvers<ContextType>;
    SearchResultsArtists?: SearchResultsArtistsResolvers<ContextType>;
    SearchResultsTracks?: SearchResultsTracksResolvers<ContextType>;
    CurrentlyPlayingContextObject?: CurrentlyPlayingContextObjectResolvers<ContextType>;
    DisallowsObject?: DisallowsObjectResolvers<ContextType>;
    ContextObject?: ContextObjectResolvers<ContextType>;
    DeviceObject?: DeviceObjectResolvers<ContextType>;
    DevicesObject?: DevicesObjectResolvers<ContextType>;
    PlayerRecentlyPlayedOutput?: PlayerRecentlyPlayedOutputResolvers<ContextType>;
    PlayHistoryObject?: PlayHistoryObjectResolvers<ContextType>;
    PlaylistObject?: PlaylistObjectResolvers<ContextType>;
    PlaylistTrackObject?: PlaylistTrackObjectResolvers<ContextType>;
    PlaylistTracksOutput?: PlaylistTracksOutputResolvers<ContextType>;
    SearchResults?: SearchResultsResolvers<ContextType>;
    SearchResultsShows?: SearchResultsShowsResolvers<ContextType>;
    SearchResultsEpisodes?: SearchResultsEpisodesResolvers<ContextType>;
    SimplifiedEpisodeObject?: SimplifiedEpisodeObjectResolvers<ContextType>;
    ShowObject?: ShowObjectResolvers<ContextType>;
    ShowsOutput?: ShowsOutputResolvers<ContextType>;
    AudioFeaturesObject?: AudioFeaturesObjectResolvers<ContextType>;
    TracksAudioFeaturesOutput?: TracksAudioFeaturesOutputResolvers<ContextType>;
    PrivateUserObject?: PrivateUserObjectResolvers<ContextType>;
    ExplicitContentSettingsObject?: ExplicitContentSettingsObjectResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    PlaylistAddItemOutput?: PlaylistAddItemOutputResolvers<ContextType>;
}>;
import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { InContextSdkMethod } from '@graphql-mesh/types';
export declare type QuerySpotifySdk = {
    album: InContextSdkMethod<Query['album'], QueryalbumArgs, MeshContext>;
    albums: InContextSdkMethod<Query['albums'], QueryalbumsArgs, MeshContext>;
    albumTracks: InContextSdkMethod<Query['albumTracks'], QueryalbumTracksArgs, MeshContext>;
    artist: InContextSdkMethod<Query['artist'], QueryartistArgs, MeshContext>;
    artistAlbums: InContextSdkMethod<Query['artistAlbums'], QueryartistAlbumsArgs, MeshContext>;
    artistRelatedArtists: InContextSdkMethod<Query['artistRelatedArtists'], QueryartistRelatedArtistsArgs, MeshContext>;
    artists: InContextSdkMethod<Query['artists'], QueryartistsArgs, MeshContext>;
    artistTopTracks: InContextSdkMethod<Query['artistTopTracks'], QueryartistTopTracksArgs, MeshContext>;
    browseCategories: InContextSdkMethod<Query['browseCategories'], QuerybrowseCategoriesArgs, MeshContext>;
    browseCategory: InContextSdkMethod<Query['browseCategory'], QuerybrowseCategoryArgs, MeshContext>;
    browseCategoryPlaylists: InContextSdkMethod<Query['browseCategoryPlaylists'], QuerybrowseCategoryPlaylistsArgs, MeshContext>;
    browseFeaturedPlaylists: InContextSdkMethod<Query['browseFeaturedPlaylists'], QuerybrowseFeaturedPlaylistsArgs, MeshContext>;
    browseGenresSeed: InContextSdkMethod<Query['browseGenresSeed'], {}, MeshContext>;
    browseNewReleases: InContextSdkMethod<Query['browseNewReleases'], QuerybrowseNewReleasesArgs, MeshContext>;
    episode: InContextSdkMethod<Query['episode'], QueryepisodeArgs, MeshContext>;
    episodes: InContextSdkMethod<Query['episodes'], QueryepisodesArgs, MeshContext>;
    checkUsersFollowPlaylist: InContextSdkMethod<Query['checkUsersFollowPlaylist'], QuerycheckUsersFollowPlaylistArgs, MeshContext>;
    meFollowingArtists: InContextSdkMethod<Query['meFollowingArtists'], QuerymeFollowingArtistsArgs, MeshContext>;
    meIsFollowing: InContextSdkMethod<Query['meIsFollowing'], QuerymeIsFollowingArgs, MeshContext>;
    meAlbums: InContextSdkMethod<Query['meAlbums'], QuerymeAlbumsArgs, MeshContext>;
    meAlbumsContains: InContextSdkMethod<Query['meAlbumsContains'], QuerymeAlbumsContainsArgs, MeshContext>;
    meShows: InContextSdkMethod<Query['meShows'], QuerymeShowsArgs, MeshContext>;
    meShowsContains: InContextSdkMethod<Query['meShowsContains'], QuerymeShowsContainsArgs, MeshContext>;
    meTracks: InContextSdkMethod<Query['meTracks'], QuerymeTracksArgs, MeshContext>;
    meTracksContains: InContextSdkMethod<Query['meTracksContains'], QuerymeTracksContainsArgs, MeshContext>;
    meTopArtists: InContextSdkMethod<Query['meTopArtists'], QuerymeTopArtistsArgs, MeshContext>;
    meTopTracks: InContextSdkMethod<Query['meTopTracks'], QuerymeTopTracksArgs, MeshContext>;
    player: InContextSdkMethod<Query['player'], QueryplayerArgs, MeshContext>;
    playerCurrentlyPlaying: InContextSdkMethod<Query['playerCurrentlyPlaying'], QueryplayerCurrentlyPlayingArgs, MeshContext>;
    playerDevices: InContextSdkMethod<Query['playerDevices'], {}, MeshContext>;
    playerRecentlyPlayed: InContextSdkMethod<Query['playerRecentlyPlayed'], QueryplayerRecentlyPlayedArgs, MeshContext>;
    mePlaylists: InContextSdkMethod<Query['mePlaylists'], QuerymePlaylistsArgs, MeshContext>;
    playlist: InContextSdkMethod<Query['playlist'], QueryplaylistArgs, MeshContext>;
    playlistCoverImages: InContextSdkMethod<Query['playlistCoverImages'], QueryplaylistCoverImagesArgs, MeshContext>;
    playlistTracks: InContextSdkMethod<Query['playlistTracks'], QueryplaylistTracksArgs, MeshContext>;
    userPlaylists: InContextSdkMethod<Query['userPlaylists'], QueryuserPlaylistsArgs, MeshContext>;
    search: InContextSdkMethod<Query['search'], QuerysearchArgs, MeshContext>;
    show: InContextSdkMethod<Query['show'], QueryshowArgs, MeshContext>;
    showEpisodes: InContextSdkMethod<Query['showEpisodes'], QueryshowEpisodesArgs, MeshContext>;
    shows: InContextSdkMethod<Query['shows'], QueryshowsArgs, MeshContext>;
    track: InContextSdkMethod<Query['track'], QuerytrackArgs, MeshContext>;
    trackAudioFeatures: InContextSdkMethod<Query['trackAudioFeatures'], QuerytrackAudioFeaturesArgs, MeshContext>;
    tracks: InContextSdkMethod<Query['tracks'], QuerytracksArgs, MeshContext>;
    tracksAudioFeatures: InContextSdkMethod<Query['tracksAudioFeatures'], QuerytracksAudioFeaturesArgs, MeshContext>;
    me: InContextSdkMethod<Query['me'], {}, MeshContext>;
    user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>;
};
export declare type MutationSpotifySdk = {
    followArtists: InContextSdkMethod<Mutation['followArtists'], MutationfollowArtistsArgs, MeshContext>;
    followPlaylist: InContextSdkMethod<Mutation['followPlaylist'], MutationfollowPlaylistArgs, MeshContext>;
    followUsers: InContextSdkMethod<Mutation['followUsers'], MutationfollowUsersArgs, MeshContext>;
    unfollowArtists: InContextSdkMethod<Mutation['unfollowArtists'], MutationunfollowArtistsArgs, MeshContext>;
    unfollowPlaylist: InContextSdkMethod<Mutation['unfollowPlaylist'], MutationunfollowPlaylistArgs, MeshContext>;
    unfollowUsers: InContextSdkMethod<Mutation['unfollowUsers'], MutationunfollowUsersArgs, MeshContext>;
    meRemoveAlbums: InContextSdkMethod<Mutation['meRemoveAlbums'], MutationmeRemoveAlbumsArgs, MeshContext>;
    meRemoveShows: InContextSdkMethod<Mutation['meRemoveShows'], MutationmeRemoveShowsArgs, MeshContext>;
    meRemoveTracks: InContextSdkMethod<Mutation['meRemoveTracks'], MutationmeRemoveTracksArgs, MeshContext>;
    meSaveAlbums: InContextSdkMethod<Mutation['meSaveAlbums'], MutationmeSaveAlbumsArgs, MeshContext>;
    meSaveShows: InContextSdkMethod<Mutation['meSaveShows'], MutationmeSaveShowsArgs, MeshContext>;
    meSaveTracks: InContextSdkMethod<Mutation['meSaveTracks'], MutationmeSaveTracksArgs, MeshContext>;
    playerPause: InContextSdkMethod<Mutation['playerPause'], MutationplayerPauseArgs, MeshContext>;
    playerPauseForDevice: InContextSdkMethod<Mutation['playerPauseForDevice'], MutationplayerPauseForDeviceArgs, MeshContext>;
    playerPlay: InContextSdkMethod<Mutation['playerPlay'], MutationplayerPlayArgs, MeshContext>;
    playerPlayForDevice: InContextSdkMethod<Mutation['playerPlayForDevice'], MutationplayerPlayForDeviceArgs, MeshContext>;
    playerPrevious: InContextSdkMethod<Mutation['playerPrevious'], {}, MeshContext>;
    playerPreviousForDevice: InContextSdkMethod<Mutation['playerPreviousForDevice'], MutationplayerPreviousForDeviceArgs, MeshContext>;
    playerQueue: InContextSdkMethod<Mutation['playerQueue'], MutationplayerQueueArgs, MeshContext>;
    playerQueueForDevice: InContextSdkMethod<Mutation['playerQueueForDevice'], MutationplayerQueueForDeviceArgs, MeshContext>;
    playerRepeat: InContextSdkMethod<Mutation['playerRepeat'], MutationplayerRepeatArgs, MeshContext>;
    playerRepeatForDevice: InContextSdkMethod<Mutation['playerRepeatForDevice'], MutationplayerRepeatForDeviceArgs, MeshContext>;
    playerSeek: InContextSdkMethod<Mutation['playerSeek'], MutationplayerSeekArgs, MeshContext>;
    playerSeekForDevice: InContextSdkMethod<Mutation['playerSeekForDevice'], MutationplayerSeekForDeviceArgs, MeshContext>;
    playerShuffle: InContextSdkMethod<Mutation['playerShuffle'], MutationplayerShuffleArgs, MeshContext>;
    playerShuffleForDevice: InContextSdkMethod<Mutation['playerShuffleForDevice'], MutationplayerShuffleForDeviceArgs, MeshContext>;
    playerTransfer: InContextSdkMethod<Mutation['playerTransfer'], MutationplayerTransferArgs, MeshContext>;
    playerVolume: InContextSdkMethod<Mutation['playerVolume'], MutationplayerVolumeArgs, MeshContext>;
    playerVolumeForDevice: InContextSdkMethod<Mutation['playerVolumeForDevice'], MutationplayerVolumeForDeviceArgs, MeshContext>;
    createPlaylist: InContextSdkMethod<Mutation['createPlaylist'], MutationcreatePlaylistArgs, MeshContext>;
    playlistAddItem: InContextSdkMethod<Mutation['playlistAddItem'], MutationplaylistAddItemArgs, MeshContext>;
    playlistRemoveItems: InContextSdkMethod<Mutation['playlistRemoveItems'], MutationplaylistRemoveItemsArgs, MeshContext>;
    playlistReorderOrReplaceItems: InContextSdkMethod<Mutation['playlistReorderOrReplaceItems'], MutationplaylistReorderOrReplaceItemsArgs, MeshContext>;
    updatePlaylist: InContextSdkMethod<Mutation['updatePlaylist'], MutationupdatePlaylistArgs, MeshContext>;
};
export declare type SubscriptionSpotifySdk = {};
export declare type SpotifyContext = {
    ["Spotify"]: {
        Query: QuerySpotifySdk;
        Mutation: MutationSpotifySdk;
        Subscription: SubscriptionSpotifySdk;
    };
};
export declare type MeshContext = SpotifyContext & BaseMeshContext;
import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
export declare const rawConfig: YamlConfig.Config;
export declare function getMeshOptions(): GetMeshOptions;
export declare const documentsInSDL: any[];
export declare function getBuiltMesh(): Promise<MeshInstance>;
export declare function getMeshSDK<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(sdkOptions?: SdkOptions<TGlobalContext, TGlobalRoot>): Promise<{}>;
export interface SdkOptions<TGlobalContext = any, TGlobalRoot = any> {
    globalContext?: TGlobalContext;
    globalRoot?: TGlobalRoot;
    jitOptions?: Partial<CompilerOptions>;
}
export declare function getSdk<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(schema: GraphQLSchema, { globalContext, globalRoot, jitOptions }?: SdkOptions<TGlobalContext, TGlobalRoot>): {};
export declare type Sdk = ReturnType<typeof getSdk>;
