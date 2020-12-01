import { GraphQLClient, gql, request, setHeader } from 'graphql-request'

const endpoint = 'https://graphql.fauna.com/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`
  }
})

export async function fetcherGQL () {
  const fetcher = query => request('https://api.spacex.land/graphql/', query)

  const data = fetcher(`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
  `)

  return data
}

export async function fetcherPaths () {
  const fetcher = query =>
    request('https://graphql.fauna.com/graphql', query, requestHeaders)

  const requestHeaders = {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY}`
    }
  }
  const data = fetcher(
    `
  person {
        data {
          name
          slug
        }
      }
    }
  `
  )

  return data
}

export async function testGQL () {
  const query = gql`
    {
      person {
        data {
          name
          slug
        }
      }
    }
  `

  const variables = {}

  graphQLClient.request(query, variables).then(data => {
    return data.person.data
  })
}

export async function getPersonNameForSlug () {
  try {
    const query = gql`
      {
        person {
          data {
            name
            slug
          }
        }
      }
    `

    const response = await graphQLClient.request(query)
    const data = JSON.stringify(response, undefined, 2)
    return data
  } catch (error) {
    console.error('Error' + error)
  }
}
