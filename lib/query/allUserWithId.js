import { GraphQLClient, gql } from 'graphql-request'

export default async function allUserWithId () {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`
    }
  })

  const query = gql`
    query PersonBySlug {
      person {
        data {
          id: _id
        }
      }
    }
  `

  const data = await graphQLClient.request(query)

  return data
}
