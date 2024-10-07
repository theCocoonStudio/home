import { MeshTransmissionMaterial } from '@react-three/drei'
import { InstancedRigidBodies } from '@react-three/rapier'
import {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFrame } from '@react-three/fiber'
import { RubiksCube3 } from 'web/helpers/rubiksCubeUtils'
import { Color, Vector3 } from 'three'

export const RubiksCube = forwardRef(function RubiksCube(
  {
    sideCount = 3, // make arbitrary in future
    physics = false,
    colorTheme,
    ...props
  },
  forwardedRef,
) {
  const groupRef = useRef(null)
  const instancedMesh = useRef(null)
  const rigidBody = useRef(null)
  useImperativeHandle(forwardedRef, () => groupRef.current)

  const { rigidBodiesProps, attributes, rubiks } = useMemo(() => {
    const rubiks = new RubiksCube3([
      new Color(colorTheme.midnight),
      new Color(colorTheme.slate),
      new Color(colorTheme.purple),
      new Color(colorTheme.white),
      new Color(colorTheme.gunmetal),
      new Color(colorTheme.charcoal),
    ])
    const { attributes, rigidBodiesProps } = rubiks

    return { rigidBodiesProps, attributes, rubiks }
  }, [])

  const Wrapper = physics ? InstancedRigidBodies : Fragment
  const wrapperProps = physics
    ? { ref: rigidBody, instances: rigidBodiesProps, colliders: 'cuboid' }
    : {}

  useFrame((state, delta) => {
    rubiks.render(instancedMesh.current, delta)
  }, -1)
  return (
    <group
      ref={groupRef}
      {...props}
      onClick={(e) => {
        e.stopPropagation()
        const index = Math.floor(Math.random() * 3)
        const val = Math.floor(Math.random() * 2) ? 1 : -1
        const v = new Vector3(0, 0, 0).setComponent(index, val)
        rubiks.rotatePlane(v)
      }}
    >
      <Wrapper {...wrapperProps}>
        <instancedMesh
          ref={instancedMesh}
          args={[null, null, sideCount ** 3]}
          instanceCount={sideCount ** 3}
        >
          <bufferGeometry attributes={attributes} />
          <meshStandardMaterial
            roughness={0.2}
            metalness={0.8}
            /*    transparent
            opacity={0.8} */
            color='red'
            onBeforeCompile={(shader) => {
              shader.fragmentShader = `
              varying vec3 setColor;
              ${shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                'vec4 diffuseColor = vec4( setColor, opacity );',
              )}`
              shader.vertexShader = `
              attribute vec3 color;
              attribute vec3 meshPosition;
              varying vec3 setColor;
             ${shader.vertexShader.replace(
               `void main() {`,
               `void main() {
              int toColor = int(dot(meshPosition, normal));
              setColor = color;
              if (toColor != 1) {
              setColor = vec3(0,0,0);
              }
              `,
             )}
             `
            }}
          />
        </instancedMesh>
      </Wrapper>
    </group>
  )
})
