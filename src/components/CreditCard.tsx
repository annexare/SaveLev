import { FC, useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'

import PaymentIcon from '@mui/icons-material/Payment'

import type { TItemCategory } from 'src/analytics'
import { trackSelectEvent } from 'src/analytics'
import { ICreditCard } from 'src/data'
import { formatCreditCard } from 'src/utils'
import { useTranslation } from 'src/hooks/useTranslation'

export const CreditCard: FC<ICreditCard> = (card) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const t = useTranslation()

  const trackCardNumberEvent = (card: ICreditCard, isInfo = false) => () => {
    const category: TItemCategory = isInfo ? 'cardinfo' : 'card'
    trackSelectEvent(category, {
      item_id: card.number,
      item_name: `${card.currency} ${card.number}`,
      item_category: category,
      currency: card.currency,
    })
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  const handleShowDetails = (card: ICreditCard) => () => {
    setShowDetails(true)
    trackCardNumberEvent(card, true)
  }

  const hasDetails = Array.isArray(card.details) && card.details.length > 0

  return (
    <>
      <Card elevation={1} sx={{ flex: 1, flexGrow: 1 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom variant="subtitle2">
            {card.currency}
            {card.currency === 'UAH' ? <>&nbsp;🇺🇦</> : null}
          </Typography>
          <Typography onCopy={trackCardNumberEvent(card)}>
            {formatCreditCard(card.number)}
          </Typography>
        </CardContent>
        {hasDetails ? (
          <CardActions>
            <Button
              size="small"
              startIcon={<PaymentIcon />}
              sx={{ textAlign: 'left' }}
              onClick={handleShowDetails(card)}
            >
              {t.ibanPaymentDetails}
            </Button>
          </CardActions>
        ) : null}
      </Card>
      {showDetails ? (
        <Dialog fullWidth maxWidth="sm" open onClose={handleCloseDetails}>
          <DialogTitle>
            {card.currency}: {t.ibanPaymentDetails}
          </DialogTitle>
          <DialogContent>
            {card.details.map((line, index) => (
              <Typography key={index} paragraph fontSize=".8em">
                {line}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetails}>{t.actionClose}</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  )
}
