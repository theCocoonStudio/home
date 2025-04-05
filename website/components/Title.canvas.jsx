import { Html } from '@react-three/drei'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import styles from 'website/styles/Title.canvas.module.css'

export const Title = forwardRef(function Title(
  { transparentRange = [0.155, 0.2 - 0.155] },
  ref,
) {
  const {
    lengths: { navHeight },
    utilReturn: { style, className },
  } = useTheme('orbitron', 600, undefined, styles.text)

  const wrapperStyle = useMemo(
    () => ({ height: `${navHeight}px` }),
    [navHeight],
  )
  const title = useRef()
  const text = useRef()

  const scrollCallback = useCallback(
    (state, delta, scroll) => {
      // make opaque
      const offset = scroll.range(...transparentRange)
      text.current?.style && (text.current.style.opacity = offset)
      const target = scroll.range(...transparentRange)
      title.current?.style &&
        (title.current.style.top = `calc((50vh - ${navHeight}px / 2) * ${target} * -1)`)
    },
    [navHeight, transparentRange],
  )

  const boundsCallback = useCallback(
    ({ scroll }) => {
      scrollCallback(undefined, undefined, scroll)
    },
    [scrollCallback],
  )

  useImperativeHandle(ref, () => ({ scrollCallback, boundsCallback }), [
    boundsCallback,
    scrollCallback,
  ])

  return (
    <Html center ref={title} className={styles.title} style={wrapperStyle}>
      <h1 style={style} className={className} ref={text}>
        <span>about</span>
      </h1>
    </Html>
  )
})
