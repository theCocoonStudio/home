import styles from 'website/styles/Footer.module.css'
import { ScrollContainer } from './ScrollContainer'
import { IconButton } from '@mui/material'
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTargetItems } from '../pages/Home/useTargetItems'
import { useScroll } from 'src/hooks'
import { useSettings } from 'website/pages/Home/useSettings'

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

  // next/prev callbacks
  const { focusFactor } = useSettings()

  const {
    data: {
      content: { items },
    },
  } = config

  const ranges = useMemo(() => {
    const _ranges = []
    for (let i = 0; i < items.length; i++) {
      const start = i * (1 / items.length)
      const fullLength = 1 / items.length
      const animationLength = fullLength * ((1 - focusFactor) / 2)
      const focusThreshold = start + animationLength
      _ranges[i] = {
        threshold: focusThreshold,
        target: start + 0.5 * fullLength,
      }
    }
    return _ranges
  }, [focusFactor, items])

  const { getOffset, scrollTo } = useScroll(scrollContainer)

  const next = useCallback(() => {
    const offset = getOffset()

    let activeTarget = -1
    let index = 0

    while (index < ranges.length && activeTarget < 0) {
      const { threshold, target } = ranges[index++]
      if (offset < threshold) {
        activeTarget = target
      }
    }
    if (activeTarget < 0) {
      activeTarget = ranges[0].target
    }
    scrollTo(activeTarget)
  }, [getOffset, ranges, scrollTo])

  const prev = useCallback(() => {
    const offset = getOffset()

    let activeTarget = -1
    let index = ranges.length - 1

    while (index >= 0 && activeTarget < 0) {
      const { threshold } = ranges[index--]
      if (offset >= threshold) {
        activeTarget = ranges[index < 0 ? ranges.length - 1 : index].target
      }
    }
    if (activeTarget < 0) {
      activeTarget = ranges[ranges.length - 1].target
    }

    scrollTo(activeTarget)
  }, [getOffset, ranges, scrollTo])

  // next/prev key controls
  const handleDirectionKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'Left') {
        prev()
      } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        next()
      }
    },
    [next, prev],
  )
  useEffect(() => {
    addEventListener('keydown', handleDirectionKeyDown)
    return () => {
      removeEventListener('keydown', handleDirectionKeyDown)
    }
  }, [handleDirectionKeyDown])
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
          style={{
            pointerEvents: atStartOrFinish.either ? 'none' : 'auto',
            opacity: !ready ? 0 : 1,
          }}
        >
          <IconButton
            onClick={prev}
            aria-label='previous item'
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
            aria-label='read more'
            sx={{
              color: 'common.white',
              fontSize: width > 600 ? 18 : 15,
              padding: width > 400 ? 1 : 0.75,
            }}
          >
            <LaunchOutlinedIcon fontSize='inherit' />
          </IconButton>
          <IconButton
            onClick={next}
            aria-label='next item'
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
