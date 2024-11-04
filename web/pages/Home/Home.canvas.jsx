import { forwardRef, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'

/* simulation mesh */
export const Home = forwardRef(function Home(
  { time, progressRef, current },
  forwardedRef,
) {
  const cubeScene = useRef()
  const gallery = useRef()
  useImperativeHandle(forwardedRef, () => [cubeScene, gallery])

  const {
    theme: colorTheme,
    state: { pause },
  } = usePage()

  return (
    <>
      <Preload all />
      <color attach='background' args={[colorTheme.black]} />
      <PerspectiveCamera makeDefault position-z={1} />

      {/* {(current === 1 || current === 5) && ( */}
      <CubeScene
        ref={cubeScene}
        progressRef={progressRef}
        time={time}
        active={current === 1}
      />
      {/* )} */}
      {/* {current <= 2 && ( */}
      <Gallery
        ref={gallery}
        progressRef={progressRef}
        time={time}
        active={current === 2}
      />
      {/* )} */}
    </>
  )
})
