import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
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
          <script
            type="module"
            src="https://cdn.skypack.dev/twind/shim"
          ></script>
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
