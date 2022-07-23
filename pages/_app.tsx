import { createContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

import * as locales from '../locales'

interface ILocaleContext {
  t: locales.Translation
  setLocale: (locale: 'en' | 'uk') => void
}

export const LocaleContext = createContext<ILocaleContext>({
  t: locales.en,
  setLocale: () => {},
})

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale } = router
  const [t, setT] = useState<locales.Translation>(locales[locale as locales.LocaleCode])
  const setLocale = (l: 'en' | 'uk') => {
    setT(locales[l])
  }

  useEffect(() => {
    setLocale(router.locale as locales.LocaleCode)
  }, [router.locale])

  return (
    <LocaleContext.Provider value={{ t, setLocale }}>
      <Component {...pageProps} />
    </LocaleContext.Provider>
  )
}

export default MyApp
