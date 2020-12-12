import graphQLClient from '@gqlClient'
import { gql } from 'graphql-request'

export default async function UserCoffees(UserId) {
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
