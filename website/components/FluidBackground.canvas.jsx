import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useThree } from '@react-three/fiber'
import { useBoundPathForce } from '../hooks/useBoundPathForce.canvas'
import { useTheme } from '../hooks/useTheme'
import { useFluidBackgroundAnimation } from '../hooks/useFluidBackgroundAnimation.canvas'
import { useSettings } from 'website/pages/Home/useSettings'
import Video from 'assets/colors3.mp4'
import { VideoTexture } from './VideoTexture.canvas'

const _opts = {
  poissonIterations: 32,
  viscousIterations: 32,
  forceValue: 80,
  resolution: 0.5,
  runEvery: 1,
  forceSize: 65,
  viscosity: 30,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  isBounce: true,
}

const _FluidBackground = forwardRef(function FluidBackgroundAnimation(
  { showLightbox, ...props },
  forwardedRef,
) {
  // refs
  const mesh = useRef()
  const backing = useRef()
  const backingMaterial = useRef()
  const forceCallback = useRef(undefined)
  const pauseRef = useRef(false)
  const manualRef = useRef(false)

  // reactive data
  const { colors } = useTheme()
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)
  const [forceMesh, setForceMesh] = useState()

  // simulation options
  const { resolution, frames: runEvery } = useSettings()
  const options = useMemo(() => {
    return {
      ..._opts,
      resolution,
      runEvery,
      forceCallbackRef: forceCallback,
      forceMesh,
      pauseRef,
      manualRef,
    }
  }, [forceMesh, resolution, runEvery])

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

    const { width, height, factor } = current || {}
    current?.width &&
      mesh.current.scale.set(
        width + 20 / factor,
        height + 20 / factor,
        mesh.current.scale.z,
      )

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
    backingMaterialRef: backingMaterial,
    meshRef: mesh,
    manualRef,
    render,
    showLightbox,
  })
  // imperative handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      scrollCallback,
      backingMaterialRef: backingMaterial,
      backgroundRef: mesh,
      forceMesh,
      setForceMesh,
      pauseRef,
      manualRef,
      options,
      texture,
      render,
    }),
    [forceMesh, options, render, resizeCallback, scrollCallback, texture],
  )

  return (
    <>
      <mesh ref={mesh} {...props}>
        <planeGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          transparent
          alphaMap={texture}
          bumpMap={texture}
          bumpScale={800}
          precision={'highp'}
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={0.1}
          metalness={0.2}
          color={colors.white}
          dithering
        />
      </mesh>
      <mesh ref={backing} position-z={-0.5}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial ref={backingMaterial} color={colors.black}>
          <VideoTexture video={Video} />
        </meshBasicMaterial>
      </mesh>
    </>
  )
})
export const FluidBackgroundAnimation = memo(_FluidBackground)
