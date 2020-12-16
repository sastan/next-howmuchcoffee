import Layout from 'components/Layout'
import Head from 'next/head'

import '../css/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
