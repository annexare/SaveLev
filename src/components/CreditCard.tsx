import { FC } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import PaymentIcon from '@mui/icons-material/Payment'

import { ICreditCard } from 'src/data'
import { useTranslation } from 'src/hooks/useTranslation'

export const CreditCard: FC<ICreditCard> = (card) => {
  const t = useTranslation()

  return (
    <Card elevation={1} sx={{ flex: 1, flexGrow: 1 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom variant="subtitle2">
          {card.currency}
        </Typography>
        <Typography>{card.number}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<PaymentIcon />} sx={{ textAlign: 'left' }}>
          {t.ibanPaymentDetails}
        </Button>
      </CardActions>
    </Card>
  )
}
