import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useThree } from '@react-three/fiber'
import { useBoundPathForce } from '../hooks/useBoundPathForce.canvas'
import { useTheme } from '../hooks/useTheme'
import { useFluidBackgroundAnimation } from '../hooks/useFluidBackgroundAnimation.canvas'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 80,
  resolution: 0.5,
  forceSize: 65,
  viscosity: 30,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  isBounce: true,
}

const _FluidBackground = forwardRef(function FluidBackgroundAnimation(
  {
    config: {
      content: {
        sections: {
          software: { items: softwareItems },
          photography: { items: photographyItems, range: photographyRange },
        },
      },
      style: { focusFactor },
    },
    animationTargets,
    ...props
  },
  forwardedRef,
) {
  // refs
  const mesh = useRef()
  const backing = useRef()
  const backingMaterial = useRef()
  const forceCallback = useRef(undefined)
  const pauseRef = useRef(false)
  const manualRef = useRef(false)
  // simulation options
  const options = useMemo(() => {
    return {
      ..._opts,
      forceCallbackRef: forceCallback,
      pauseRef,
      manualRef,
    }
  }, [])
  // reactive data
  const { colors } = useTheme()
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  // animation data
  const setForceCallback = useCallback((fcb) => {
    forceCallback.current = fcb
  }, [])
  const {
    forceCallback: boundPathForceCallback,
    resizeCallback: boundPathForceResizeCallback,
  } = useBoundPathForce(mesh)

  // resize callback
  const resizeCallback = useCallback(() => {
    boundPathForceResizeCallback()
    const current =
      mesh?.current &&
      viewport.getCurrentViewport(camera, mesh?.current.position.clone(), size)

    const { width, height } = current || {}
    current?.width &&
      mesh.current.scale.set(width, height, mesh.current.scale.z)

    const curentBacking =
      backing?.current &&
      viewport.getCurrentViewport(
        camera,
        backing?.current.position.clone(),
        size,
      )

    const { width: bWidth, height: bHeight } = curentBacking || {}
    curentBacking?.width &&
      backing.current.scale.set(bWidth, bHeight, backing.current.scale.z)
  }, [boundPathForceResizeCallback, camera, size, viewport])
  // simulation texture
  const { texture, render } = useFluidTexture(options)
  const scrollCallback = useFluidBackgroundAnimation({
    boundPathForceCallback,
    setForceCallback,
    colors,
    softwareItems,
    focusFactor,
    backingMaterialRef: backingMaterial,
    pauseRef,
    manualRef,
    animationTargets,
    photographyRange,
    photographyItems,
    render,
  })
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      backingMaterialRef: backingMaterial,
      backgroundRef: mesh,
      pauseRef,
      manualRef,
      options,
      texture,
      render,
    }),
    [options, render, resizeCallback, scrollCallback, texture],
  )

  return (
    <>
      <mesh ref={mesh} {...props}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          transparent
          alphaMap={texture}
          /* bumpMap={texture}
          bumpScale={15} */
          /* roughness={0.2}
          metalness={0.3} */
          /* precision={'highp'} */
          color={colors.white}
          /* dithering */
        />
      </mesh>
      <mesh ref={backing} position-z={-0.5}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          ref={backingMaterial}
          metalness={0.2}
          roughness={0.1}
          color={colors.black}
        ></meshBasicMaterial>
      </mesh>
    </>
  )
})
export const FluidBackgroundAnimation = memo(_FluidBackground)
