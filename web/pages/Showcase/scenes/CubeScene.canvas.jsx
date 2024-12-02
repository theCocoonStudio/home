import { useFrame, useThree } from '@react-three/fiber'
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { DoubleSide, Vector2, Vector4 } from 'three'
import { UNITS } from 'src/constants'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { GradientTexture } from '@react-three/drei'
import { damp, damp3 } from 'maath/easing'
import { useMarkup } from '../../../hooks/useMarkup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useTheme } from '../../../hooks/useTheme'
import { useControls } from 'leva'
import { usePageControls } from '../../../hooks/usePageControls'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 20,
  resolution: 0.5,
  forceSize: 50,
  viscosity: 40,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
}

export const CubeScene = forwardRef(function CubeScene(
  { bufferTime, active, renderPriority, forceSource },
  forwardedRef,
) {
  const meshRef = useRef()
  const cube = useRef()
  const smoothTime = useRef(bufferTime)

  const { width, height } = useThree(({ size }) => size)

  const {
    refs: {
      showcase: { tracking },
    },
  } = useMarkup()

  const {
    state: { pause, menu },
  } = useShowcase()
  const colorTheme = useTheme()

  const [gradientColors, setGradientColors] = useState([
    colorTheme.charcoal,
    colorTheme.gunmetal,
    colorTheme.slate,
  ])

  const { off, on } = use2DBounds(meshRef, {
    margin: new Vector4(83, 0, 83, 0),
    marginUnits: UNITS.PX,
    damping: { smoothTime: smoothTime.current },
    renderPriority,
  })
  const { off: off2, on: on2 } = use2DBounds(cube, {
    damping: { smoothTime: smoothTime.current },
    trackingElement: true,
    trackingElementRef: tracking,
    scaleToFitWidth: false,
    renderPriority,
  })

  const elapsed = useRef(0)
  const pauseRef = useRef(false)
  const center = useRef(new Vector2(0.5, 0))

  const { store1, store2 } = usePageControls()
  const {
    poissonIterations: iterations_poisson,
    viscousIterations: iterations_viscous,
    forceValue: mouse_force,
    resolution,
    forceSize: cursor_size,
    viscosity: viscous,
    dt,
    isViscous,
    BFECC,
  } = useControls(_opts, { store: store1 })
  const forceCallback = useMemo(() => {
    if (forceSource === 'cube') {
      return (delta, elapsedTime) => {
        const force = new Vector2(
          Math.cos(elapsedTime),
          Math.sin(elapsedTime),
        ).multiplyScalar(0.5)
        return { force, center: center.current }
      }
    }
    return undefined
  }, [forceSource])

  const options = useMemo(
    () => ({
      iterations_poisson,
      iterations_viscous,
      mouse_force,
      resolution,
      cursor_size,
      viscous,
      dt,
      isViscous,
      BFECC,
      isBounce: true,
      forceCallback,
    }),
    [
      BFECC,
      cursor_size,
      dt,
      forceCallback,
      isViscous,
      iterations_poisson,
      iterations_viscous,
      mouse_force,
      resolution,
      viscous,
    ],
  )

  const texture = useFluidTexture(
    options,
    renderPriority,
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
  }, renderPriority)
  return (
    <>
      <RubiksCube
        renderPriority={renderPriority}
        colorTheme={colorTheme}
        ref={cube}
        scale={0}
        physics={false}
        itemScale={0.6}
        position={[0, 0, -2]}
        rotation={[-Math.PI / 6, -Math.PI / 4, 0]}
        pause={pauseRef}
        visible={active}
        store={store2}
        setGradientColors={setGradientColors}
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
            colors={gradientColors} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
    </>
  )
})
