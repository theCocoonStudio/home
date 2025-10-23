import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useSettings } from 'website/pages/Home/useSettings'
import { MenuTitle } from './MenuTitle'
import { MenuSwitch } from './MenuSwitch'
import { MenuSlider } from './MenuSlider'
import { MenuButton } from './MenuButton'
import { MenuContainer } from './MenuContainer'

export const HomeSettings = ({
  /* config, */
  setScrollDistanceFactor,
}) => {
  const {
    colors: { white, black },
  } = useTheme()

  const [performanceAnchor, setPerformanceAnchor] = useState(null)
  const [scrollAnchor, setScrollAnchor] = useState(null)

  const onPerfPopoverClick = useCallback(
    (e) => {
      if (!performanceAnchor) {
        setPerformanceAnchor(e.target)
      }
    },
    [performanceAnchor],
  )
  const onPerfPopoverClose = useCallback(() => {
    if (performanceAnchor) {
      setPerformanceAnchor(null)
    }
  }, [performanceAnchor])

  const onScrollPopoverClose = useCallback(
    (e) => {
      if (!scrollAnchor) {
        setScrollAnchor(e.target)
      }
    },
    [scrollAnchor],
  )
  const onScrollClickAwayClick = useCallback(() => {
    if (scrollAnchor) {
      setScrollAnchor(null)
    }
  }, [scrollAnchor])

  const {
    original,
    resetSettings,
    auto,
    setAuto,
    resolution,
    setResolution,
    frames,
    setFrames,
    mapSize,
    setMapsize,
    focusFactor,
    setFocusFactor,
    scrollDistance,
    setScrollDistance,
    defaultSettings,
  } = useSettings()

  const labelStyles = useMemo(
    () => ({
      autoThrottle: {
        color: auto ? black : white,
        backgroundColor: auto ? white : black,
      },
      resolution: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
      frames: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
      mapsize: {
        color: !auto ? black : white,
        backgroundColor: !auto ? white : black,
      },
    }),
    [black, auto, white],
  )

  useEffect(() => {
    /* setScrollDistanceFactor(scrollDistance) */
  }, [scrollDistance, setScrollDistanceFactor])

  return (
    <MenuContainer>
      <MenuTitle
        open={performanceAnchor}
        anchorEl={performanceAnchor}
        onPopoverClick={onPerfPopoverClick}
        onClickAwayClick={onPerfPopoverClose}
        title={'Performance'}
      >
        Graphics quality and frame rate (fps) have an inverse relationship. If
        your battery is low or your screen resolution is very high may, you may
        need to compromise on graphics or on frame rate. <br />
        <br />
        <i>Auto-throttle</i> will automatically degrade/boost graphics to reach
        an ideal frame rate and UX.
        <br />
        <br />
        <strong>
          Toggling <i>auto-throttle</i> is recommended for nerds only.
        </strong>
      </MenuTitle>
      <MenuSwitch
        statusColor={labelStyles.autoThrottle.color}
        statusBackgroundColor={labelStyles.autoThrottle.backgroundColor}
        statusText={auto ? 'ON' : 'OFF'}
        labelText={'Auto-throttle:'}
        checked={auto}
        onChange={() => {
          setAuto((prev) => !prev)
        }}
      />
      <MenuSlider
        labelText='Fluid Resolution:'
        statusColor={labelStyles.resolution.color}
        statusBackgroundColor={labelStyles.resolution.backgroundColor}
        statusText={resolution}
        aria-label='Fluid resolution'
        value={resolution}
        valueLabelDisplay='off'
        onChange={(e, newVal) => {
          setResolution(parseFloat(newVal.toFixed(2)))
        }}
        color='common.black'
        min={defaultSettings.performance.resolution.min}
        max={defaultSettings.performance.resolution.max}
        shiftStep={defaultSettings.performance.resolution.step}
        step={defaultSettings.performance.resolution.step}
        disabled={auto}
      />
      <MenuSlider
        labelText='Fluid Frames:'
        statusColor={labelStyles.frames.color}
        statusBackgroundColor={labelStyles.frames.backgroundColor}
        statusText={frames}
        aria-label='Fluid Frames'
        value={frames}
        valueLabelDisplay='off'
        onChange={(e, newVal) => {
          setFrames(parseInt(newVal))
        }}
        color='common.black'
        min={defaultSettings.performance.frames.min}
        max={defaultSettings.performance.frames.max}
        shiftStep={defaultSettings.performance.frames.step}
        step={defaultSettings.performance.frames.step}
        disabled={auto}
      />
      <MenuSlider
        labelText='Light Resolution:'
        statusColor={labelStyles.mapsize.color}
        statusBackgroundColor={labelStyles.mapsize.backgroundColor}
        statusText={parseInt(2 ** mapSize)}
        aria-label='Light Resolution'
        value={mapSize}
        valueLabelDisplay='off'
        onChange={(e, newVal) => {
          setMapsize(parseInt(newVal))
        }}
        color='common.black'
        min={defaultSettings.performance.mapSize.min}
        max={defaultSettings.performance.mapSize.max}
        shiftStep={defaultSettings.performance.mapSize.step}
        step={defaultSettings.performance.mapSize.step}
        disabled={auto}
      />
      <MenuTitle
        open={scrollAnchor}
        anchorEl={scrollAnchor}
        onPopoverClick={onScrollPopoverClose}
        onClickAwayClick={onScrollClickAwayClick}
        title={'Scroll'}
      >
        These settings let you modify the scroll-based interaction with the page
        content.
        <br />
        <br />
        <i>Scroll Distance:</i>
        <br /> Greater distance, slower scroll. Smaller distance, faster scroll.
        <br />
        <br />
        <i>Focus Factor:</i> <br />
        The proportion of animation time during which items are in focus and
        stationary.
      </MenuTitle>
      <MenuSlider
        labelText='Scroll Distance:'
        statusText={scrollDistance}
        aria-label='Scroll Distance'
        value={scrollDistance}
        valueLabelDisplay='off'
        onChange={(e, newVal) => {
          setScrollDistance(parseFloat(newVal.toFixed(2)))
        }}
        color='common.black'
        min={defaultSettings.scroll.scrollDistance.min}
        max={defaultSettings.scroll.scrollDistance.max}
        shiftStep={defaultSettings.scroll.scrollDistance.step}
        step={defaultSettings.scroll.scrollDistance.step}
      />
      <MenuSlider
        labelText='Focus Factor:'
        statusText={focusFactor}
        aria-label='Focus Factor'
        value={focusFactor}
        valueLabelDisplay='off'
        onChange={(e, newVal) => {
          setFocusFactor(parseFloat(newVal.toFixed(2)))
        }}
        color='common.black'
        min={defaultSettings.scroll.focusFactor.min}
        max={defaultSettings.scroll.focusFactor.max}
        shiftStep={defaultSettings.scroll.focusFactor.step}
        step={defaultSettings.scroll.focusFactor.step}
      />
      <MenuButton
        labelText='reset'
        enabled={!original}
        onClick={resetSettings}
      />
    </MenuContainer>
  )
}
