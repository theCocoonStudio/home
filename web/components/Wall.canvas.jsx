import { forwardRef } from 'react'
import { BrickMaterial } from 'web/components/BrickMaterial.canvas'
import { CanvasMaterial } from 'web/components/CanvasMaterial.canvas'
import { BacklitMaterial } from 'web/components/BacklitMaterial.canvas'
import { MetalMaterial } from 'web/components/MetalMaterial.canvas'

export const Wall = forwardRef(function Wall(
  { facade = 'brick', ...props },
  ref,
) {
  return (
    <mesh
      receiveShadow
      ref={ref}
      scale={[8, 8, 1]}
      position-z={-0.025}
      {...props}
    >
      <planeGeometry args={[1, 1]} />
      <BrickMaterial color='#441e1b' />
    </mesh>
  )
})
