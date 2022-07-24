import { FC } from 'react'
import Script from 'next/script'

export const BaseScripts: FC = () => (
  <>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BR5JBVCH9L');
        `}
    </Script>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-BR5JBVCH9L"
      strategy="afterInteractive"
    />
  </>
)
