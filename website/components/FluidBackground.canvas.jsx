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
/* import Video2 from 'assets/colors2.mp4'
import Video3 from 'assets/colors.mp4'
import Video4 from 'assets/software.mp4' */
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
  { showLightbox, ranges, ...props },
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

  // material props
  const materialProps = useMemo(() => {
    const props = {
      preScroll: {
        clearcoat: 10,
        roughness: 0.2,
        metalness: 0.13,
        color: colors.white,
        opacity: 1.9,
        sheen: 1,
        sheenColor: colors.slate,
        sheenRoughness: 0.1,
        iridescence: 0.8,
        iridescenceIOR: 0,
        ior: 0.1,
        thickness: 100,
        reflectivity: 0.1,
        emissive: colors.slate,
        emissiveIntensity: 0.3,
      },
      postScroll: {
        clearcoat: 1,
        roughness: 0.1,
        metalness: 0.2,
        color: colors.black,
        opacity: 1.2,
        sheen: 0.0,
        sheenColor: '#000',
        sheenRoughness: 1.0,
        iridescence: 0.0,
        iridescenceIOR: 1.3,
        ior: 1.5,
        thickness: 0.0,
        reflectivity: 0.5,
        emissive: '#000',
        emissiveIntensity: 1.0,
      },
    }
    return {
      preScroll: Object.fromEntries(
        Object.keys(props.preScroll).map((key) => [
          [key],
          { value: props.preScroll[key] },
        ]),
      ),
      postScroll: Object.fromEntries(
        Object.keys(props.postScroll).map((key) => [
          [key],
          { value: props.postScroll[key] },
        ]),
      ),
    }
  }, [colors.black, colors.slate, colors.white])

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
    materialProps,
    ranges,
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
    <group position-z={-1}>
      <mesh ref={mesh} {...props}>
        <planeGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          transparent={true}
          alphaMap={texture}
          bumpMap={texture}
          bumpScale={500}
          precision={'highp'}
          clearcoatRoughness={0}
          dithering={true}
          {...materialProps.preScroll}
        />
      </mesh>
      <mesh ref={backing} position-z={-0.5}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial ref={backingMaterial} color={colors.black}>
          <VideoTexture video={Video} speed={4.5} />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
})
export const FluidBackgroundAnimation = memo(_FluidBackground)
