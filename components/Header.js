import Link from 'next/link'
import { useState } from 'react'
import { tw } from 'twind'
function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className={tw`w-full bg-gray-200 dark:bg-gray-custom`}>
      <div
        className={tw`flex flex-wrap justify-between items-center p-4 mx-auto max-w-4xl  standalone:fixed standalone:mt-6 md:flex-no-wrap md:p-8 `}
      >
        <div className={tw`flex items-center`}>
          <img
            src="logo1.svg"
            alt="logo"
            className={tw`p-2 mr-3 w-10 bg-gray-800 rounded`}
          />

          <Link href="/">
            <a
              className={tw`text-xl font-light text-gray-600 dark:text-gray-300`}
            >
              How Much Coffee?
            </a>
          </Link>
        </div>

        {/* <button
          className='flex items-center py-2 px-3 rounded border border-gray-800 text-yellow-custom md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button> */}

        {/* <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' },
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-yellow-custom">
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </header>
  )
}

export default Header
