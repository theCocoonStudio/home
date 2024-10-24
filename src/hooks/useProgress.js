import { useFrame } from '@react-three/fiber'
import { useCallback, useEffect, useRef } from 'react'
import { MathUtils } from 'three'

export const useProgress = (
  count,
  seconds,
  pause = false,
  id = 'progress',
  prefix = 'p',
  renderPriority,
) => {
  const progress = useRef(new Array(count))
  const container = useRef()
  const elapsed = useRef(0.0)

  useEffect(() => {
    container.current = document.getElementById(id)
  }, [id])

  const update = useCallback(() => {
    const total = elapsed.current % (count * seconds)

    for (let i = 0; i < count; i++) {
      progress.current[i] = MathUtils.smoothstep(
        total - i * seconds,
        0.0,
        seconds,
      )
      container.current.children[i].style.setProperty(
        `--${prefix}${i}`,
        `${progress.current[i] * 100}%`,
      )
    }
  }, [count, prefix, seconds])

  const setElapsed = useCallback(
    (newElapsed) => {
      elapsed.current = newElapsed
      update()
    },
    [update],
  )

  useFrame(({ clock }, delta) => {
    if (!pause) {
      elapsed.current += delta
      update()
    }
  }, renderPriority)
  return { progress: progress.current, setElapsed }
}
