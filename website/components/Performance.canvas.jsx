import { PerformanceMonitor } from '@react-three/drei'
import { useCallback } from 'react'

export const Performance = ({ fpsContainer }) => {
  const onChange = useCallback(
    ({
      /** Current fps */
      fps,
      /** Current performance factor, between 0 and 1 */
      factor,
      /** Current highest fps, you can use this to determine device refresh rate */
      refreshrate,
      /** Fps samples taken over time  */
      // frames,
      /** Averages of frames taken over n iterations   */
      // averages,
    }) => {
      const el = document.getElementById(fpsContainer)
      /* console.log(factor)
      console.log(refreshrate) */
      el.innerHTML = `${fps}`
    },
    [fpsContainer],
  )
  return (
    <PerformanceMonitor
      onChange={onChange}
      bounds={(rr) => {
        /* console.log(rr) */
        return [35, rr]
      }}
    />
  )
}
