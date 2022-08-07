import { useContext } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import PaymentIcon from '@mui/icons-material/Payment'
import TollIcon from '@mui/icons-material/Toll'

import { IGAItem, trackSelectItemEvent } from 'src/analytics'
import { BaseCssSeo, mainLevPhoto } from 'src/components/BaseCssSeo'
import { BaseFooter } from 'src/components/BaseFooter'
import { CreditCard } from 'src/components/CreditCard'
import { FundraisingStatus } from 'src/components/FundraisingStatus'
import { PayPalButton } from 'src/components/PayPal'
import { SmaInfo } from 'src/components/SmaInfo'
import { TopNavBar } from 'src/components/TopNavBar'
import { FacebookButton } from 'src/components/social/FacebookButton'
import { InstagramButton } from 'src/components/social/InstagramButton'
import { ESocialLinks, creditCards, MONO_JAR, PAYPAL_EMAIL } from 'src/data'

import { LocaleContext } from './_app'

const Home: NextPage = () => {
  const { t } = useContext(LocaleContext)

  const handleCopyPayPal = () => {
    const item: IGAItem = {
      item_id: PAYPAL_EMAIL,
      item_name: `PayPal ${PAYPAL_EMAIL}`,
      item_category: 'paypal',
      currency: 'USD',
    }
    trackSelectItemEvent('paypal', item)
  }

  const handleOpenMonoJar = () => {
    const item: IGAItem = {
      item_id: MONO_JAR,
      item_name: `Mono ${MONO_JAR}`,
      item_category: 'monojar',
      currency: 'UAH',
    }
    trackSelectItemEvent('monojar', item)
  }

  return (
    <>
      <BaseCssSeo />

      <TopNavBar />

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
                component={() => <Image src={mainLevPhoto} alt={t.name} />}
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
              <Grid item xs={12}>
                <FundraisingStatus />
                <SmaInfo />
              </Grid>

              {creditCards.map((card) => (
                <Grid key={card.number} item xs={12}>
                  <CreditCard {...card} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Alert icon={<PaymentIcon />} action={<PayPalButton disabled />} severity="info">
                  <Typography component="span" fontWeight="bold">
                    PayPal
                  </Typography>
                  :
                  <Typography paragraph sx={{ userSelect: 'all' }} onCopy={handleCopyPayPal}>
                    {PAYPAL_EMAIL}
                  </Typography>
                </Alert>
              </Grid>

              <Grid item xs={12}>
                <Alert
                  icon={<PaymentIcon />}
                  action={
                    <Button
                      color="inherit"
                      href={MONO_JAR}
                      size="small"
                      startIcon={<TollIcon />}
                      variant="outlined"
                      onClick={handleOpenMonoJar}
                    >
                      {t.monoDonate}
                    </Button>
                  }
                >
                  <Typography fontWeight="bold">{t.monoBanka}</Typography>
                </Alert>
              </Grid>
            </Grid>

            <Typography component="h2" fontSize={24} paragraph marginTop="1em">
              {t.socialNetworks}
            </Typography>

            <Typography paragraph>{t.socialNetworksInfo}</Typography>

            <InstagramButton href={ESocialLinks.instagram}>
              {t.socialMy}&nbsp;Instagram
            </InstagramButton>

            <FacebookButton href={ESocialLinks.facebook}>{t.socialMy}&nbsp;Facebook</FacebookButton>

            <InstagramButton href={ESocialLinks.instagramMom}>
              {t.socialMom}&nbsp;Instagram
            </InstagramButton>

            <InstagramButton href={ESocialLinks.instagramDad}>
              {t.socialDad}&nbsp;Instagram
            </InstagramButton>

            <Typography component="h2" fontSize={24} paragraph marginTop="1em">
              {t.tvAndNews}
            </Typography>

            <div
              style={{
                position: 'relative',
                height: 0,
                overflow: 'hidden',
                maxWidth: '100%',
                paddingBottom: '56.25%',
              }}
            >
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/R0cEnob-3CE"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>

            <br />

            <Typography paragraph>
              <Button
                endIcon={<OpenInNewIcon />}
                fullWidth
                href="https://www.5.ua/dv/life/284159"
                target="_blank"
                variant="outlined"
              >
                {t.articleAt('5.ua')}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container component="footer" maxWidth="md">
        <BaseFooter />
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
