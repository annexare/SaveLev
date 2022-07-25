import { FC } from 'react'

import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'

import { fundraisingStartDate, fundraisingGoals, totalInUAH } from 'src/fundraising'
import { useTranslation } from 'src/hooks/useTranslation'

const getDaysSince = (since: Date): number => {
  const ms = new Date().getTime() - since.getTime()
  return Math.trunc(ms / (1000 * 3600 * 24))
}

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

  const daysSince = getDaysSince(fundraisingStartDate)
  const progressPercent = (totalInUAH / fundraisingGoals.UAH) * 100

  return (
    <BootstrapTooltip title={t.zolgensmaPrice}>
      <Typography color="green" paragraph gutterBottom>
        {t.fundraisingTotal}: <strong>{progressPercent.toFixed(1)}%</strong>{' '}
        {t.fundraisingDays(daysSince)}.
        <br />
        {t.thankYou}
        <br />
        <br />
        <LinearProgress color="success" variant="determinate" value={progressPercent} />
      </Typography>
    </BootstrapTooltip>
  )
}
