import { InstancedRigidBodies } from '@react-three/rapier'
import { useMemo, useRef } from 'react'

export function PhysicsCubes({ instanceCount }) {
  const meshRef = useRef(null)
  console.log(instanceCount)

  const instanceProps = useMemo(() => {
    const instances = []

    console.log(instanceCount)

    for (let i = 0; i < instanceCount; i++) {
      instances.push({
        key: `instance_${i}`,
        position: [Math.random() * 30, 10, Math.random() * 5],
        rotation: [Math.random(), Math.random(), Math.random()],
      })
    }
    console.log(instances)
    return instances
  }, [])

  console.log(instanceProps)
  return (
    <InstancedRigidBodies
      ref={meshRef}
      instances={instanceProps}
      colliders='cuboid'
      onUpdate={(self) => console.log(self)}
    >
      <instancedMesh
        ref={meshRef}
        args={[null, null, instanceCount]}
        instanceCount={instanceCount}
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshBasicMaterial color='green' />
      </instancedMesh>
    </InstancedRigidBodies>
  )
}
