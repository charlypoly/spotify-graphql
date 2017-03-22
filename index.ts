import schema from './lib/schema'
import { graphql, GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolverMapBuilder from './lib/resolvers';
import { spotifyWebAPIClient }  from './lib/client';
import { SpotifyClientConfiguration, SpotifyGraphQLInterface } from './lib/interfaces';

export function getSchema(spotifyClientConfiguration: SpotifyClientConfiguration): GraphQLSchema {
  return makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolverMapBuilder(
      spotifyWebAPIClient(spotifyClientConfiguration)
    ),
  });
}

// Export the main entry function for the library
//  This factory takes a `spotifyClientConfiguration` object as parameter and return a `query` method
export function SpotifyGraphQLClient(spotifyClientConfiguration: SpotifyClientConfiguration): SpotifyGraphQLInterface {
  let executableSchema:GraphQLSchema = getSchema(spotifyClientConfiguration);

  return {
    // This public method wrap the `graphql-js` method
    //  by passing schema in a calls
    //
    // requestString:
    //    A GraphQL language formatted string representing the requested operation.
    // rootValue:
    //    The value provided as the first argument to resolver functions on the top
    //    level type (e.g. the query object type).
    // variableValues:
    //    A mapping of variable name to runtime value to use for all variables
    //    defined in the requestString.
    // operationName:
    //    The name of the operation to use if requestString contains multiple
    //    possible operations. Can be omitted if requestString contains only
    //    one operation.
    query(
      requestString: string,
      rootValue?: any,
      contextValue?: any,
      variableValues?: any,
      operationName?: string
    ): any {
      let graphqlArgs = [executableSchema];
      graphqlArgs = graphqlArgs.concat(Array.from(arguments));

      return graphql.apply(graphql, graphqlArgs);
    }
  }
}
export * from './lib/decorators';
export * from './lib/interfaces';
