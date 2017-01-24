export interface SpotifyGraphQLInterface {
  query(requestString: string,
        rootValue?: any,
        contextValue?: any,
        variableValues?: any,
        operationName?: string): any
}

export interface SpotifyClientConfiguration {
  clientId: string
  clientSecret: string
  accessToken: string
  redirectUri?: string
}