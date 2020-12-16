import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import { StackedList, PageHeading } from '@components'
const fetcher = async (query) => await faundaGQLClient.request(query)
const User = ({ UserData }) => {
  const { data, isLoading, isError } = useSWR(
    gql`
      query UserById($id: ID!) {
        findPersonByID(id: $id) {
          name
          email
          age
          coffees {
            data {
              _id
              amount
              notes
            }
          }
        }
      }
    `,
    fetcher
  )
  return (
    <div>
      <PageHeading title="Userpage" />

      {/* <p>
        Email <span>{UserData.email}</span>
      </p>
      <p>
        Age <span>{UserData.age}</span>
      </p> */}
    </div>
  )
}

export async function getStaticProps({ params }) {
  /*   const UserById = await fetcher(gql`
    query UserById($id: ID!) {
      findPersonByID(id: $id) {
        name
        email
        age
        coffees {
          data {
            _id
            amount
            notes
          }
        }
      }
    }
  `) */
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  const allUsersPaths = await fetcher(gql`
    query getAllUsersPaths {
      person {
        data {
          slug
        }
      }
    }
  `)
  return {
    paths: allUsersPaths.person.data.map((node) => `/${node.slug}`),
    fallback: true,
  }
}

export default User
