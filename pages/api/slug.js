import { GraphQLClient, gql } from 'graphql-request'

export default async (req, res) => {
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
          slug
          _id
        }
      }
    }
  `

  const data = await graphQLClient.request(query)

  res.status(200).json({ data })
}
