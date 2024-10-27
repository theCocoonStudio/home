import { useRef } from 'react'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useProgress } from 'src/hooks'

/* simulation mesh */
export function Home({ tracking, pause, menu }) {
  const cubeScene = useRef()
  const camera = useRef()

  const {
    data: { theme: colorTheme },
  } = usePage()

  const { progress } = useProgress(5, 5, pause)

  return (
    <>
      <Environment
        preset='studio'
        background={false}
        /* environmentIntensity={1} */
      />
      <color attach='background' args={['#101010']} />
      <PerspectiveCamera makeDefault position-z={1} ref={camera} />
      <CubeScene
        tracking={tracking}
        colorTheme={colorTheme}
        ref={cubeScene}
        pause={pause}
        menu={menu}
        progress={progress}
      />
    </>
  )
}
