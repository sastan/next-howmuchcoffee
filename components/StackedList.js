import useSWR from 'swr'
import { gql } from 'graphql-request'
import { faundaGQLClient } from '../utils/faundaGQLClient'
import Link from 'next/link'
import { tw } from 'twind'

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
    <div className={tw`border border-gray-200 dark:border-yellow-custom`}>
      <div className={tw`overflow-hidden bg-white rounded dark:bg-gray-700 `}>
        <ul className={tw`divide-y divide-gray-200 dark:divide-yellow-custom`}>
          {data &&
            data.person.data.map((node) => (
              <li key={node._id}>
                <Link
                  href={node.slug}
                  className={tw`block cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600`}
                >
                  <a>
                    <div className={tw`flex items-center py-4 px-4 sm:px-6`}>
                      <div className={tw`flex flex-1 items-center min-w-0`}>
                        <div className={tw`flex-shrink-0`}>
                          <img
                            className={tw`w-12 h-12 rounded-full`}
                            src={
                              node.avatar ||
                              'https://images.unsplash.com/photo-1534342357876-491359270a66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            }
                            alt={node.name}
                          />
                        </div>
                        <div
                          className={tw`flex-1 px-4 min-w-0 md:grid md:grid-cols-2 md:gap-4`}
                        >
                          <div>
                            <p
                              className={tw`text-sm font-medium text-indigo-600 dark:text-yellow-custom truncate standalone:bg-white`}
                            >
                              {node.name}
                            </p>
                            <p
                              className={tw`flex items-center mt-2 text-sm text-gray-500 dark:text-gray-300`}
                            >
                              Age {node.age}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className={tw`w-5 h-5 text-gray-400 dark:text-yellow-custom`}
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
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default StackedList
