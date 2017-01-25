import { queries } from './resolvers/queries';
import { trackResolvers } from './resolvers/track';
import { artistResolvers } from './resolvers/artist';
import { playlistResolvers } from './resolvers/playlist';
import { albumResolvers } from './resolvers/album';
import { privateUserResolvers } from './resolvers/privateUser';
import { publicUserResolvers } from './resolvers/publicUser';

export default (spotifyApiClient: any): any => {
  return  {
    Query: queries(spotifyApiClient),
    // resolvers
    Track: trackResolvers(spotifyApiClient),
    Artist: artistResolvers(spotifyApiClient),
    Album: albumResolvers(spotifyApiClient),
    Playlist: playlistResolvers(spotifyApiClient),
    PrivateUser: privateUserResolvers(spotifyApiClient),
    PublicUser: publicUserResolvers(spotifyApiClient)
  };

};