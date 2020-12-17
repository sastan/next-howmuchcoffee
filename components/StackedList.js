import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import { fromUnixTime } from 'date-fns'

const fetcher = async (query) => await faundaGQLClient.request(query)

const getAllUsers = gql`
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
`

const StackedList = ({ getAllUsersData }) => {
  const { data, isLoading, isError } = useSWR(getAllUsers, fetcher, {
    initialData: getAllUsersData,
  })
  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>failed to load</div>

  return (
    <div className="border-gray-200 dark:border-yellow-custom border">
      <div className="overflow-hidden bg-white dark:bg-gray-700  rounded">
        <ul className="divide-y divide-gray-200 dark:divide-yellow-custom">
          {data &&
            data.person.data.map((node) => (
              <li key={node._id}>
                <a
                  href={node.slug}
                  className="block hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center py-4 px-4 sm:px-6">
                    <div className="flex flex-1 items-center min-w-0">
                      <div className="flex-shrink-0">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={
                            node.avatar ||
                            'https://images.unsplash.com/photo-1534342357876-491359270a66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          }
                          alt={node.name}
                        />
                      </div>
                      <div className="flex-1 px-4 min-w-0 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-indigo-600 dark:text-yellow-custom truncate">
                            {node.name}
                          </p>
                          <p className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300">
                            Age {node.age}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="w-5 h-5 text-gray-400 dark:text-yellow-custom"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const getAllUsersData = await fetcher(getAllUsers)
  return {
    props: { getAllUsersData },
    revalidate: 1,
  }
}

export default StackedList
