import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'

import type { LocaleCode } from 'locales'
import profileAvatar from 'public/lev-avatar.png'
import { ELocaleNames, ESocialLinks } from 'src/data'
import { useTranslation } from 'src/hooks/useTranslation'

export const TopNavBar: FC = () => {
  const { locale, locales = [] } = useRouter() as { locale: LocaleCode; locales: LocaleCode[] }
  const t = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      color="transparent"
      position="sticky"
      sx={{ backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.7)' }}
    >
      <Toolbar>
        <Avatar>
          <Image src={profileAvatar} alt="Lev" layout="fill" />
        </Avatar>
        &nbsp;
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          @save.lev.sma
        </Typography>
        <IconButton color="secondary" size="large" href={ESocialLinks.instagram} title="Instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary" size="large" href={ESocialLinks.facebook} title="Facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label={t.actionLanguage}
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          size="large"
          title={t.actionLanguage}
          onClick={handleMenu}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          MenuListProps={{
            // @ts-ignore
            component: 'nav',
          }}
          id="menu-locale"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          title={t.actionLanguage}
          onClose={handleClose}
        >
          {locales.map((l) => (
            <Link key={l} href={`/${l === 'en' ? '' : l}`} hrefLang={l} locale={false} passHref>
              <MenuItem component="a" selected={l === locale} onClick={handleClose}>
                {ELocaleNames[l]}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
