import { albumResolvers } from './resolvers/album';
import { artistResolvers } from './resolvers/artist';
import { playerResolvers } from './resolvers/player';
import { playlistResolvers } from './resolvers/playlist';
import { privateUserResolvers } from './resolvers/privateUser';
import { publicUserResolvers } from './resolvers/publicUser';
import { queries } from './resolvers/queries';
import { trackResolvers } from './resolvers/track';

export default (spotifyApiClient: any): any => {
  return  {
    Query: queries(spotifyApiClient),
    // Resolvers
    Track: trackResolvers(spotifyApiClient),
    Artist: artistResolvers(spotifyApiClient),
    Album: albumResolvers(spotifyApiClient),
    Playlist: playlistResolvers(spotifyApiClient),
    PrivateUser: privateUserResolvers(spotifyApiClient),
    PublicUser: publicUserResolvers(spotifyApiClient),
    Player: playerResolvers(spotifyApiClient),
  };

};