import { useProgress, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { compileSceneAsync } from 'website/utils/gl'

export const CanvasLoader = ({ ready, setReady, setAtStartOrFinish }) => {
  const { active } = useProgress()

  const compiledSceneId = useRef()

  const { scene, camera, gl } = useThree(({ scene, camera, gl }) => ({
    scene,
    camera,
    gl,
  }))

  useEffect(() => {
    if (!ready && scene && compiledSceneId.current !== scene.uuid && !active) {
      compileSceneAsync(gl, scene, camera, () => {
        setReady(true)
        compiledSceneId.current === scene.uuid
      })
    }
  }, [active, camera, gl, ready, scene, setReady])

  const atStart = useRef(true)
  const atFinish = useRef(false)
  const scroll = useScroll()

  useFrame(() => {
    if (scroll.offset > 0 && scroll.offset < 1) {
      if (atStart.current || atFinish.current) {
        setAtStartOrFinish({ start: false, finish: false, either: false })
        atStart.current = false
        atFinish.current = false
      }
    } else {
      if (scroll.offset === 0) {
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
