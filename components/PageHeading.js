import Head from 'next/head'
function PageHeading(props) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <Head>
        <title>{props.title}</title>
        <meta name="Description" content={props.title}></meta>
      </Head>
      <div className="flex-1 mb-6 min-w-0">
        <h1 className="text-2xl font-bold leading-7 mt-4 text-gray-900 dark:text-yellow-custom sm:text-3xl sm:leading-9">
          {props.title}
        </h1>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  )
}

export default PageHeading
