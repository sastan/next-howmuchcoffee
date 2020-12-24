function Footer () {
  return (
    <footer className=''>
      <ul className='flex justify-between items-center p-4 mx-auto max-w-4xl text-sm text-gray-700 dark:text-gray-500 md:p-8'>
        <li>
          Created by{' '}
          <a
            href='https://mozart409.space'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold hover:text-gray-300'
          >
            Amadeus Mader
          </a>
        </li>

        <li>
          <a
            href='https://github.com/mozart409/next-howmuchcoffee'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold hover:text-gray-300'
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
