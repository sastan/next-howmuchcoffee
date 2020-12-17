import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from '@components'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-4xl md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <img
            src="https://nextjs.org/static/favicon/apple-touch-icon.png"
            className="mr-3 w-10 text-gray-800 rounded"
          />

          <Link href="/">
            <a className="text-xl font-bold text-black">
              Next.js Starter Tailwind
            </a>
          </Link>
        </div>

        <button
          className="flex items-center py-2 px-3 text-gray-800 rounded border border-gray-800 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
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
                <a className="block text-gray-800">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
          <div className="mt-3 md:mt-0 md:ml-6">
            <ThemeToggle />
          </div>
        </ul>
      </div>
    </header>
  )
}

export default Header
