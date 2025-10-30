import { useProgress } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useTransition } from 'react'
import { compileSceneAsync } from 'website/utils/gl'
import { useScrollControls } from 'src'
import { useParams } from 'react-router'

export const CanvasLoader = ({ ready, setReady, setAtStartOrFinish }) => {
  // external, independent data
  const { active } = useProgress()

  const { scene, camera, gl } = useThree(({ scene, camera, gl }) => ({
    scene,
    camera,
    gl,
  }))
  const { '*': splat } = useParams()

  const { getOffset } = useScrollControls()

  // internal, dependent data
  const compiledSplat = useRef()
  const [isPending, startTransition] = useTransition()

  // compile scene and set page ready = true
  useEffect(() => {
    if (
      !ready &&
      scene &&
      !active &&
      camera.userData?.splat === splat && // only compile if new scene is ready
      compiledSplat.current !== splat // invalidates compilation on page change & prevents double compilation
    ) {
      try {
        compiledSplat.current = splat // prevents double compilation
        compileSceneAsync(gl, scene, camera, () => {
          document.documentElement.style.setProperty(
            '--reserved-loader-global-transition-speed',
            '1s',
          )
          startTransition(() => {
            setReady(true)
          })
        })
      } catch (e) {
        if (import.meta.env.MODE === 'development') {
          console.warn('Loader.canvas: error during compilation')
          console.error(e)
        }
        compiledSplat.current = undefined // enables compilation re-try if it fails
      }
    }
  }, [active, camera, gl, ready, scene, setReady, splat])

  // declarative scroll data
  const atStart = useRef(true)
  const atFinish = useRef(false)
  useFrame(() => {
    const offset = getOffset()

    if (offset > 0 && offset < 1) {
      if (atStart.current || atFinish.current) {
        setAtStartOrFinish({ start: false, finish: false, either: false })
        atStart.current = false
        atFinish.current = false
      }
    } else {
      if (offset === 0) {
        if (!atStart.current || atFinish.current) {
          setAtStartOrFinish({ start: true, finish: false, either: true })
          atStart.current = true
          atFinish.current = false
        }
      } else {
        if (atStart.current || !atFinish.current) {
          setAtStartOrFinish({ start: false, finish: true, either: true })
          atStart.current = false
          atFinish.current = true
        }
      }
    }
  })
}
