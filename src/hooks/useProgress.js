import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MathUtils } from 'three'

export const useProgress = (
  count,
  seconds,
  pause = false,
  id = 'progress',
  prefix = 'p',
  updateCallback,
  renderPriority,
) => {
  const progress = useRef(new Array(count))
  const container = useRef()
  const elapsed = useRef(0.0)
  useEffect(() => {
    container.current = document.getElementById(id)
  }, [id])

  useFrame(({ clock }, delta) => {
    if (!pause) {
      elapsed.current += delta
      const total = elapsed.current % (count * seconds)

      for (let i = 0; i < count; i++) {
        progress.current[i] = MathUtils.smoothstep(
          total - i * seconds,
          0.0,
          seconds,
        )
        if (typeof updateCallback === 'function') {
          updateCallback(
            container.current.children[i],
            progress.current[i],
            i,
            `--${prefix}${i}`,
            clock,
            delta,
          )
        } else {
          container.current.children[i].style.setProperty(
            `--${prefix}${i}`,
            `${progress.current[i] * 100}%`,
          )
        }
      }
    }
  }, renderPriority)
  return progress.current
}
