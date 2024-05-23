import { useEffect, useRef, useState } from 'react'
import { DoubleSide, Texture } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei'
import { ShaderPassesTexture, ShaderPass, configureShaderMaterial } from 'src'

const vert = `
attribute vec3 center;
varying vec3 vCenter;

void main() {

vCenter = center;

gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}`

const frag = `
uniform float thickness;

varying vec3 vCenter;

void main() {

vec3 afwidth = fwidth( vCenter.xyz );

vec3 edge3 = smoothstep( ( thickness - 1.0 ) * afwidth, thickness * afwidth, vCenter.xyz );

float edge = 1.0 - min( min( edge3.x, edge3.y ), edge3.z );

gl_FragColor.rgb = gl_FrontFacing ? vec3( 0.9, 0.9, 1.0 ) : vec3( 0.4, 0.4, 0.5 );
  gl_FragColor = vec4(0, 1, 0, 1); // return reddish-purple

			}
`
const frag2 = `
uniform sampler2D old;

varying vec3 vCenter;

void main() {
  vec2 texcoord = vec2(0.5, 0.5);
  gl_FragColor = texture2D(old, texcoord); // return reddish-purple

			}
`

const uniforms = { thickness: { value: 1.0 } }
const uniforms2 = { old: { value: new Texture() } }

configureShaderMaterial({
  MyMaterial: { uniforms, vert, frag },
  MyMaterial2: { uniforms: uniforms2, vert, frag: frag2 },
})

export default function App() {
  useEffect(() => {
    /* cv.imread() */
  }, [])
  return (
    <>
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }} id='mainCanvas'>
        <ambientLight intensity={0.5} />
        <directionalLight /* intensity={3} */ position={[10, 10, 5]} />
        <Cube />
        <Dodecahedron position={[0, 1, 0]} scale={0.2} />
        <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
        <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color='orange' />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
      <canvas id='hud' />
    </>
  )
}

function Cube() {
  const textRef = useRef()
  const textRef2 = useRef()
  const fbosRef = useRef()
  /* useFrame(({gl}) => {gl}) */

  const { current: firstPass } = fbosRef

  useEffect(() => {
    console.log(textRef2)
    console.log(fbosRef)
    console.log(firstPass)
  }, [textRef2, fbosRef, firstPass])
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <ShaderPassesTexture ref={fbosRef}>
          <ShaderPass /* attach='map' */ anisotropy={16} name='firstPass'>
            {(fbos) => (
              <>
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                {/* <color attach='background' args={['black']} /> */}
                <Environment preset='city' background />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <mesh ref={textRef}>
                  <sphereGeometry />
                  <myMaterial thickness={1.0} side={DoubleSide} alphaToCoverage />
                </mesh>
                {/* <Dodecahedron /> */}
              </>
            )}
          </ShaderPass>
          <ShaderPass attach='map' name='secondPass'>
            {(fbos) => (
              <>
                <PerspectiveCamera /* makeDefault manual */ aspect={1 / 1} position={[0, 0, 5]} />
                {/* <color attach='background' args={['black']} /> */}
                <Environment preset='warehouse' background />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <mesh>
                  <boxGeometry />
                  <myMaterial2 ref={textRef2} old={fbos?.firstPass?.current} side={DoubleSide} />
                </mesh>
                {/* <Dodecahedron /> */}
              </>
            )}
          </ShaderPass>
        </ShaderPassesTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

function Dodecahedron(props) {
  const meshRef = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame(() => (meshRef.current.rotation.x += 0.01))
  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : '#5de4c7'} />
      </mesh>
    </group>
  )
}
