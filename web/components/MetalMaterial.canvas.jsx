import { forwardRef } from 'react'

export const MetalMaterial = forwardRef(function CanvasMaterial(
  { children, ...props },
  ref,
) {
  return (
    <>
      <meshPhysicalMaterial
        ref={ref}
        {...props}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        roughness={0.5}
        metalness={0.9}
        iridescence={0.3}
      >
        {children}
      </meshPhysicalMaterial>
    </>
  )
})
