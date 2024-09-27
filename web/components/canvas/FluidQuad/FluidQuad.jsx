import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { configureSimulationRenderer } from './helpers'
import { FluidGeometry } from './FluidGeometry'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Vector2 } from 'three'

/* simulation mesh */
export const FluidQuad = forwardRef(function FluidQuad(
  {
    children,
    geometryProps,
    frame: [func, priority] = [undefined, undefined],
    inPortal = true,
    cameraProps,
    ...props
  },
  forwardedRef,
) {
  // mesh ref
  const meshRef = useRef()
  useImperativeHandle(forwardedRef, () => meshRef.current)
  // camera ref
  const camera = useRef()
  // geometry ref
  const geometry = useRef()

  const { viewWidth, viewHeight } = useThree(({ camera }) => {
    const size = new Vector2()
    camera.getViewSize(1, size)
    return { viewWidth: size.x, viewHeight: size.y }
  })

  useEffect(() => {
    // set direction
    meshRef.current.lookAt(0, 0, 0) // cam parent always at local origin for child
    meshRef.current.scale.setX(viewWidth / geometry.current.parameters.width)
    meshRef.current.scale.setY(viewHeight / geometry.current.parameters.height)
    meshRef.current.matrixWorldNeedsUpdate = true
  }, [viewHeight, viewWidth])

  // runs in RenderTexture's internal, separate useFrame
  useFrame((...args) => {
    func?.(...args)
  }, priority)

  return (
    <PerspectiveCamera ref={camera} makeDefault {...cameraProps}>
      <mesh
        position-z={1} // local position
        ref={meshRef}
        onBeforeRender={(inPortal && configureSimulationRenderer) || undefined}
        {...props}
      >
        <FluidGeometry ref={geometry} {...geometryProps} />
        {children}
      </mesh>
    </PerspectiveCamera>
  )
})
