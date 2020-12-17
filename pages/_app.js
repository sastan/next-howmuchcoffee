import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import '../css/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
