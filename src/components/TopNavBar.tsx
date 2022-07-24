import { useState } from 'react'
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

import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import TranslateIcon from '@mui/icons-material/Translate'

import profileAvatar from 'public/lev-avatar.jpg'
import { ESocialLinks } from 'src/data'

const localeNames: Record<string, string> = {
  en: 'English',
  uk: 'Українська',
}

export const TopNavBar = () => {
  const { locale, locales = [] } = useRouter()
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
        <IconButton
          color="primary"
          disabled
          size="large"
          href={ESocialLinks.telegram}
          title="Telegram"
        >
          <TelegramIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <TranslateIcon />
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
          onClose={handleClose}
        >
          {locales.map((l: string) => (
            <Link key={l} href={`/${l === 'en' ? '' : l}`} hrefLang={l} locale={false} passHref>
              <MenuItem component="a" selected={l === locale} onClick={handleClose}>
                {localeNames[l]}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
