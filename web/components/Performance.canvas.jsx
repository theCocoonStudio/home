import { PerformanceMonitor } from '@react-three/drei'
import { useCallback, useMemo } from 'react'

export const Performance = ({ colorTheme }) => {
  const { red, green } = useMemo(
    () => ({
      green: colorTheme.slate,
      red: colorTheme.red,
    }),
    [colorTheme.red, colorTheme.slate],
  )

  const onChange = useCallback(
    ({
      /** Current fps */
      // fps,
      /** Current performance factor, between 0 and 1 */
      factor,
      /** Current highest fps, you can use this to determine device refresh rate */
      // refreshrate,
      /** Fps samples taken over time  */
      // frames,
      /** Averages of frames taken over n iterations   */
      // averages,
    }) => {
      const el = document.getElementById('fps')
      el.style.setProperty('--fpsFactor', `${100 * Math.max(factor, 0.2)}%`)
      el.style.setProperty('--fpsColor', factor < 0.2 ? red : green)
    },
    [green, red],
  )
  return <PerformanceMonitor onChange={onChange} />
}
