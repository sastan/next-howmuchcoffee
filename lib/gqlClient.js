import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://graphql.fauna.com/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`,
  },
})

export default graphQLClient
