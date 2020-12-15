import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.fauna.com/graphql'

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
  },
})
