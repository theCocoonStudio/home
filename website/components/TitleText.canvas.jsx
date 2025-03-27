import { DragControls, Mask, useFont, useMask } from '@react-three/drei'
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
  { text = 'hello', fontSize: fontPx = 20, id = 1, mask = true, ...props },
  forwardedRef,
) {
  const mesh = useRef()
  const font = useFont(Orbitron)

  const [fontSize, setFontSize] = useState()

  const shape = useMemo(
    () => fontSize && font.generateShapes(text, 1.0 * fontSize),
    [font, fontSize, text],
  )

  const boundsCallback = useCallback(
    ({ ppwu }) => {
      setFontSize(fontPx / ppwu.y)
    },
    [fontPx],
  )

  const stencil = useMask(id)

  useImperativeHandle(
    forwardedRef,
    () => ({ stencil: mask ? stencil : null, boundsCallback }),
    [boundsCallback, mask, stencil],
  )

  const centerG = useCallback((renderer, scene, camera, geometry) => {
    geometry.center()
  }, [])
  useEffect(() => {}, [])
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
      >
        {/* <meshStandardMaterial color='green' /> */}
        <shapeGeometry args={[shape]} />
      </Mask>
    ) : (
      <mesh onBeforeRender={centerG}>
        <shapeGeometry args={[shape]} />
      </mesh>
    ))
  )
})
