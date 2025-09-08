import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'
import { useThree } from '@react-three/fiber'
import { useTheme } from '../hooks/useTheme'
import { Vector2, Vector3 } from 'three'

const _Background = forwardRef(function Background(
  { positionZ0 = -5, heightProportion0 = 0.5 },
  forwardedRef,
) {
  // refs
  const background = useRef()
  // theme
  const {
    lengths: { navHeight, topBottomPadding },
  } = useTheme()
  // reactive three app data
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])
  const { size, viewport, camera } = useThree(stateCallback)

  // resize callback
  const resizeCallback = useCallback(() => {
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
    const meshHeightProportion_Z0 = heightProportion0 // i.e mesh takes up 50% of screen vertical space
    const meshHeightProportion_Z1 =
      (size.height * 0.5 - navHeight - topBottomPadding * 2) / size.height //i.e., whatever 50% - (navHeight + padding) comes out to
    const z1 =
      camera.position.z -
      ((camera.position.z - z0) * meshHeightProportion_Z0) /
        meshHeightProportion_Z1

    // mesh position z, x
    const {
      width: viewportWidth0,
      height: viewportHeight0,
      factor: factor0,
    } = viewport.getCurrentViewport(camera, new Vector3(0, 0, z0), size)
    const { width: viewportWidth1 } = viewport.getCurrentViewport(
      camera,
      new Vector3(0, 0, z1),
      size,
    )

    const x0 = 0 - viewportWidth0 / 2
    const x1 = viewportWidth1 / 2

    const x = x0 + (x1 - x0) / 2
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

    /* 
      we want the mesh y-position of the mesh such that, at z0, the top of the mesh
      is navHeight + 2 * topBottomPadding pixels from the top of the viewport. i.e.:
      yPos + (meshHeight / 2) = viewportHeight_Z0 / 2 - (navHeight + 2 * topBottomPadding) / factor0
      or, yPos = viewportHeight_Z0 / 2 - (navHeight + 2 * topBottomPadding) / factor0 - meshHeight / 2
      */
    const y =
      viewportHeight0 / 2 -
      (navHeight + 2 * topBottomPadding) / factor0 -
      meshHeight / 2

    // apply target values
    background.current.position.set(x, y, z)
    background.current.rotation.set(0, angle, 0)
    background.current.scale.set(meshWidth, meshHeight, 1)
  }, [
    camera,
    heightProportion0,
    navHeight,
    positionZ0,
    size,
    topBottomPadding,
    viewport,
  ])

  // imperative handle
  useImperativeHandle(
    forwardedRef,
    () => ({
      resizeCallback,
      background,
    }),
    [resizeCallback],
  )

  return (
    <mesh ref={background}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color='white' />
    </mesh>
  )
})
export const Background = memo(_Background)
