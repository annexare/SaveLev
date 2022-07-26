import { FC, useState } from 'react'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'

import PaymentIcon from '@mui/icons-material/Payment'

import type { TItemCategory } from 'src/analytics'
import { IGAItem, trackViewDetailsEvent, trackSelectItemEvent } from 'src/analytics'
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
      const item: IGAItem = {
        item_id: card.number,
        item_name: `${card.currency} ${card.number}`,
        item_category: category,
        currency: card.currency,
      }
      if (isInfo) {
        trackViewDetailsEvent(item)
      }
      trackSelectItemEvent(category, item)
    }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  const handleShowDetails = (card: ICreditCard) => () => {
    setShowDetails(true)
    setTimeout(trackCardNumberEvent(card, true), 0)
  }

  const hasDetails = Array.isArray(card.details) && card.details.length > 0
  const detailsAction = hasDetails ? (
    <Button
      color="inherit"
      size="small"
      sx={{ alignSelf: 'center', whiteSpace: 'nowrap' }}
      variant="outlined"
      onClick={handleShowDetails(card)}
    >
      {t.ibanPaymentDetails}
    </Button>
  ) : undefined

  return (
    <>
      <Alert icon={<PaymentIcon />} action={detailsAction}>
        <AlertTitle>
          {card.currency}
          {card.currency === 'UAH' ? <>&nbsp;🇺🇦</> : null}
        </AlertTitle>
        <Typography sx={{ userSelect: 'all' }} onCopy={trackCardNumberEvent(card)}>
          {formatCreditCard(card.number)}
        </Typography>
      </Alert>
      {showDetails ? (
        <Dialog fullWidth maxWidth="sm" open onClose={handleCloseDetails}>
          <DialogTitle>
            <Icon>
              <PaymentIcon />
            </Icon>{' '}
            {card.currency}: {t.ibanPaymentDetails}
          </DialogTitle>
          <DialogContent dividers>
            {card.details.map((line, index) => (
              <Typography key={index} paragraph>
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
