import { GraphQLClient, gql } from 'graphql-request'

export default async function userWithCoffee (UserId) {
  const endpoint = 'https://graphql.fauna.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`
    }
  })

  const query = gql`
    query findPersonById($id: ID!) {
      findPersonByID(id: $id) {
        name
        email
        age
        _id
        avatar
        coffees {
          data {
            _id
            amount
            notes
          }
        }
      }
    }
  `

  const response = await graphQLClient.request(query, { id: UserId })
  const data = response.findPersonByID
  return data
}
