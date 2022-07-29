import { FC } from 'react'

import Button, { ButtonProps } from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import FacebookIcon from '@mui/icons-material/Facebook'

export const FacebookButton: FC<ButtonProps> = (props) => (
  <Typography paragraph>
    <Button color="primary" fullWidth startIcon={<FacebookIcon />} variant="outlined" {...props} />
  </Typography>
)
