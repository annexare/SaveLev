import { useContext } from 'react'

import { LocaleContext } from 'pages/_app'

export const useTranslation = () => {
  const { t } = useContext(LocaleContext)

  return t
}
