import { PerformanceMonitor } from '@react-three/drei'
import { useCallback, useMemo } from 'react'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useSettings } from 'website/pages/Home/useSettings'

export const Performance = ({ fpsContainer }) => {
  // markup ref
  /* const container = useMarkupId(fpsContainer) */

  // settings hook
  const {
    auto,
    setAuto,
    defaultSettings,
    setResolution,
    setFrames,
    setMapsize,
  } = useSettings()

  const { width, height } = useResizeEvent()
  // targets for auto-throttle/boost settings
  const targets = useMemo(
    () => ({
      resolution: [
        width * height > 1500 * 2000 ? 0.1 : 0.3,
        width * height > 1500 * 2000 ? 0.2 : 0.3,
        0.3,
        0.4,
        defaultSettings.performance.resolution.value,
        defaultSettings.performance.resolution.value,
        width * height < 1000 * 1000
          ? 0.6
          : defaultSettings.performance.resolution.value,
        width * height < 1000 * 1000
          ? 0.7
          : defaultSettings.performance.resolution.value,
        width * height < 1000 * 1000
          ? 0.8
          : defaultSettings.performance.resolution.value,
        width * height < 1000 * 1000
          ? 0.9
          : defaultSettings.performance.resolution.value,
        width * height < 1000 * 1000
          ? 1.0
          : defaultSettings.performance.resolution.value,
      ],
      frames: [
        2,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
        defaultSettings.performance.frames.value,
      ],
      mapSize: [
        8,
        9,
        10,
        10,
        10,
        defaultSettings.performance.mapSize.value,
        defaultSettings.performance.mapSize.value,
        defaultSettings.performance.mapSize.value,
        defaultSettings.performance.mapSize.value,
        defaultSettings.performance.mapSize.value,
        defaultSettings.performance.mapSize.value,
      ],
    }),
    [defaultSettings, height, width],
  )
  const onChange = useCallback(
    ({ fps, factor /*refreshrate , frames, averages */ }) => {
      console.log(fps)
      /* container.innerHTML = `${fps}` */
      // throttle or boost performance
      /* const index = Math.round(factor * 10)
      const toggleAuto = auto === false && index < 2
      if (auto || toggleAuto) {
        setResolution(targets.resolution[index])
        setFrames(targets.frames[index])
        setMapsize(targets.mapSize[index])
        if (toggleAuto) {
          setAuto(true)
        }
      } */
    },
    [],
  )
  const bounds = useCallback((rr) => {
    return [Math.min(rr - 10, 50), Math.min(rr, 60)]
  }, [])

  return <PerformanceMonitor onChange={onChange} factor={0.5} bounds={bounds} />
}
