import Head from 'next/head'
import PropTypes from 'prop-types'
import cx from 'classnames'
function PageHeading (props) {
  return (
    <div className='md:flex md:items-center md:justify-between'>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='flex-1 mb-6 min-w-0'>
        <h1
          className={cx(
            'text-2xl font-bold leading-7 mt-4 text-gray-900 dark:text-yellow-custom sm:text-3xl sm:leading-9',
            {
              'text-gray-900 dark:text-yellow-custom underline': props.underline
            }
          )}
        >
          {props.title}
        </h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  )
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
export default PageHeading
