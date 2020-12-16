import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import { StackedList, PageHeading } from '@components'

const fetcher = async (query, slug) =>
  await faundaGQLClient.request(query, { slug })

const User = ({ UserSlug }) => {
  /* const UserSlug = 'amadeus' */
  const UserBySlug = gql`
    query UserBySlug($slug: String!) {
      getPersonBySlug(slug: $slug) {
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
  `
  const UserID = '283193827121955335'
  const UserById = gql`
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
  `
  const { data, isLoading, isError } = useSWR([UserBySlug, UserSlug], fetcher)
  const UserData = data.getPersonBySlug
  return (
    <div>
      <PageHeading title="Userpage" />
      {console.log(UserData)}
      {console.log('Error ' + isError)}
      <p>
        Email <span>{UserData.email}</span>
      </p>
      <p>
        Age <span>{UserData.age}</span>
      </p>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const UserSlug = params.slug
  console.log('Params ' + params)
  /* const UserBySlug = await fetcher(gql`
    query UserBySlug($slug: String!) {
      getPersonBySlug(slug: $slug) {
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
    },
    UserSlug
  `) */
  return {
    props: { UserSlug },
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
    fallback: false,
  }
}

export default User
