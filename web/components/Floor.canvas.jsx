import { RigidBody } from '@react-three/rapier'
import { forwardRef } from 'react'
export const Floor = forwardRef(function Floor({ ...props }, ref) {
  return (
    <RigidBody includeInvisible colliders='hull'>
      <mesh
        /* visible={false} */
        rotation-x={-Math.PI / 2}
        ref={ref}
        scale={5}
        {...props}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </RigidBody>
  )
})
