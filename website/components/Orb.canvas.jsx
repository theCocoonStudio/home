import { DragControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Color, Matrix4, Quaternion, Vector2, Vector3 } from 'three'
import { usePointer } from 'website/hooks/usePointer'
import texture from 'assets/disc.png'
import { damp3, dampC } from 'maath/easing'

const vert = `
      attribute float size;
			attribute vec3 customColor;

			varying vec3 vColor;

			void main() {

				vColor = customColor;

				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

				gl_PointSize = size;

				gl_Position = projectionMatrix * mvPosition;

			}
`
const frag = `
uniform vec3 color;
			uniform sampler2D pointTexture;
			

			varying vec3 vColor;

			void main() {

				gl_FragColor = vec4( color * vColor, .6 );

				gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

				

			}`
export const Orb = forwardRef(function Orb(
  {
    padding,
    dotRadius = 15,
    index,
    orbSize = 25,
    children,
    color,
    count,
    last = false,
    activeIndex,
    ...props
  },
  forwardedRef,
) {
  const ref = useRef()

  const scale = useRef(new Vector3(1.0, 1.0, 1.0))
  const orbPosition = useRef(new Vector3())
  const orbMatrixTarget = useRef(new Matrix4())
  const dotBoundsY = useRef(new Vector2())

  const [positions, setPositions] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])

  const boundsCallback = useCallback(
    ({ min, max, ppwu }) => {
      // section y-bounds
      const yMax = max.y - (index * (max.y - min.y)) / 3
      const yMin = yMax - (max.y - min.y) / 3
      // set refs
      scale.current.set(orbSize / ppwu.x, orbSize / ppwu.x, orbSize / ppwu.x)
      orbPosition.current.set(
        min.x + (max.x - min.x) / 2,
        yMax - scale.current.y / 2,
        0,
      )
      orbMatrixTarget.current.compose(
        orbPosition.current.clone(),
        new Quaternion().setFromEuler(ref.current.rotation.clone()),
        scale.current.clone(),
      )
      ref.current.position.setFromMatrixPosition(orbMatrixTarget.current)
      ref.current.scale.setFromMatrixScale(orbMatrixTarget.current)
      // dots
      const bottomPadding = last ? 0.0 : (6 * padding) / ppwu.y
      dotBoundsY.current.set(
        yMin + bottomPadding,
        yMax - scale.current.y - (6 * padding) / ppwu.y,
      )
      const positions = []
      const colors = []
      const sizes = []
      const black = new Color(color)
      for (let i = 0; i < count; i++) {
        positions.push(
          orbPosition.current.x,
          dotBoundsY.current.x +
            (i * (dotBoundsY.current.y - dotBoundsY.current.x)) / (count - 1),
          orbPosition.current.z,
        )
        colors.push(black.r, black.g, black.b)
        sizes.push(dotRadius)
      }
      setPositions(new Float32Array(positions))
      setColors(new Float32Array(colors))
      setSizes(new Float32Array(sizes))
    },
    [index, orbSize, last, padding, color, count, dotRadius],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      boundsCallback,
      ref: ref.current,
    }),
    [boundsCallback],
  )

  const { setPointer } = usePointer()

  const points = useRef()
  const [pointTexture] = useTexture([texture])

  const activeColor = useRef(new Color(color))
  const group = useRef()
  const drag = useRef(new Vector3())
  const toDamp = useRef(true)

  useFrame((state, delta) => {
    if (toDamp.current) {
      damp3(group.current?.position, drag.current, 0.1, delta)
      dampC(ref.current?.material.color, activeColor.current, 0.15, delta)
    } else {
      group.current?.position.copy(drag.current)
      ref.current?.material.color.copy(activeColor.current)
    }
  })
  return (
    <>
      <DragControls
        autoTransform={false}
        onDragStart={() => {
          toDamp.current = false
          activeColor.current.setStyle(color)
          activeIndex.current = index
        }}
        onDrag={(localMatrix) => {
          drag.current.setFromMatrixPosition(localMatrix)
        }}
        onDragEnd={() => {
          drag.current.set(0, 0, 0)
          toDamp.current = true
        }}
        onHover={(hovering) => {
          activeColor.current.setStyle(color)
          hovering && activeColor.current.offsetHSL(0, 0.1, 0.15)
        }}
        dragConfig={{
          preventScroll: true,
        }}
      >
        <group ref={group}>
          <mesh
            ref={ref}
            onPointerOver={() => {
              setPointer(true)
            }}
            onPointerOut={() => {
              setPointer(false)
            }}
            {...props}
          >
            {children}
            <meshStandardMaterial color={color} transparent opacity={0.8} />
          </mesh>
        </group>
      </DragControls>
      {positions.length > 0 && (
        <points ref={points}>
          <bufferGeometry>
            <bufferAttribute
              attach='attributes-customColor'
              args={[colors, 3]}
            />
            <float32BufferAttribute
              attach='attributes-position'
              args={[positions, 3]}
            />
            <float32BufferAttribute
              attach='attributes-size'
              args={[sizes, 1]}
            />
          </bufferGeometry>
          <shaderMaterial
            args={[
              {
                uniforms: {
                  color: { value: new Color(0xffffff) },
                  pointTexture: {
                    value: pointTexture,
                  },
                },
                vertexShader: vert,
                fragmentShader: frag,
              },
            ]}
          />
        </points>
      )}
    </>
  )
})
