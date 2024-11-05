import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Environment, PerspectiveCamera, Preload } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'

/* simulation mesh */
export const Home = forwardRef(function Home(
  { time, bufferTime, progressRef, current },
  forwardedRef,
) {
  const cubeScene = useRef()
  const gallery = useRef()
  useImperativeHandle(forwardedRef, () => [cubeScene, gallery])

  const { theme: colorTheme } = usePage()

  return (
    <>
      <Preload all />
      <color attach='background' args={[colorTheme.black]} />
      <PerspectiveCamera makeDefault position-z={1} />
      <Environment
        preset='studio'
        background={false}
        environmentIntensity={[1, 0.5, 1, 1, 1][current - 1]}
      />
      {current === 2 && <fog attach='fog' args={['#050505', 0, 13]} />}
      <CubeScene
        ref={cubeScene}
        progressRef={progressRef}
        time={time}
        active={current === 1}
        bufferTime={bufferTime}
      />

      <Gallery
        ref={gallery}
        progressRef={progressRef}
        time={time}
        active={current === 2}
        bufferTime={bufferTime}
      />
    </>
  )
})
