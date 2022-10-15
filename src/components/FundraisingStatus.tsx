import { FC } from 'react'
import dayjs from 'dayjs'

import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

import {
  fundraisingStartDate,
  fundraisingEndDate,
  fundraisingGoals,
  totalInUAH,
} from 'src/fundraising'
import { useTranslation } from 'src/hooks/useTranslation'

// const todayDate = new Date().toISOString().split('T')[0]
const progressDays = dayjs(fundraisingEndDate).diff(fundraisingStartDate, 'days')
const progressPercent = (totalInUAH / fundraisingGoals.UAH) * 100

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}))

export const FundraisingStatus: FC = () => {
  const t = useTranslation()

  return (
    <BootstrapTooltip title={t.zolgensmaPrice}>
      <Typography color="green" paragraph gutterBottom marginBottom="2em">
        {t.fundraisingTotal}: <strong>{progressPercent.toFixed(1)}%</strong>{' '}
        {t.fundraisingDays(progressDays)}.
        <br />
        <br />
        <LinearProgress color="success" variant="determinate" value={progressPercent} />
        <br />
        {t.fundraisingClosed}
      </Typography>
    </BootstrapTooltip>
  )
}

export default FundraisingStatus
