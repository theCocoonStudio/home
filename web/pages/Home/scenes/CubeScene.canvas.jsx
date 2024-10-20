import { useThree } from '@react-three/fiber'
import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { DoubleSide, Vector2, Vector4 } from 'three'
import { UNITS } from 'src/constants'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { Physics } from '@react-three/rapier'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { GradientTexture } from '@react-three/drei'

const options = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 50,
  viscous: 40,
  isBounce: true,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  forceCallback: (delta, elapsedTime) => {
    const force = new Vector2(
      Math.cos(elapsedTime),
      Math.sin(elapsedTime),
    ).multiplyScalar(0.5)
    const center = new Vector2(0.5, 0)
    return { force, center }
  },
}

export const CubeScene = forwardRef(function CubeScene(
  { tracking, colorTheme, pause },
  forwardedRef,
) {
  const cube = useRef()
  const meshRef = useRef()

  useImperativeHandle(forwardedRef, () => meshRef.current)

  const { width, height } = useThree(({ size }) => size)

  use2DBounds(meshRef, {
    margin: new Vector4(100, 0, 100, 0),
    marginUnits: UNITS.PX,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(cube, {
    damping: { smoothTime: 0.0 },
    trackingElement: true,
    trackingElementRef: tracking,
    scaleToFitWidth: false,
  })
  const texture = useFluidTexture(options, undefined, [width, height - 200])

  return (
    <>
      <Suspense>
        <Physics gravity={[0, -1, 0]}>
          <RubiksCube
            colorTheme={colorTheme}
            ref={cube}
            scale={0.18}
            physics={false}
            itemScale={0.6}
            position={[0, 0, -2]}
            rotation={[-Math.PI / 6, -Math.PI / 4, 0]}
            pause={pause}
          />
        </Physics>
        <mesh ref={meshRef} position-z={-15} name='activeSun'>
          <planeGeometry args={[1, (1 * (height - 200)) / width]} />
          <meshBasicMaterial
            side={DoubleSide}
            transparent
            alphaMap={texture}
            map={texture}
          >
            {/* <VideoTexture video={Video} /> */}

            <GradientTexture
              stops={[0, 0.5, 1]} // As many stops as you want
              colors={[
                colorTheme.charcoal,
                colorTheme.gunmetal,
                colorTheme.slate,
              ]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
      </Suspense>
    </>
  )
})
