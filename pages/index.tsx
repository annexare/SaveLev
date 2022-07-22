import { useState } from 'react'
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import TranslateIcon from '@mui/icons-material/Translate'

import profileAvatar from '../public/lev-avatar.jpg'
import { ESocialLinks } from '../common'

const localeNames: Record<string, string> = {
  en: 'English',
  uk: 'Українська',
}

const LocaleLink = ({ href, hrefLang }: any) => <Link href={href}>{localeNames[hrefLang]}</Link>

const Home: NextPage = (props: any) => {
  const { locale, locales = [] } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <CssBaseline />

      <Head>
        <title>@save.lev.sma</title>
        <meta name="description" content="Save Lev SMA" />
      </Head>

      <AppBar color="transparent" position="sticky">
        <Toolbar>
          <Avatar>
            <Image src={profileAvatar} alt="Lev" layout="fill" />
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            @save.lev.sma
          </Typography>

          <IconButton size="large" color="inherit" href={ESocialLinks.instagram} title="Instagram">
            <InstagramIcon />
          </IconButton>

          <IconButton
            disabled
            size="large"
            color="inherit"
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

      <Container component="main" maxWidth="md">
        <Box>
          <h1>Hi, my name is Lev and I want to live!</h1>

          <p>Unfortunately, I was diagnosed with SMA when I was 8.5 months old.</p>
          <p>But I will find a way to get well.</p>
        </Box>
      </Container>

      {/* <Container component="footer" maxWidth="md">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </Container> */}
    </>
  )
}

export async function getStaticProps(context: NextPageContext) {
  const { locale, locales } = context
  return {
    props: { locale, locales }, // will be passed to the page component as props
  }
}

export default Home
