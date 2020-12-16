import React from 'react'

export default function CoffeList () {
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        <li className='col-span-1 bg-white rounded-lg divide-y divide-gray-200 shadow'>
          <div className='flex justify-between items-center p-6 space-x-6 w-full'>
            <div className='flex-1 truncate'>
              <div className='flex items-center space-x-3'>
                <h3 className='text-sm font-medium text-gray-900 truncate'>
                  Jane Cooper
                </h3>
                <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                  Admin
                </span>
              </div>
              <p className='mt-1 text-sm text-gray-500 truncate'>
                Regional Paradigm Technician
              </p>
            </div>
            <img
              className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60'
              alt=''
            />
          </div>
          <div>
            <div className='flex -mt-px divide-x divide-gray-200'>
              <div className='flex flex-1 w-0'>
                <a
                  href='#'
                  className='inline-flex relative flex-1 justify-center items-center py-4 -mr-px w-0 text-sm font-medium text-gray-700 rounded-bl-lg border border-transparent hover:text-gray-500'
                >
                  {/* <!-- Heroicon name: mail --> */}
                  <svg
                    className='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <span className='ml-3'>Email</span>
                </a>
              </div>
              <div className='flex flex-1 -ml-px w-0'>
                <a
                  href='#'
                  className='inline-flex relative flex-1 justify-center items-center py-4 w-0 text-sm font-medium text-gray-700 rounded-br-lg border border-transparent hover:text-gray-500'
                >
                  {/* <!-- Heroicon name: phone --> */}
                  <svg
                    className='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <span className='ml-3'>Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
