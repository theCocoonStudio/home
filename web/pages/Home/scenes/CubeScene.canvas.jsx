import { useFrame, useThree } from '@react-three/fiber'
import {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { DoubleSide, Vector2, Vector4 } from 'three'
import { UNITS } from 'src/constants'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { Physics } from '@react-three/rapier'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { GradientTexture } from '@react-three/drei'
import { damp } from 'maath/easing'

const opts = {
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
  forceCallback: undefined,
}

export const CubeScene = forwardRef(function CubeScene(
  { tracking, colorTheme, pause, menu },
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

  const elapsed = useRef(0)
  const pauseRef = useRef(false)
  const center = useRef(new Vector2(0.5, 0))

  const options = useMemo(
    () => ({
      ...opts,
      forceCallback: (delta, elapsedTime) => {
        const force = new Vector2(
          Math.cos(elapsedTime),
          Math.sin(elapsedTime),
        ).multiplyScalar(0.5)
        return { force, center: center.current }
      },
    }),
    [],
  )

  const texture = useFluidTexture(
    options,
    undefined,
    [width, height - 200],
    pauseRef,
  )

  useFrame((state, delta) => {
    if (pauseRef.current === pause) {
      elapsed.current = 0
    } else {
      elapsed.current += delta
      if (elapsed.current > 0.1) {
        pauseRef.current = pause
      }
    }
    const expected = menu ? 0.5 : 0
    const current = pauseRef.current
    if (center.current.y !== expected) {
      pauseRef.current = false
    } else {
      pauseRef.current = current
    }
    damp(center.current, 'y', menu ? 0.5 : 0, 0.1, delta)
  })
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
            pause={pauseRef}
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
