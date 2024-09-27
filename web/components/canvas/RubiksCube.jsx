import { MeshTransmissionMaterial, shaderMaterial } from '@react-three/drei'
import { InstancedRigidBodies } from '@react-three/rapier'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { RubiksCube3 } from 'web/helpers/rubiksCubeUtils'
import { InstancedBufferAttribute, Matrix4, Quaternion, Vector3 } from 'three'

const RubiksCubeShaderMaterial = shaderMaterial(
  {},
  // vertex shader
  `
   attribute vec3 color;
   attribute vec3 meshPosition;
   varying vec3 setColor;
   
     void main() {
       int toColor = int(dot(meshPosition, normal));
       setColor = color;
       if (toColor != 1) {
        setColor = vec3(0,0,0);
       }
       gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);
     }
  `,
  // fragment shader
  `uniform float time;
     varying vec3 setColor;
     void main() {
       gl_FragColor.rgba = vec4(setColor, 1.0);
     }
  `,
)

// declaratively
extend({ RubiksCubeShaderMaterial })

export function RubiksCube({
  sideCount = 3, // make arbitrary in future
  physics = false,
  ...props
}) {
  const groupRef = useRef(null)
  const instancedMesh = useRef(null)
  const rigidBody = useRef(null)

  const { rigidBodiesProps, attributes, rubiks } = useMemo(() => {
    const rubiks = new RubiksCube3()
    const { attributes, rigidBodiesProps } = rubiks

    return { rigidBodiesProps, attributes, rubiks }
  }, [])

  const Wrapper = physics ? InstancedRigidBodies : Fragment
  const wrapperProps = physics
    ? { ref: rigidBody, instances: rigidBodiesProps, colliders: 'cuboid' }
    : {}

  useFrame((state, delta) => {
    rubiks.render(instancedMesh.current, delta)
  })
  return (
    <group
      ref={groupRef}
      {...props}
      onClick={(e) => {
        e.stopPropagation()
        rubiks.rotatePlane(new Vector3(-1, 0, 0))
      }}
    >
      <Wrapper {...wrapperProps}>
        <instancedMesh
          ref={instancedMesh}
          args={[null, null, sideCount ** 3]}
          instanceCount={sideCount ** 3}
          onUpdate={(self) => {
            console.log(self)
          }}
          name='activeSun'
        >
          <bufferGeometry attributes={attributes} />
          <meshBasicMaterial
            color='red'
            onBeforeCompile={(shader) => {
              console.log(shader.fragmentShader)
              console.log(shader)
            }}
          />
          {/*  <rubiksCubeShaderMaterial
            onBeforeCompile={(shader) => {
              console.log(shader)
            }}
          /> */}
        </instancedMesh>
      </Wrapper>
    </group>
  )
}
