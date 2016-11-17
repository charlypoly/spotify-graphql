import schema from './schema'
import client  from './client'
import resolverMapBuilder from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql, GraphQLSchema } from 'graphql';

export default (token: string): any => {
  let executableSchema:GraphQLSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolverMapBuilder(
      client(token)
    ),
  });

  return {
    query(...args) {
      let graphqlArgs = [executableSchema];
      graphqlArgs = graphqlArgs.concat(args);

      return graphql.apply(graphql, graphqlArgs);
    }
  }
}