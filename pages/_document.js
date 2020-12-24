import Document, { Html, Head, Main, NextScript } from 'next/document'

import cx from 'classnames'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    const darkMode = true
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='shortcut icon'
            type='image/png'
            sizes='16x16'
            href='https://nextjs.org/static/favicon/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='https://nextjs.org/static/favicon/favicon-16x16.png'
          />
        </Head>

        <body>
          <div>
            <Main />

            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
