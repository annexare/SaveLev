import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import LanguageIcon from '@mui/icons-material/Language'

import type { LocaleCode } from 'locales'
import { ELocaleNames } from 'src/data'
import { useTranslation } from 'src/hooks/useTranslation'

export const BaseFooter: FC = () => {
  const t = useTranslation()
  const { locale, locales = [] } = useRouter() as { locale: LocaleCode; locales: LocaleCode[] }

  return (
    <Box sx={{ py: '1em', textAlign: 'right' }}>
      <Typography
        paragraph
        color="text.secondary"
        align="right"
        sx={{ display: 'inline-flex', verticalAlign: 'middle' }}
      >
        <LanguageIcon />
        &nbsp;{t.actionLanguage}:
        {locales.map((l, index) => (
          <span key={l}>
            &nbsp;
            {l === locale ? (
              ELocaleNames[l]
            ) : (
              <Link key={l} href={`/${l === 'en' ? '' : l}`} hrefLang={l} locale={false} passHref>
                <MuiLink>{ELocaleNames[l]}</MuiLink>
              </Link>
            )}
            {index < locales.length - 1 ? ',' : null}
          </span>
        ))}
      </Typography>
    </Box>
  )
}
