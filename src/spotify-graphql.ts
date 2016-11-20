import schema from './schema'
import spotifyWebAPIClient  from './client'
import resolverMapBuilder from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql, GraphQLSchema } from 'graphql';

export default {
  create(spotifyClientConfiguration: any): any {
    let executableSchema:GraphQLSchema = makeExecutableSchema({
      typeDefs: schema,
      resolvers: resolverMapBuilder(
        spotifyWebAPIClient.create(spotifyClientConfiguration)
      ),
    });

    return {
      query(...args): any {
        let graphqlArgs = [executableSchema];
        graphqlArgs = graphqlArgs.concat(args);

        return graphql.apply(graphql, graphqlArgs);
      }
    }
  }
}