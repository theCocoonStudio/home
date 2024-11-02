import { useRef, useState } from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { useProgress } from 'src/hooks'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { Effects } from 'web/components/Effects.canvas.jsx'

/* simulation mesh */
export function Home({ time = 10 }) {
  const cubeScene = useRef()
  const gallery = useRef()

  const [current, setCurrent] = useState(1)

  const {
    state: { pause },
  } = usePage()

  const { progressRef, setElapsed } = useProgress(
    5,
    time,
    pause,
    (progress, curr) => {
      setCurrent(curr)
    },
  )

  return (
    <>
      <Effects cubeScene={cubeScene} gallery={gallery} current={current} />
      <Preload all />
      <color attach='background' args={['#101010']} />
      <PerspectiveCamera makeDefault position-z={1} />

      <CubeScene
        ref={cubeScene}
        progressRef={progressRef}
        time={time}
        active={current === 1}
      />
      <Gallery
        ref={gallery}
        progressRef={progressRef}
        time={time}
        active={current === 2}
      />
    </>
  )
}
