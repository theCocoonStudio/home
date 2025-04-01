import { Mask, useFont, useMask } from '@react-three/drei'
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

  const shape = useMemo(() => {
    if (fontSize) {
      return font.generateShapes(text, 1.0 * fontSize)
    }
  }, [font, fontSize, text])

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

  useImperativeHandle(
    forwardedRef,
    () => ({ stencil: mask ? stencil : null, boundsCallback, scrollCallback }),
    [boundsCallback, mask, scrollCallback, stencil],
  )

  const centerG = useCallback((renderer, scene, camera, geometry) => {
    geometry.center()
    geometry.computeTangents()
  }, [])

  return (
    shape &&
    (mask ? (
      <Mask
        colorWrite={!mask}
        id={id}
        {...props}
        ref={mesh}
        depthWrite
        onBeforeRender={centerG}
        position-z={0.5}
        position-y={startY}
        visible={false}
      >
        <meshPhongMaterial
          toneMapped={false}
          color='black'
          transparent
          opacity={0}
        />
        <shapeGeometry args={[shape]} />
      </Mask>
    ) : (
      <mesh
        onBeforeRender={centerG}
        position-z={0.5}
        position-y={startY}
        ref={mesh}
        visible={false}
      >
        <shapeGeometry args={[shape]} />
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
