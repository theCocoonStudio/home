import { PerformanceMonitor } from '@react-three/drei'
import { useCallback } from 'react'
import { useTheme } from '../hooks/useTheme'

export const Performance = () => {
  const {
    markupIds: {
      fps: { container },
    },
  } = useTheme()

  const onChange = useCallback(
    ({
      /** Current fps */
      fps,
      /** Current performance factor, between 0 and 1 */
      // factor,
      /** Current highest fps, you can use this to determine device refresh rate */
      // refreshrate,
      /** Fps samples taken over time  */
      // frames,
      /** Averages of frames taken over n iterations   */
      // averages,
    }) => {
      const el = document.getElementById(container)
      el.innerHTML = `${fps}`
    },
    [container],
  )
  return <PerformanceMonitor onChange={onChange} />
}
