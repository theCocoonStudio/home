import { useFrame, useThree } from '@react-three/fiber'
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { DoubleSide, Vector2 } from 'three'

import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { GradientTexture } from '@react-three/drei'
import { damp } from 'maath/easing'
import { useMarkup } from '../../../hooks/useMarkup'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useTheme } from '../../../hooks/useTheme'
import { useControls } from 'leva'
import { usePageControls } from '../../../hooks/usePageControls'
import { useMarkupBounds } from 'src/hooks'

const meshCallback = ({ target, min, max, ppwu }) => {
  target.scale.setComponent(0, max.x - min.x)
  target.scale.setComponent(1, max.y - min.y - 2 * (83 / ppwu.x))
}
const cubeCallback = ({ target, min, max }) => {
  target.position.setComponent(0, min.x + (max.x - min.x) / 2)
  target.position.setComponent(1, min.y + (max.y - min.y) / 2)
}
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
  const group = useRef()
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

  useMarkupBounds({ target: meshRef, callback: meshCallback, pause: !active })
  useMarkupBounds({
    target: cube,
    element: tracking,
    callback: cubeCallback,
    pause: !active,
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
        smoothTime.current = bufferTime
        damp(group.current.position, 'x', -20, bufferTime, delta)
      },
      active: (delta) => {
        damp(group.current.position, 'x', 0, bufferTime, delta)
      },
    }),
    [bufferTime],
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
    <group ref={group}>
      <RubiksCube
        renderPriority={renderPriority}
        colorTheme={colorTheme}
        ref={cube}
        scale={0.18}
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
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          side={DoubleSide}
          transparent
          alphaMap={texture}
          map={texture}
        >
          <GradientTexture
            stops={[0, 0.5, 1]} // As many stops as you want
            colors={gradientColors} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
})
