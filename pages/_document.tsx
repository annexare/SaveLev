import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { GA_TRACKING_ID } from 'src/analytics'

const GA_DEBUG = process.env.NODE_ENV === 'development' ? 'true' : 'false'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_TRACKING_ID}', { debug_mode: ${GA_DEBUG} });
`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="beforeInteractive"
          async={true}
          defer={false}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
