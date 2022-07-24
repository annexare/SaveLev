import { FC } from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import CssBaseline from '@mui/material/CssBaseline'

import infoImage from 'public/img/1.jpeg'
import { ESocialLinks } from 'src/data'
import { useTranslation } from 'src/hooks/useTranslation'

export const BaseCssSeo: FC = () => {
  const t = useTranslation()

  return (
    <>
      <CssBaseline />

      <NextSeo
        title={t.title}
        description={t.description}
        openGraph={{
          images: [
            {
              url: infoImage.src,
              width: infoImage.width,
              height: infoImage.height,
              alt: t.name,
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />

      <SocialProfileJsonLd
        type="Person"
        name={t.name}
        url="https://save-lev.com"
        sameAs={[ESocialLinks.instagram]}
      />
    </>
  )
}
