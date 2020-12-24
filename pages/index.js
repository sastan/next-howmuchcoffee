import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'

import { StackedList, PageHeading } from '@components'

const fetcher = async query => await faundaGQLClient.request(query)
const Index = ({ getAllUsersData }) => {
  return (
    <div>
      <PageHeading title='Home Page' subtitle='' />
      <div className='overflow-hidden bg-white shadow sm:rounded-md'>
        <StackedList getAllUsersData={getAllUsersData} />
      </div>
    </div>
  )
}

export async function getStaticProps () {
  const getAllUsersData = await fetcher(gql`
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
    props: { getAllUsersData },
    revalidate: 3600
  }
}

export default Index
