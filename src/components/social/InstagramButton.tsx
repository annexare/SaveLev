import { FC } from 'react'

import Button, { ButtonProps } from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import InstagramIcon from '@mui/icons-material/Instagram'

export const InstagramButton: FC<ButtonProps> = (props) => (
  <Typography paragraph>
    <Button color="secondary" startIcon={<InstagramIcon />} variant="outlined" {...props} />
  </Typography>
)
