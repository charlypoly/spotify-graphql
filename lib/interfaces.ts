// interface for the main methods exposed by the library
export interface SpotifyGraphQLInterface {
  query(requestString: string,
        rootValue?: any,
        contextValue?: any,
        variableValues?: any,
        operationName?: string): any
}

// interface for the mandatory configuration Object used
//  by the library
export interface SpotifyClientConfiguration {
  clientId: string
  clientSecret: string
  accessToken: string
  redirectUri?: string
}