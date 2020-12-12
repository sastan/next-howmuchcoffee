import graphQLClient from '@gqlClient'
import { gql } from 'graphql-request'
export default async function UsersID() {
  const query = gql`
    query PersonBySlug {
      person {
        data {
          id: _id
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = response.person
  return data
}
