import { useRef } from 'react'
import {
  Environment,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
} from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { CubeScene } from './scenes/CubeScene.canvas'
import { Display } from '../../components/Display.canvas'

/* simulation mesh */
export function Home() {
  const camera = useRef()

  const {
    data: {
      theme: colorTheme,
      layout: { tracking },
    },
  } = usePage()

  return (
    <>
      <PerformanceMonitor>
        <OrbitControls />
        <CubeScene tracking={tracking} colorTheme={colorTheme} />

        {/* <Bulb scale={0.03} position-z={0.5} /> */}
        <PerspectiveCamera makeDefault position-z={1} ref={camera} />

        <Display />
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
