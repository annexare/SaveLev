import { createContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import type { LocaleCode, Translation } from 'locales'
import * as locales from 'locales'
import { trackPageView } from 'src/analytics'

interface ILocaleContext {
  t: Translation
  setLocale: (locale: 'en' | 'uk') => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: locales.en,
  setLocale: () => {},
})

function MyApp({ Component, pageProps, router }: AppProps) {
  const { events, locale } = router
  const [t, setT] = useState<Translation>(locales[locale as LocaleCode])
  const setLocale = (l: LocaleCode) => {
    setT(locales[l])
  }

  // GA events
  useEffect(() => {
    events.on('routeChangeComplete', trackPageView)

    return () => {
      events.off('routeChangeComplete', trackPageView)
    }
  }, [events])

  // Update
  useEffect(() => {
    setLocale(locale as LocaleCode)
  }, [locale])

  return (
    <>
      <LocaleContext.Provider value={{ t, setLocale }}>
        <Component {...pageProps} />
      </LocaleContext.Provider>
    </>
  )
}

export default MyApp
