import { FC, SyntheticEvent, useRef, useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/InfoOutlined'

import { useTranslation } from 'src/hooks/useTranslation'

enum EPanels {
  info1 = 'panel1',
  info2 = 'panel2',
}

export const SmaInfo: FC = () => {
  const t = useTranslation()
  const topEl = useRef<HTMLDivElement | null>(null)
  const [expanded, setExpanded] = useState<EPanels | false>(false)

  const handleChange = (panel: EPanels) => (event: SyntheticEvent, isExpanded: boolean) => {
    const next = isExpanded ? panel : false

    if (expanded && next) {
      setTimeout(() => {
        if (topEl?.current) {
          topEl.current.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    setExpanded(next)
  }

  return (
    <>
      <Alert ref={topEl} severity="info">
        {t.infoGoal}
      </Alert>
      <Accordion expanded={expanded === EPanels.info1} onChange={handleChange(EPanels.info1)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sma-info-1-content"
          id="sma-info-1-header"
        >
          <InfoIcon color="info" sx={{ marginRight: '.5em' }} />
          <Typography>{t.infoSMA1Title}</Typography>
        </AccordionSummary>
        <AccordionDetails id="sma-info-1-content">
          {t.infoSMA1.map((line: string, i: number) => (
            <Typography key={i} paragraph>
              {line}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === EPanels.info2} onChange={handleChange(EPanels.info2)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sma-info-2-content"
          id="sma-info-2-header"
        >
          <InfoIcon color="info" sx={{ marginRight: '.5em' }} />
          <Typography>{t.infoSMA2Title}</Typography>
        </AccordionSummary>
        <AccordionDetails id="sma-info-2-content">
          {t.infoSMA2.map((line: string, i: number) => (
            <Typography key={i} paragraph>
              {line}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  )
}
