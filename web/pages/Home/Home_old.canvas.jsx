import { Environment, Html, OrbitControls, Text } from '@react-three/drei'
import { Floor } from 'web/components/canvas/Floor'
import { Effects } from 'web/components/canvas/Effects'
import { usePage } from 'web/hooks/usePage'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'
import { RubiksCube } from 'web/components/canvas/RubiksCube'

export default function Home() {
  const { page, pageUp } = usePage()

  return (
    <>
      <color attach='background' args={['#050505']} />
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      {/* <spotLight position={[9, 10, 12]} /> */}

      <Environment preset='park' environmentIntensity={0.5} />
      <Effects />
      {/* <PhysicsCubes instanceCount={1000} /> */}
      <Suspense>
        <Physics gravity={[0, 0, 0]}>
          <RigidBody>
            <Floor
              scale={50}
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </RigidBody>

          <RubiksCube
            scale={0.5}
            physics={false}
            itemScale={0.6}
            position={[0, 2.5, 0]}
            rotation={[-Math.PI / 6, -Math.PI / 4, 0]}
          />
        </Physics>
      </Suspense>
    </>
  )
}
