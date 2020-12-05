import '../css/index.css'
import { createClient, Provider, defaultExchanges } from 'urql'
import client from '@client'
import Head from 'next/head'
function MyApp ({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
