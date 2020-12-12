import graphQLClient from '@gqlClient'
import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
const fetchAllUsers = async () => {
  const query = gql`
    query AllUsers {
      person {
        data {
          _id
          name
          slug
          email
          age
          avatar
        }
      }
    }
  `

  const response = await graphQLClient.request(query)
  const data = response.person
  return data
}

const useAllUsers = () => {
  return useQuery('AllUsers', fetchAllUsers)
}

export { fetchAllUsers, useAllUsers }
