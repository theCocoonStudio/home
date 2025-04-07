import { Mask, useFont, useMask } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import Orbitron from 'assets/Orbitron_SemiBold.json'

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ShapeGeometry, Vector2 } from 'three'

const vertexShader = `
precision highp float;

void main(){
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
const fragmentShader = `
precision highp float;

void main(){
    gl_FragColor = vec4(0, 0, 0, 1);
}

`
export const TitleText = forwardRef(function TitleText(
  {
    text = 'hello',
    fontSize: fontPx = 20,
    id = 1,
    mask = true,
    transparentRange = [0.186, 0.25 - 0.186],
    targetRange = [0.2, 0.25 - 0.2],
    startY = 0.03,
    targetY = 0.09,
    ...props
  },
  forwardedRef,
) {
  const mesh = useRef()
  const font = useFont(Orbitron)

  const [fontSize, setFontSize] = useState()

  const geometry = useMemo(() => {
    if (fontSize) {
      const shapes = font.generateShapes(text, fontSize)
      const geometry = new ShapeGeometry(shapes)
      geometry.center()
      return geometry
    }
  }, [font, fontSize, text])

  useEffect(
    () => () => {
      geometry && geometry.dispose()
    },
    [geometry],
  )

  const boundsCallback = useCallback(
    ({ ppwu }) => {
      setFontSize(fontPx / ppwu.y)
    },
    [fontPx],
  )

  const scrollCallback = useCallback(
    (state, delta, scroll) => {
      // make opaque
      const visible = scroll.visible(transparentRange[0], 1)
      const transparency = scroll.range(...transparentRange)
      mesh.current.visible = visible
      mesh.current.material.opacity = transparency
      // move to targetY
      const target = scroll.range(...targetRange)
      target > 0 &&
        (mesh.current.position.y = startY + target * (targetY - startY))
    },
    [startY, targetRange, targetY, transparentRange],
  )

  const stencil = useMask(id)

  const camera = useThree(({ camera }) => camera)

  const customForceConfig = useMemo(() => {
    const materialConfig = {
      vertexShader,
      fragmentShader,
    }
    return geometry
      ? {
          materialConfig,
          geometry,
          camera,
          fboConfig: { isNull: true },
          onBeforeRender: (shaderPass) => {
            shaderPass.mesh.visible = mesh.current.visible
            shaderPass.mesh.position.copy(mesh.current.position)
          },
        }
      : undefined
  }, [camera, geometry])

  useImperativeHandle(
    forwardedRef,
    () => ({
      stencil: mask ? stencil : null,
      boundsCallback,
      scrollCallback,
      customForceConfig,
    }),
    [boundsCallback, customForceConfig, mask, scrollCallback, stencil],
  )

  return (
    geometry &&
    (mask ? (
      <Mask
        colorWrite={!mask}
        id={id}
        {...props}
        ref={mesh}
        depthWrite
        position-z={0.5}
        position-y={startY}
        visible={false}
        geometry={geometry}
      >
        <meshPhongMaterial
          toneMapped={false}
          color='black'
          transparent
          opacity={0}
        />
      </Mask>
    ) : (
      <mesh
        geometry={geometry}
        position-z={0.5}
        position-y={startY}
        ref={mesh}
        visible={false}
      >
        <meshPhongMaterial
          toneMapped={false}
          color='black'
          transparent
          opacity={0}
        />
      </mesh>
    ))
  )
})
