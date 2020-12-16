import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'

import { StackedList, PageHeading } from '@components'

const fetcher = async (query) => await faundaGQLClient.request(query)
const Index = (props) => {
  const { data, isLoading, isError } = useSWR(
    gql`
      query getAllUsers {
        person {
          data {
            name
            age

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
      <PageHeading title="Home Page" subtitle="" />
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <StackedList />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const getAllUsers = await fetcher(gql`
    query getAllUsers {
      person {
        data {
          name
          age

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
