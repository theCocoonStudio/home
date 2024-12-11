import { useFrame } from '@react-three/fiber'
import { useCallback, useEffect, useRef } from 'react'
import { MathUtils } from 'three'

export const useProgress = (
  count,
  seconds,
  pause = false,
  onChange,
  id = 'progress',
  prefix = 'p',
  renderPriority,
) => {
  const progress = useRef(new Array(count))

  const container = useRef()
  const elapsed = useRef(0.0)
  const currentRef = useRef({ value: undefined })
  const prevRef = useRef({ value: undefined })

  useEffect(() => {
    container.current = document.getElementById(id)
  }, [id])

  useEffect(() => {
    elapsed.current = 0.0
  }, [seconds])

  const update = useCallback(() => {
    const total = elapsed.current % (count * seconds)

    for (let i = 0; i < count; i++) {
      const prog = MathUtils.smoothstep(total - i * seconds, 0.0, seconds)
      if (typeof prog === 'number' && prog > 0.0 && prog < 1.0) {
        currentRef.current.value = i + 1
      }
      progress.current[i] = prog
      container.current.children[i].style.setProperty(
        `--${prefix}${i}`,
        `${progress.current[i] * 100}%`,
      )
    }
  }, [count, prefix, seconds])

  const setElapsed = useCallback((newElapsed) => {
    elapsed.current = newElapsed
  }, [])

  useFrame(({ clock }, delta) => {
    if (!pause) {
      elapsed.current += delta
      update()
      if (prevRef.current.value != currentRef.current.value) {
        onChange(progress, currentRef.current.value)
      }
      prevRef.current.value = currentRef.current.value
    }
  }, renderPriority)
  return { progressRef: progress, setElapsed }
}
