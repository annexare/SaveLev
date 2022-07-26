import { FC, useState } from 'react'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
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

  const trackCardNumberEvent =
    (card: ICreditCard, isInfo = false) =>
    () => {
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
      <Alert icon={<PaymentIcon />}>
        <AlertTitle>
          {card.currency}
          {card.currency === 'UAH' ? <>&nbsp;🇺🇦</> : null}
        </AlertTitle>
        <Typography onCopy={trackCardNumberEvent(card)}>{formatCreditCard(card.number)}</Typography>
      </Alert>
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
