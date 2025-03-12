import { Mask, useFont, useMask } from '@react-three/drei'
import Karla from 'assets/Karla_ExtraBold.json'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

export const TitleText = forwardRef(function TitleText(
  { text = 'hello', fontSize = 1.0, id = 1, mask = true, ...props },
  forwardedRef,
) {
  const mesh = useRef()
  const font = useFont(Karla)
  const shape = useMemo(
    () => font.generateShapes(text, 1.0 * fontSize),
    [font, fontSize, text],
  )

  const boundsCallback = useCallback(({ min, max }) => {
    console.log(mesh)
  }, [])

  const stencil = useMask(id)

  useImperativeHandle(
    forwardedRef,
    () => ({ stencil: mask ? stencil : null, boundsCallback }),
    [boundsCallback, mask, stencil],
  )

  useEffect(() => {
    mesh.current.geometry.center()
  }, [])
  return (
    <>
      <Mask colorWrite={!mask} id={id} {...props} ref={mesh} depthWrite>
        <shapeGeometry args={[shape]} />
      </Mask>
    </>
  )
})
