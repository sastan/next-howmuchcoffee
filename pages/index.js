import useSWR from 'swr'
import { gql } from 'graphql-request'
import { graphQLClient } from '../utils/graphql-client'

import { StackedList, PageHeading } from '@components'

const fetcher = async (query) => await graphQLClient.request(query)
const Index = (props) => {
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
    fetcher,
    { initialData: props.getAllUsers }
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

export async function getStaticProps({ params }) {
  const getAllUsers = await fetcher(gql`
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
  `)
  return {
    props: { getAllUsers },
  }
}

export default Index
