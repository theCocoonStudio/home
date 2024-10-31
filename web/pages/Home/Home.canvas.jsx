import { useRef } from 'react'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { useProgress } from 'src/hooks'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'

/* simulation mesh */
export function Home() {
  const cubeScene = useRef()
  const camera = useRef()

  const {
    state: { pause },
  } = usePage()

  const { progress, setElapsed } = useProgress(5, 5, pause)

  return (
    <>
      <color attach='background' args={['#101010']} />
      <PerspectiveCamera makeDefault position-z={1} ref={camera} />
      {/* <CubeScene progress={progress} /> */}
      <Gallery ref={cubeScene} />
    </>
  )
}
