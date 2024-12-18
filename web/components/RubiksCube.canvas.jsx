import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useFrame } from '@react-three/fiber'
import { RubiksCube3 } from 'web/helpers/rubiksCubeUtils'
import { Color, Vector3 } from 'three'
import { useControls, folder } from 'leva'

export const RubiksCube = forwardRef(function RubiksCube(
  {
    pause,
    sideCount = 3, // make arbitrary in future
    colorTheme,
    renderPriority,
    store,
    setGradientColors,
    ...props
  },
  forwardedRef,
) {
  const groupRef = useRef(null)
  const instancedMesh = useRef(null)
  const geometry = useRef()

  useImperativeHandle(forwardedRef, () => groupRef.current)

  const _faceColors = useMemo(
    () => ({
      face1: colorTheme.midnight,
      face2: colorTheme.slate,
      face3: colorTheme.purple,
      face4: colorTheme.white,
      face5: colorTheme.gunmetal,
      face6: colorTheme.charcoal,
    }),
    [
      colorTheme.charcoal,
      colorTheme.gunmetal,
      colorTheme.midnight,
      colorTheme.purple,
      colorTheme.slate,
      colorTheme.white,
    ],
  )

  const _gradColors = useMemo(
    () => ({
      top: colorTheme.charcoal,
      middle: colorTheme.gunmetal,
      bottom: colorTheme.slate,
    }),
    [colorTheme.charcoal, colorTheme.gunmetal, colorTheme.slate],
  )

  const { face1, face2, face3, face4, face5, face6, top, middle, bottom } =
    useControls(
      {
        Cube: folder(_faceColors, { collapsed: true }),
        Background: folder(_gradColors, { collapsed: true }),
      },
      { store },
    )

  const rubiks = useRef(
    new RubiksCube3([
      new Color(face1),
      new Color(face2),
      new Color(face3),
      new Color(face4),
      new Color(face5),
      new Color(face6),
    ]),
  )

  const { color, position, normal, uv, meshPosition } = useMemo(() => {
    const { color, position, normal, uv, meshPosition } =
      rubiks.current.attributes
    return {
      color: new Float32Array(color),
      position: new Float32Array(position),
      normal: new Float32Array(normal),
      uv: new Float32Array(uv),
      meshPosition: new Float32Array(meshPosition),
    }
  }, [])

  useEffect(() => {
    rubiks.current.setColors([
      new Color(face1),
      new Color(face2),
      new Color(face3),
      new Color(face4),
      new Color(face5),
      new Color(face6),
    ])
    const attr = geometry.current.getAttribute('color')
    attr.set(new Float32Array(rubiks.current.attributes.color))
    attr.needsUpdate = true
  }, [face1, face2, face3, face4, face5, face6])

  useEffect(() => {
    setGradientColors([top, middle, bottom])
  }, [bottom, middle, setGradientColors, top])

  const secsElapsed = useRef(0)
  const rotation = useRef(0.0)

  // eslint-disable-next-line
  useFrame(({ clock }, delta) => {
    if (!pause.current) {
      secsElapsed.current += delta
      rotation.current += delta / 4
      if (secsElapsed.current > 1.3) {
        secsElapsed.current = 0
        const index = Math.floor(Math.random() * 3)
        const val = Math.floor(Math.random() * 2) ? 1 : -1
        const v = new Vector3(0, 0, 0).setComponent(index, val)
        rubiks.current.rotatePlane(v)
      }
    }

    groupRef.current.rotation.y = rotation.current
    groupRef.current.rotation.x = rotation.current
    groupRef.current.rotation.z = rotation.current

    // update position and rotation
    rubiks.current.render(instancedMesh.current, delta)
  }, renderPriority)

  return (
    <group ref={groupRef} {...props}>
      <instancedMesh
        ref={instancedMesh}
        args={[null, null, sideCount ** 3]}
        instanceCount={sideCount ** 3}
      >
        <bufferGeometry ref={geometry}>
          <bufferAttribute
            attach='attributes-color'
            array={color}
            itemSize={3}
            count={color.length / 3}
          />
          <bufferAttribute
            attach='attributes-position'
            array={position}
            itemSize={3}
            count={position.length / 3}
          />
          <bufferAttribute
            attach='attributes-normal'
            array={normal}
            itemSize={3}
            count={normal.length / 3}
          />
          <bufferAttribute
            attach='attributes-uv'
            array={uv}
            itemSize={2}
            count={uv.length / 2}
          />
          <instancedBufferAttribute
            attach='attributes-meshPosition'
            array={meshPosition}
            itemSize={3}
            count={meshPosition.length / 3}
          />
        </bufferGeometry>
        <meshStandardMaterial
          roughness={0.2}
          metalness={0.4}
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
    </group>
  )
})
