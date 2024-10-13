import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MathUtils } from 'three'

export const useProgress = (seconds, count) => {
  const progress = useRef(new Array(count))
  const container = useRef()

  useEffect(() => {
    container.current = document.getElementById('progress')
  }, [])

  useFrame(({ clock }) => {
    const total = clock.getElapsedTime() % (count * seconds)
    console.log(total)
    for (let i = 0; i < count; i++) {
      progress.current[i] = MathUtils.smoothstep(
        total - i * seconds,
        0.0,
        seconds,
      )
      container.current.children[i].style.setProperty(
        `--p${i}`,
        `${progress.current[i] * 100}%`,
      )
    }
  })
  return progress.current
}
