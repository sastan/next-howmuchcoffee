import Head from 'next/head'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

import '../css/index.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <ThemeProvider attribute="class">
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <script async data-api="/_hive" src="/bee.js"></script>
            </Head>
            <Component {...pageProps} key={router.route} />
          </ThemeProvider>
        </AnimatePresence>
      </Layout>
    </div>
  )
}

export default MyApp
