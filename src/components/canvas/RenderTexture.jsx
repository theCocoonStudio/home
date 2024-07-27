import * as THREE from 'three'
import { useState, useCallback, useImperativeHandle, forwardRef } from 'react'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import { useFBO } from './FBO'

export const RenderTexture = forwardRef(function RenderTexture(
  {
    children,
    compute,
    width,
    height,
    depth,
    samples = 8,
    renderPriority = 0,
    eventPriority = 0,
    frames = Infinity,
    stencilBuffer = false,
    depthBuffer = true,
    generateMipmaps = false,
    data3D = false,
    ...props
  },
  forwardRef,
) {
  const { size, viewport } = useThree()
  const opts = {
    samples,
    stencilBuffer,
    depthBuffer,
    generateMipmaps,
  }
  const fbo = useFBO(
    (width || size.width) * viewport.dpr,
    (height || size.height) * viewport.dpr,
    data3D ? (depth || size.width) * viewport.dpr : opts,
    data3D ? opts : opts,
  )
  const [vScene] = useState(() => new THREE.Scene())

  const uvCompute = useCallback((event, state, previous) => {
    // Since this is only a texture it does not have an easy way to obtain the parent, which we
    // need to transform event coordinates to local coordinates. We use r3f internals to find the
    // next Object3D.
    let parent = fbo.texture?.__r3f.parent
    while (parent && !(parent instanceof THREE.Object3D)) {
      parent = parent.__r3f.parent
    }
    if (!parent) return false
    // First we call the previous state-onion-layers compute, this is what makes it possible to nest portals
    if (!previous.raycaster.camera)
      previous.events.compute(
        event,
        previous,
        previous.previousRoot?.getState(),
      )
    // We run a quick check against the parent, if it isn't hit there's no need to raycast at all
    const [intersection] = previous.raycaster.intersectObject(parent)
    if (!intersection) return false
    // We take that hits uv coords, set up this layers raycaster, et voilà, we have raycasting on arbitrary surfaces
    const uv = intersection.uv
    if (!uv) return false
    state.raycaster.setFromCamera(
      state.pointer.set(uv.x * 2 - 1, uv.y * 2 - 1),
      state.camera,
    )
  }, [])

  useImperativeHandle(forwardRef, () => fbo.texture, [fbo])

  return (
    <>
      {createPortal(
        <Container renderPriority={renderPriority} frames={frames} fbo={fbo}>
          {children}
          {/* Without an element that receives pointer events state.pointer will always be 0/0 */}
          <group onPointerOver={() => null} />
        </Container>,
        vScene,
        { events: { compute: compute || uvCompute, priority: eventPriority } },
      )}
      <primitive object={fbo.texture} {...props} />
    </>
  )
})

// The container component has to be separate, it can not be inlined because "useFrame(state" when run inside createPortal will return
// the portals own state which includes user-land overrides (custom cameras etc), but if it is executed in <RenderTexture>'s render function
// it would return the default state.
function Container({ frames, renderPriority, children, fbo }) {
  let count = 0
  let oldAutoClear
  let oldXrEnabled
  let oldRenderTarget
  let oldIsPresenting
  useFrame((state) => {
    if (frames === Infinity || count < frames) {
      oldAutoClear = state.gl.autoClear
      oldXrEnabled = state.gl.xr.enabled
      oldRenderTarget = state.gl.getRenderTarget()
      oldIsPresenting = state.gl.xr.isPresenting
      state.gl.autoClear = true
      state.gl.xr.enabled = false
      state.gl.xr.isPresenting = false
      state.gl.setRenderTarget(fbo)
      state.gl.render(state.scene, state.camera)
      state.gl.setRenderTarget(oldRenderTarget)
      state.gl.autoClear = oldAutoClear
      state.gl.xr.enabled = oldXrEnabled
      state.gl.xr.isPresenting = oldIsPresenting
      count++
    }
  }, renderPriority)
  return <>{children}</>
}
