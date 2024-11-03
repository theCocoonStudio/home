import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from 'react'
import { PerspectiveCamera, Preload } from '@react-three/drei'
import { usePage } from '../../hooks/usePage'
import { useProgress } from 'src/hooks'
import { Gallery } from './scenes/Gallery.canvas'
import { CubeScene } from './scenes/CubeScene.canvas'
import { Effects } from 'web/components/Effects.canvas.jsx'

/* simulation mesh */
export function Home({ time = 20, setProgressColor }) {
  const cubeScene = useRef()
  const gallery = useRef()

  const [isPending, startTransition] = useTransition()
  const [current, setCurrent] = useState(1)
  const [sun, setSun] = useState()

  const {
    theme: colorTheme,
    state: { pause },
  } = usePage()

  const { progressRef, setElapsed } = useProgress(
    5,
    time,
    pause,
    (progress, curr) => {
      const newColor = [colorTheme.slate, colorTheme.black][curr - 1]
      startTransition(() => {
        setCurrent(curr)
        setSun([cubeScene, gallery][curr - 1].current)
        setProgressColor(newColor)
      })
      document.documentElement.style.setProperty('--progress', newColor)
    },
  )

  return (
    <>
      <Effects current={current} sun={sun} />
      <Preload all />
      <color attach='background' args={[colorTheme.black]} />
      <PerspectiveCamera makeDefault position-z={1} />

      {(current === 1 || current === 5) && (
        <CubeScene
          ref={cubeScene}
          progressRef={progressRef}
          time={time}
          active={current === 1}
        />
      )}
      {current <= 2 && (
        <Gallery
          ref={gallery}
          progressRef={progressRef}
          time={time}
          active={current === 2}
        />
      )}
    </>
  )
}
