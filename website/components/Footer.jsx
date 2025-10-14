import styles from 'website/styles/Footer.module.css'
import { ScrollContainer } from './ScrollContainer'
import { IconButton } from '@mui/material'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useMemo, useState } from 'react'
import { useTargetItems } from '../pages/Home/useTargetItems'

export const Footer = ({ config, scrollContainer, ready, atStartOrFinish }) => {
  // control targets to pass to view component
  const [disableReadMoreControl, setDisableReadMoreControl] = useState(true)

  const controlTargets = useMemo(
    () => ({
      setDisableReadMoreControl,
    }),
    [],
  )

  useTargetItems(controlTargets, 'controls')
  // viewport width in pixels
  const { width } = useResizeEvent()

  return (
    <div className={`${styles.footer}`}>
      <ScrollContainer
        scrollContainer={scrollContainer}
        ready={ready}
        config={config}
        atStartOrFinish={atStartOrFinish}
      />
      <div className={`${styles.inner}`}>
        <div
          className={`${styles.controls}`}
          style={{ pointerEvents: atStartOrFinish.either ? 'none' : 'auto' }}
        >
          <IconButton
            aria-label='fingerprint'
            edge='start'
            sx={{
              color: 'common.white',
              fontSize: width > 600 ? 24 : 20,
              padding: width > 400 ? 1 : 0.75,
            }}
          >
            <KeyboardDoubleArrowLeftIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            disabled={disableReadMoreControl}
            aria-label='fingerprint'
            sx={{
              color: 'common.white',
              fontSize: width > 600 ? 19 : 20,
              padding: width > 400 ? 1 : 0.75,
            }}
          >
            <LaunchOutlinedIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            aria-label='fingerprint'
            edge='end'
            sx={{
              color: 'common.white',
              fontSize: width > 600 ? 24 : 20,
              padding: width > 400 ? 1 : 0.75,
            }}
          >
            <KeyboardDoubleArrowRightIcon fontSize='inherit' />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
