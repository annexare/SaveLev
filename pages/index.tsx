import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import InstagramIcon from '@mui/icons-material/Instagram'
import PaymentIcon from '@mui/icons-material/Payment'
import TelegramIcon from '@mui/icons-material/Telegram'
import TranslateIcon from '@mui/icons-material/Translate'

import profileAvatar from '../public/lev-avatar.jpg'
import { LocaleContext } from './_app'
import { ESocialLinks, creditCards, paypalEmail } from './_data'

const localeNames: Record<string, string> = {
  en: 'English',
  uk: 'Українська',
}

const Home: NextPage = () => {
  const { locale, locales = [] } = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { t } = useContext(LocaleContext)

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
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Head>

      <AppBar
        color="transparent"
        position="sticky"
        sx={{ '-webkit-backdrop-filter': 'blur(20px)' }}
      >
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
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box>
              <h1>{t.infoH1}</h1>

              <>
                {t.infoBody.map((line: string, index: number) => (
                  <Typography key={index} paragraph>
                    {line}
                  </Typography>
                ))}
              </>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              &nbsp;
              <Grid container spacing={1}>
                {creditCards.map((card) => (
                  <Grid key={card.number} item xs={6} md={12}>
                    <Card elevation={1} sx={{ flex: 1, flexGrow: 1 }}>
                      <CardContent>
                        <Typography color="text.secondary" gutterBottom variant="subtitle2">
                          {card.currency}
                        </Typography>
                        <Typography>{card.number}</Typography>
                      </CardContent>
                      {/* <CardActions>
                  <Button size="small" startIcon={<PaymentIcon />}>{t.ibanPaymentDetails}</Button>
                </CardActions> */}
                    </Card>
                  </Grid>
                ))}

                <Grid item xs={6} md={12}>
                  <Card elevation={2} raised sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography color="text.secondary" gutterBottom variant="subtitle2">
                        PayPal
                      </Typography>
                      <Typography>{paypalEmail}</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={6} md={12}>
                  <Card elevation={2} raised sx={{ flex: 1 }}>
                    <CardContent>
                      <Typography color="text.secondary" gutterBottom variant="subtitle2">
                        {t.monoBanka}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://send.monobank.ua/jar/hbxwPtEkH"
                        size="small"
                        startIcon={<PaymentIcon />}
                      >
                        {t.monoDonate}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
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

export default Home
