import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useThree } from '@react-three/fiber'
import { Vector2, Vector3 } from 'three'
import { useSettings } from 'website/pages/Home/useSettings'
import { useBoundPathForce } from '../hooks/useBoundPathForce.canvas'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { VideoTexture } from './VideoTexture.canvas'
import Video from 'assets/colors3.mp4'
import { useResizeEvent } from 'src/hooks/useResizeEvent'
import { useTheme } from '../hooks/useTheme'

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

const _Background = forwardRef(function Background(
  { positionZ0 = -5, heightProportion0, heightProportion1 },
  forwardedRef,
) {
  // refs
  const background = useRef()
  const backing = useRef()
  const forceCallbackRef = useRef()

  // theme data
  const {
    lengths: { sidePadding, maxWidth },
  } = useTheme()

  // reactive three app data
  const stateCallback = useCallback(({ get }) => {
    return get
  }, [])
  const get = useThree(stateCallback)

  // resize callback
  const resizeCallback = useCallback(
    (size) => {
      const { viewport, camera } = get()
      /* 
      we want Z1. If you think about it a little, we can confidently say that the ratio:
      viewportHeight_Z1/viewportHeight_Z0 > 1, should be equal to this ratio:
      (meshPixelHeight_Z0/viewportHeight_Z0)/(meshPixelHeight_Z0/viewportHeight_Z0) > 1
      The first ratio is the ratio of viewport heights such that the ratio > 1.
      The second ratio, also > 1, is the vertical proportion of the screen the mesh takes 
      at each z-position.  We can assert this equality because the quantities being divided to make
      the unitless ratio both scale linearly with z. 
      Solving for Z1:
      ((2 * Math.tan(fov/2) * (camZ-Z1)) / ((2 * Math.tan(fov/2) * (camZ - Z0)) = meshHeightProportion_Z0/meshHeightProportion_Z1
      (camZ - Z1)/ (camZ - Z0) = meshHeightProportion_Z0/meshHeightProportion_Z1
      meshHeightProportion_Z1 * (camZ-Z1) = meshHeightProportion_Z0 * (camZ - Z0)
      camZ - Z1 = (meshHeightProportion_Z0 * (camZ-Z0)) / meshHeightProportion_Z1
      Z1 = camZ - (meshHeightProportion_Z0 * (camZ-Z0)) / meshHeightProportion_Z1
      or Z1 = camZ - (camZ - Z0) * meshHeightProportion_Z0/meshHeightProportion_Z1

      all the variabls on the RHS are for us to choose:
      camZ: chosen camera z-position (already set for us)
      Z0: for us to choose based on scene requirements (i.e. space between mesh and camera)
      meshHeightProportion_Z0/meshHeightProportion_Z1: again, up to us
      */
      const z0 = positionZ0
      const meshHeightProportion_Z0 = heightProportion0 // i.e mesh takes up heightProportion0 of screen vertical space
      const meshHeightProportion_Z1 = heightProportion1

      const z1 =
        camera.position.z -
        ((camera.position.z - z0) * meshHeightProportion_Z0) /
          meshHeightProportion_Z1

      // mesh position
      const { height: viewportHeight0, factor: factor0 } =
        viewport.getCurrentViewport(camera, new Vector3(0, 0, z0), size)
      const { factor: factor1 } = viewport.getCurrentViewport(
        camera,
        new Vector3(0, 0, z1),
        size,
      )

      const contentWidthPx =
        (size.width > maxWidth ? maxWidth : size.width) - 2 * sidePadding
      const x0 = (-0.5 * contentWidthPx) / factor0
      const x1 = (0.5 * contentWidthPx) / factor1

      const x = x0 + (x1 - x0) / 2
      const y = 0
      const z = z0 + (z1 - z0) / 2

      // mesh scale x: meshWidth**2 = (X1 - X0)**2 + (Z0-Z1)**2
      const meshWidth = new Vector2(x0, z0).distanceTo(new Vector2(x1, z1))

      /* 
      mesh scale y:
      to calculate the mesh height, we use: height / viewportHeight_Z0 = meshHeightProportion_Z0
      or height = meshHeightProportion_Z0 * viewportHeight_Z0
      */
      const meshHeight = meshHeightProportion_Z0 * viewportHeight0

      // mesh rotation y: cos(meshAngle) = (X1-X0)/meshWidth
      const angle = Math.acos(Math.abs(x1 - x0) / meshWidth)

      // apply target values
      background.current.position.set(x, y, z)
      background.current.rotation.set(0, angle, 0)
      background.current.scale.set(meshWidth, meshHeight, 1)
    },
    [
      get,
      heightProportion0,
      heightProportion1,
      maxWidth,
      positionZ0,
      sidePadding,
    ],
  )

  const size = useResizeEvent(resizeCallback)
  // simulation options and texture
  const { resolution, frames: runEvery } = useSettings()
  const padding = useRef(new Vector2(0.2, 0.2))
  const boundPathForceCallback = useBoundPathForce(padding.current)
  useEffect(() => {
    if (boundPathForceCallback && !forceCallbackRef.current) {
      forceCallbackRef.current = boundPathForceCallback
    }
  }, [boundPathForceCallback])
  const options = useMemo(() => {
    return {
      ..._opts,
      resolution,
      runEvery,
      forceCallbackRef,
      fboWidth: Math.floor(
        resolution *
          (size.width > maxWidth
            ? maxWidth - 2 * sidePadding
            : size.width - 2 * sidePadding),
      ),
      fboHeight: Math.floor(
        size.height *
          Math.max(heightProportion0, heightProportion1) *
          resolution,
      ),
    }
  }, [
    heightProportion0,
    heightProportion1,
    maxWidth,
    resolution,
    runEvery,
    sidePadding,
    size.height,
    size.width,
  ])
  const { texture } = useFluidTexture(options)

  // imperative handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      background,
      backing,
      texture,
      forceCallbackRef,
    }),
    [texture],
  )

  return (
    <>
      <mesh ref={background}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={'#000'}
          roughness={0.15}
          metalness={0.5}
          transparent={true}
          alphaMap={texture}
          bumpMap={texture}
          bumpScale={500}
          precision={'highp'}
          opacity={1}
        />
        <mesh ref={backing} position-z={-0.01} scale={0.999}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color={'#656565'}>
            <VideoTexture
              video={Video}
              speed={1}
              fit={{
                aspect: size.width / (size.height * heightProportion0),
              }}
            />
          </meshBasicMaterial>
        </mesh>
      </mesh>
    </>
  )
})
export const Background = memo(_Background)
