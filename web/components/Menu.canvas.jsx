import { useThree } from '@react-three/fiber'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { DotScreenShader } from 'three/examples/jsm/Addons.js'

import { Vector2 } from 'three'

export const Menu = forwardRef(function Menu(
  { colorTheme, menu, menuRef, ...props },
  forwardedRef,
) {
  const { width, height } = useThree(({ size }) => size)
  const mesh = useRef()
  useImperativeHandle(forwardedRef, () => mesh.current)
  const sub1 = useRef()
  const sub2 = useRef()
  const sub3 = useRef()
  const material = useRef()
  const tSize = useRef(new Vector2(600, 250))

  useEffect(() => {
    sub1.current = menuRef.current.children[0]
    sub2.current = menuRef.current.children[1]
    sub3.current = menuRef.current.children[2]
  }, [menuRef])

  return (
    <>
      <mesh ref={mesh} {...props}>
        <planeGeometry args={[1, (1 * (height - 200)) / width]} />
        <meshStandardMaterial
          ref={material}
          onBeforeCompile={(shader) => {
            shader.uniforms = {
              ...shader.uniforms,
              ...DotScreenShader.uniforms,
              tSize: {
                value: tSize.current,
              },
            }
            shader.vertexShader = `              
              varying vec2 vUv;
             ${shader.vertexShader.replace(
               `void main() {`,
               `void main() {
              vUv = uv;
              `,
             )}
             `
            shader.fragmentShader = `
              varying vec2 vUv;
              uniform vec2 center;
		          uniform float angle;
		          uniform float scale;
		          uniform vec2 tSize;
              float pattern() {
			          float s = sin( angle ), c = cos( angle );
                vec2 tex = vUv * tSize - center;
                vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;
                return ( sin( point.x ) * sin( point.y ) ) * 4.0;
              }
              ${shader.fragmentShader.replace(
                `vec4 diffuseColor = vec4( diffuse, opacity );`,
                `vec4 diffuseColor = vec4( diffuse, opacity );
                vec4 newColor = vec4(diffuseColor);
                float average = ( newColor.r + newColor.g + newColor.b ) / 3.0;
                diffuseColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), newColor.a );
                `,
              )}`
          }}
          color={colorTheme.slate}
          opacity={0.001}
          transparent
        />
      </mesh>
    </>
  )
})
