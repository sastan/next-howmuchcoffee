import Head from 'next/head'
import { ReactQueryCacheProvider } from 'react-query'

import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query-devtools'

import '../css/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
