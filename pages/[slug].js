import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import { StackedList, PageHeading, CoffeList } from '@components'

const fetcher = async (query, slug) =>
  await faundaGQLClient.request(query, { slug })

const User = ({ UserBySlug }) => {
  /*   const UserBySlug = gql`
    query UserBySlug($slug: String!) {
      getPersonBySlug(slug: $slug) {
        name
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

  const { data, isLoading, isError } = useSWR([UserBySlug, UserSlug], fetcher) */
  /*   const UserData = data.getPersonBySlug */
  /*  if (isError) return <div>Error {isError}</div>
  if (isLoading) return <div>Loading ...</div> */

  const data = UserBySlug
  return (
    <div>
      <PageHeading title={`${data.getPersonBySlug.name} Page`} />

      <p>
        Name <span>{data.getPersonBySlug.name}</span>
      </p>
      <CoffeList data={data.getPersonBySlug} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const UserSlug = params.slug
  console.log('Params ' + params.slug)
  const UserBySlug = await fetcher(
    gql`
      query UserBySlug($slug: String!) {
        getPersonBySlug(slug: $slug) {
          name
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
    UserSlug
  )
  return {
    props: { UserBySlug },
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
