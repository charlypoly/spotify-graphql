var SpotifyWebApi = require('spotify-web-api-node');

// Expose a configured SpotifyWebApi client
export default {
  create(configuration): any {

    let spotifyApi: any = new SpotifyWebApi({
      clientId : configuration.clientId,
      clientSecret : configuration.clientSecret,
      redirectUri : configuration.redirectUri
    });

    spotifyApi.setAccessToken(configuration.accessToken);

    return spotifyApi;
  }
};