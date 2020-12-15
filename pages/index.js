import useSWR from 'swr'
import { gql } from 'graphql-request'
import { graphQLClient } from '../utils/graphql-client'

import { StackedList, PageHeading } from '@components'

const fetcher = async (query) => await graphQLClient.request(query)
const Index = () => {
  const { data, isLoading, isError } = useSWR(
    gql`
      query getAllUsers {
        person {
          data {
            name
            age
            email
            slug
            _id
          }
        }
      }
    `,
    fetcher
  )
  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>failed to load</div>
  return (
    <div>
      <PageHeading title="Home Page" subtitle="Test" />
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <StackedList />
      </div>
    </div>
  )
}

export default Index
