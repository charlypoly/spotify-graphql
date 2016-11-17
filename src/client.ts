var SpotifyWebApi = require('spotify-web-api-node');

export default (token: String): any => {
  let spotifyApi: any = new SpotifyWebApi({
    clientId : 'xxx',
    clientSecret : 'xxx',
    redirectUri : 'http://expander.dev'
  });

  spotifyApi.setAccessToken(token);

  return spotifyApi;
};