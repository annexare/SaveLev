import { FC } from 'react'
import Image from 'next/image'

import Button, { ButtonProps } from '@mui/material/Button'

import paypalIconPath from 'src/assets/paypal.svg'
import { PAYPAL_DONATE_URL } from 'src/data'

export const PayPalButton: FC<ButtonProps> = (props) => (
  <Button
    href={PAYPAL_DONATE_URL}
    sx={{ alignSelf: 'center', backgroundColor: 'rgb(255, 196, 57)' }}
    {...props}
  >
    <Image src={paypalIconPath} alt="PayPal" />
  </Button>
)
