import { useRef } from 'react'
import {
  Environment,
  PerformanceMonitor,
  PerspectiveCamera,
} from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useProgress } from 'src/hooks'

/* simulation mesh */
export function Home({ tracking }) {
  const camera = useRef()

  const {
    data: { theme: colorTheme },
  } = usePage()

  useProgress(5, 5)

  return (
    <>
      <PerformanceMonitor>
        <CubeScene tracking={tracking} colorTheme={colorTheme} />

        {/* <Bulb scale={0.03} position-z={0.5} /> */}
        <PerspectiveCamera makeDefault position-z={1} ref={camera} />

        <Environment
          preset='studio'
          background={false}
          /* environmentIntensity={1} */
        />

        <color attach='background' args={['#101010']} />
        {/*     <Bulb
          scale={0.1}
          ref={cube}
        /> */}
      </PerformanceMonitor>
    </>
  )
}
