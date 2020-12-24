import Head from 'next/head'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

import '../css/index.css'

function MyApp ({ Component, pageProps, router }) {
  return (
    <div style={{ WebkitTapHighlightColor: 'transparent' }}>
      <Layout>
        <ThemeProvider attribute='class'>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width,viewport-fit=cover, user-scalable=no'
            />
            <link rel='manifest' href='/site.webmanifest' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
            <link
              rel='mask-icon'
              href='/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <meta name='apple-mobile-web-app-title' content='Coffee' />
            <meta
              name='apple-mobile-web-app-status-bar-style'
              content='black-translucent'
            />

            <meta name='application-name' content='Coffee' />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />

            <script async data-api='/_hive' src='/bee.js'></script>
          </Head>
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </Layout>
    </div>
  )
}

export default MyApp
