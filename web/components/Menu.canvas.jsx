import {
  Html,
  MeshPortalMaterial,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { forwardRef, useEffect, useRef } from 'react'
import { Effects } from './Effects.canvas'
import {
  DotScreen,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { DotScreenShader } from 'three/examples/jsm/Addons.js'

export const Menu = forwardRef(function Menu(
  { colorTheme, menu, menuRef, ppwuRef, ...props },
  forwardedRef,
) {
  const { width, height } = useThree(({ size }) => size)
  const sub1 = useRef()
  const sub2 = useRef()
  const sub3 = useRef()

  useEffect(() => {
    sub1.current = menuRef.current.children[0]
    sub2.current = menuRef.current.children[1]
    sub3.current = menuRef.current.children[2]
  }, [menuRef])
  return (
    <>
      <mesh ref={forwardedRef} {...props}>
        <planeGeometry args={[1, (1 * (height - 200)) / width]} />
        <meshStandardMaterial
          onBeforeCompile={(shader) => {
            console.log(shader)
            console.log(DotScreenShader)
          }}
          color={colorTheme.charcoal}
          opacity={0.1}
          transparent
        />
      </mesh>
      {/* <Checkbox
        visible={menu}
        colorTheme={colorTheme}
        scale={40 / ppwuRef.current.x}
      /> */}
    </>
  )
})

const Checkbox = forwardRef(function Checkbox(
  { colorTheme, scale, ...props },
  ref,
) {
  return (
    <mesh ref={ref} scale={[1, 1, 1]} {...props}>
      <boxGeometry args={[scale, scale, scale]} />
      <meshBasicMaterial color={colorTheme.slate} />
    </mesh>
  )
})
