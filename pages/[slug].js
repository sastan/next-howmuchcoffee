import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import { PageHeading, CoffeeList } from '@components'

const fetcher = async (query, slug) =>
  await faundaGQLClient.request(query, { slug })

const User = ({ UserBySlugData }) => {
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

  const data = UserBySlugData
  return (
    <div>
      <PageHeading title={`${data.getPersonBySlug.name} Page`} />

      <CoffeeList data={data.getPersonBySlug.coffees.data} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const UserSlug = params.slug

  const UserBySlugData = await fetcher(
    gql`
      query UserBySlug($slug: String!) {
        getPersonBySlug(slug: $slug) {
          name
          age
          coffees {
            data {
              _id
              _ts
              amount
              notes
              extras
            }
          }
        }
      }
    `,
    UserSlug
  )
  return {
    props: { UserBySlugData },
    revalidate: 3600,
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
