/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 /Users/dialectic/Downloads/gear.glb --transform 
Files: /Users/dialectic/Downloads/gear.glb [24.26KB] > /Users/dialectic/repositories/thecocoonstudio/izzy/gear-transformed.glb [4.08KB] (83%)
Author: Zoe Choi (https://sketchfab.com/caicai_00)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-icon-gear-b03aab15697b41ba8f218d6deb4daec9
Title: 3D Icon gear
*/

import Model from 'public/models/gear.glb'
import { useGLTF } from '@react-three/drei'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'

export const Gear = forwardRef(function Gear(
  { menu, colorTheme, renderPriority, ...props },
  ref,
) {
  const { nodes } = useGLTF(Model)

  const group = useRef()

  useImperativeHandle(ref, () => group.current)

  useEffect(() => {
    nodes.Object_2.geometry.center()
    const { min, max } = nodes.Object_2.geometry.boundingBox

    const factor = 0.5 / (Math.abs(max.x) + Math.abs(min.x))

    nodes.Object_2.geometry.scale(factor, factor, factor)
    nodes.Object_2.geometry.center()
    return () => {
      nodes.Object_2.geometry?.dispose()
    }
  }, [nodes.Object_2.geometry])

  useFrame((state, delta) => {
    damp(
      group.current.rotation,
      'z',
      menu ? Math.PI / 4 : -Math.PI / 4,
      0.2,
      delta,
    )
  }, renderPriority)
  return (
    <group ref={group} {...props} rotation-z={-Math.PI / 4} position-z={0.04}>
      <mesh
        geometry={nodes.Object_2.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
          color={colorTheme.white}
          opacity={0.8}
          transparent
        />
      </mesh>
    </group>
  )
})
// useGLTF.preload(Model)
