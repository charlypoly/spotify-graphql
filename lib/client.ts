var SpotifyWebApi = require('spotify-web-api-node');

// Expose a configured SpotifyWebApi client
export function spotifyWebAPIClient(configuration): any {
  let spotifyApi: any = new SpotifyWebApi({
    clientId : configuration.clientId,
    clientSecret : configuration.clientSecret,
    redirectUri : configuration.redirectUri
  });

  spotifyApi.setAccessToken(configuration.accessToken);

  return spotifyApi;
};