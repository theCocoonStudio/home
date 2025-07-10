import { useCallback, useMemo, useState } from 'react'
import { SettingsContext } from './SettingsContext'

export const SettingsProvider = ({
  children,
  config: {
    style: { focusFactor: defaultFocusFactor },
  },
}) => {
  const defaultSettings = useMemo(
    () => ({
      performance: {
        auto: { value: true, original: (val) => val === true },
        resolution: { value: 0.5, original: (val) => val > 0.4 && val < 0.6 },
        frames: { value: 1, original: (val) => val === 1 },
        mapSize: { value: 11, original: (val) => !(val < 11) },
      },
      scroll: {
        focusFactor: {
          value: defaultFocusFactor,
          original: (val) =>
            val > defaultFocusFactor - 0.005 &&
            val < defaultFocusFactor + 0.005,
        },
        scrollDistance: {
          value: 1.0,
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
    setAuto(defaultSettings.performance.auto.value)
    setResolution(defaultSettings.performance.resolution.value)
    setFrames(defaultSettings.performance.frames.value)
    setMapsize(defaultSettings.performance.mapSize.value)
    setFocusFactor(defaultSettings.scroll.focusFactor.value)
    setScrollDistance(defaultSettings.scroll.scrollDistance.value)
  }, [
    defaultSettings.performance.auto.value,
    defaultSettings.performance.frames.value,
    defaultSettings.performance.mapSize.value,
    defaultSettings.performance.resolution.value,
    defaultSettings.scroll.focusFactor.value,
    defaultSettings.scroll.scrollDistance.value,
  ])
  const original = useMemo(() => {
    const { performance, scroll } = defaultSettings
    return (
      performance.auto.original(auto) &&
      performance.resolution.original(resolution) &&
      performance.frames.original(frames) &&
      performance.mapSize.original(mapSize) &&
      scroll.focusFactor.original(focusFactor) &&
      scroll.scrollDistance.original(scrollDistance)
    )
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
