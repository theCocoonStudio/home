import { forwardRef } from 'react'

export const BacklitMaterial = forwardRef(function CanvasMaterial(
  { children, map, ...props },
  ref,
) {
  return (
    <>
      <meshStandardMaterial
        ref={ref}
        map={map}
        /* clearcoat={1.0}
        clearcoatRoughness={0.1}
        roughness={0.5}
        metalness={0.9}
        iridescence={0.3} */
        {...props}
      >
        {children}
      </meshStandardMaterial>
    </>
  )
})
