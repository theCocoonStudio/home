import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Environment, PerspectiveCamera, Preload } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useFrame } from '@react-three/fiber'

/* simulation mesh */
export const Home = forwardRef(function Home(
  { time, bufferTime, progressRef },
  forwardedRef,
) {
  const cubeScene = useRef()
  const gallery = useRef()
  useImperativeHandle(forwardedRef, () => [
    cubeScene.current.sun,
    gallery.current.sun,
  ])

  const {
    theme: colorTheme,
    state: { current },
  } = usePage()

  useFrame((state, delta) => {
    // cube scene
    if (progressRef.current[0] < 1 - bufferTime / time && current === 1) {
      cubeScene.current.active(delta)
    } else {
      cubeScene.current.inactive(delta)
    }
    // gallery scene
    if (progressRef.current[1] < 1 - bufferTime / time && current === 2) {
      gallery.current.active(delta)
    } else {
      gallery.current.inactive(delta)
    }
  })

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
        active={current === 1}
        bufferTime={bufferTime}
      />

      <Gallery ref={gallery} active={current === 2} bufferTime={bufferTime} />
    </>
  )
})
