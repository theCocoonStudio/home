import { useCallback, useMemo, useState } from 'react'
import { SettingsContext } from './SettingsContext'

export const SettingsProvider = ({
  children,
  config: {
    data: { focusFactor: defaultFocusFactor },
  },
}) => {
  const defaultSettings = useMemo(
    () => ({
      performance: {
        auto: { value: true, original: (val) => val === true },
        resolution: {
          value: 0.5,
          min: 0.1,
          max: 1.0,
          step: 0.1,
          original: (val) => val > 0.4 && val < 0.6,
        },
        frames: {
          value: 1,
          min: 1,
          max: 6,
          step: 1,
          original: (val) => val === 1,
        },
        mapSize: {
          value: 11,
          min: 8,
          max: 11,
          step: 1,
          original: (val) => !(val < 11),
        },
      },
      scroll: {
        focusFactor: {
          value: defaultFocusFactor,
          min: 0.1,
          max: 0.9,
          step: 0.01,
          original: (val) =>
            val > defaultFocusFactor - 0.005 &&
            val < defaultFocusFactor + 0.005,
        },
        scrollDistance: {
          value: 1.0,
          min: 0.1,
          max: 5.0,
          step: 0.1,
          original: (val) => val > 0.9 && val < 1.1,
        },
      },
    }),
    [defaultFocusFactor],
  )
  const [auto, setAuto] = useState(defaultSettings.performance.auto.value)
  const [resolution, setResolution] = useState(
    defaultSettings.performance.resolution.value,
  )
  const [frames, setFrames] = useState(defaultSettings.performance.frames.value)
  const [mapSize, setMapsize] = useState(
    defaultSettings.performance.mapSize.value,
  )
  const [focusFactor, setFocusFactor] = useState(
    defaultSettings.scroll.focusFactor.value,
  )
  const [scrollDistance, setScrollDistance] = useState(
    defaultSettings.scroll.scrollDistance.value,
  )

  const resetSettings = useCallback(() => {
    if (auto) {
      setFocusFactor(defaultSettings.scroll.focusFactor.value)
      setScrollDistance(defaultSettings.scroll.scrollDistance.value)
    } else {
      setAuto(defaultSettings.performance.auto.value)
      setResolution(defaultSettings.performance.resolution.value)
      setFrames(defaultSettings.performance.frames.value)
      setMapsize(defaultSettings.performance.mapSize.value)
      setFocusFactor(defaultSettings.scroll.focusFactor.value)
      setScrollDistance(defaultSettings.scroll.scrollDistance.value)
    }
  }, [auto, defaultSettings])
  const original = useMemo(() => {
    const { performance, scroll } = defaultSettings
    if (auto) {
      return (
        scroll.focusFactor.original(focusFactor) &&
        scroll.scrollDistance.original(scrollDistance)
      )
    } else {
      return (
        performance.auto.original(auto) &&
        performance.resolution.original(resolution) &&
        performance.frames.original(frames) &&
        performance.mapSize.original(mapSize) &&
        scroll.focusFactor.original(focusFactor) &&
        scroll.scrollDistance.original(scrollDistance)
      )
    }
  }, [
    auto,
    defaultSettings,
    focusFactor,
    frames,
    mapSize,
    resolution,
    scrollDistance,
  ])
  const value = useMemo(
    () => ({
      defaultSettings,
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
      resetSettings,
      original,
    }),
    [
      auto,
      defaultSettings,
      focusFactor,
      frames,
      mapSize,
      original,
      resetSettings,
      resolution,
      scrollDistance,
    ],
  )

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}
