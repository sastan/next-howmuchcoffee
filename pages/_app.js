import Head from 'next/head'
import Layout from '../components/Layout'
import { tw, setup } from 'twind'
/* import '../css/index.css' */

setup({
  hash: false, // hash all generated class names (default: false)
  theme: {}, // define custom theme values (default: tailwind theme)
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#242331',
        },
        yellow: {
          custom: '#edf060',
        },
        red: {
          custom: '#ef233c',
        },
      },
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
    },
  }, // us ea different dark mode strategy (default: 'media')
})

function MyApp({ Component, pageProps, router }) {
  return (
    <div style={{ WebkitTapHighlightColor: 'transparent' }}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width,viewport-fit=cover"
          />
          <link rel="manifest" href="/site.webmanifest" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="apple-mobile-web-app-title" content="Coffee" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta name="application-name" content="Coffee" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <script async data-api="/_hive" src="/bee.js"></script>
        </Head>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </div>
  )
}

export default MyApp
