import { useFrame, useThree } from '@react-three/fiber'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { DoubleSide, Vector2, Vector4 } from 'three'
import { UNITS } from 'src/constants'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { GradientTexture } from '@react-three/drei'
import { damp, damp3 } from 'maath/easing'
import { usePage } from '../../../hooks/usePage'

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
  { bufferTime, active },
  forwardedRef,
) {
  const meshRef = useRef()
  const cube = useRef()
  const smoothTime = useRef(bufferTime)

  const { width, height } = useThree(({ size }) => size)

  const {
    refs: {
      markup: { tracking },
    },
    theme: colorTheme,
    state: { pause, menu },
  } = usePage()

  const { off, on } = use2DBounds(meshRef, {
    margin: new Vector4(100, 0, 100, 0),
    marginUnits: UNITS.PX,
    damping: { smoothTime: smoothTime.current },
  })
  const { off: off2, on: on2 } = use2DBounds(cube, {
    damping: { smoothTime: smoothTime.current },
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

  useImperativeHandle(
    forwardedRef,
    () => ({
      sun: meshRef.current,
      inactive: (delta) => {
        off()
        off2()
        smoothTime.current = bufferTime

        damp3(meshRef.current.scale, [0, 0, 0], bufferTime, delta)
        damp3(cube.current.scale, [0, 0, 0], bufferTime, delta)
      },
      active: (delta) => {
        damp3(cube.current.scale, [0.18, 0.18, 0.18], bufferTime, delta)
        on()
        on2()
      },
    }),
    [bufferTime, off, off2, on, on2],
  )

  useFrame((state, delta) => {
    if (active) {
      // delayed pause
      if (pauseRef.current === pause) {
        elapsed.current = 0
      } else {
        elapsed.current += delta
        if (elapsed.current > 0.1) {
          pauseRef.current = pause
        }
      }

      // menu
      if (menu && active) {
        smoothTime.current = 0.0
      }
      const expected = menu ? 0.5 : 0
      const current = pauseRef.current
      if (center.current.y !== expected) {
        pauseRef.current = false
      } else {
        pauseRef.current = current
      }
      damp(center.current, 'y', menu ? 0.5 : 0, 0.1, delta)
    } else {
      center.current.y = menu ? 0.5 : 0
    }
  })
  return (
    <>
      <RubiksCube
        colorTheme={colorTheme}
        ref={cube}
        scale={0}
        physics={false}
        itemScale={0.6}
        position={[0, 0, -2]}
        rotation={[-Math.PI / 6, -Math.PI / 4, 0]}
        pause={pauseRef}
        visible={active}
      />

      <mesh ref={meshRef} position-z={-15} visible={active} scale={0}>
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
    </>
  )
})
