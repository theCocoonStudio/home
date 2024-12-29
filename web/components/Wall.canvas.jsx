import { forwardRef } from 'react'
import { BrickMaterial } from 'web/components/BrickMaterial.canvas'
import { CarbonMaterial } from 'web/components/CarbonMaterial.canvas'
import { PlasterMaterial } from 'web/components/PlasterMaterial.canvas'

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
      {facade === 'brick' && <BrickMaterial color='#441e1b' />}
      {facade === 'carbon' && <CarbonMaterial />}
      {facade === 'plaster' && <PlasterMaterial />}
    </mesh>
  )
})
