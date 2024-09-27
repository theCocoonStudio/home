import { Environment, OrbitControls } from '@react-three/drei'
import Monitor from 'web/components/canvas/Monitor'
import { Effects } from 'web/components/canvas/Effects'
import { usePage } from 'web/hooks/usePage'

export default function Izzy() {
  const { page, pageUp } = usePage()

  return (
    <>
      {/* <fogExp2 attach='fog' args={[0xFBFAF8, 0.03]} /> */}
      <axesHelper scale={20} />
      <color attach='background' args={['#FBFAF8']} />
      <OrbitControls />
      {/* <ambientLight intensity={1} /> */}
      <Monitor />
      <Environment preset='park' environmentIntensity={0.5} />
      <Effects />
    </>
  )
}
