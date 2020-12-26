import { setup } from 'twind'
import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server'
import twindConfig from '../twind.config'
import Document, { Html, Head, Main, NextScript } from 'next/document'
const sheet = asyncVirtualSheet()

setup({ ...twindConfig, sheet })
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    sheet.reset()
    const initialProps = await Document.getInitialProps(ctx)

    const { id, textContent } = getStyleTagProperties(sheet)

    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    }

    return {
      ...initialProps,
      styles: [
        ...initialProps.styles,
        React.createElement('style', styleProps),
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
            href="https://nextjs.org/static/favicon/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://nextjs.org/static/favicon/favicon-16x16.png"
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
