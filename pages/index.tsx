import { useContext, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
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

import { ESocialLinks, creditCards, paypalEmail } from '../_data'
import infoImage from '../public/img/1.jpeg'
import profileAvatar from '../public/lev-avatar.jpg'
import { LocaleContext } from './_app'

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
          <IconButton
            color="secondary"
            size="large"
            href={ESocialLinks.instagram}
            title="Instagram"
          >
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

      <Container component="main" maxWidth="md" sx={{ my: '1em' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography component="h1" fontSize={32} paragraph>
              {t.infoH1}
            </Typography>

            <>
              {t.infoBody.map((line: string, index: number) => (
                <Typography key={index} paragraph>
                  {line}
                </Typography>
              ))}
            </>

            <Card sx={{ flex: 1, flexGrow: 1 }}>
              <CardMedia
                component={() => <Image src={infoImage} alt={t.name} />}
                sx={{ flex: 1 }}
              />
              <CardContent>
                <Typography align="right" color="text.secondary">
                  {t.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" fontSize={24} paragraph>
              {t.paymentDetails}
            </Typography>

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

            <Typography component="h2" fontSize={24} paragraph marginTop="1em">
              {t.socialNetworks}
            </Typography>

            <Typography paragraph>{t.socialNetworksInfo}</Typography>

            <Typography paragraph>
              <Button
                color="secondary"
                href={ESocialLinks.instagram}
                startIcon={<InstagramIcon />}
                variant="outlined"
              >
                My Instagram
              </Button>
            </Typography>

            <Typography paragraph>
              <Button
                color="secondary"
                href={ESocialLinks.instagramMom}
                startIcon={<InstagramIcon />}
                variant="outlined"
              >
                My mom&lsquo;s Instagram
              </Button>
            </Typography>

            <Typography paragraph>
              <Button
                color="secondary"
                href={ESocialLinks.instagramDad}
                startIcon={<InstagramIcon />}
                variant="outlined"
              >
                My dad&lsquo;s Instagram
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container component="footer" maxWidth="md">
        &nbsp;
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a> */}
      </Container>
    </>
  )
}

export default Home
