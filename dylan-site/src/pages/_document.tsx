import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="description" content="My personal portfolio website" />
        <meta name="robots" content="noindex,nofollow" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
