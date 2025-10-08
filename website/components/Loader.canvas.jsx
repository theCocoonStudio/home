import { useProgress, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { compileSceneAsync } from 'website/utils/gl'

export const CanvasLoader = ({ setReady, setHasScrolled }) => {
  const { active } = useProgress()

  const compiledSceneId = useRef()

  const { scene, camera, gl } = useThree(({ scene, camera, gl }) => ({
    scene,
    camera,
    gl,
  }))

  useEffect(() => {
    if (scene && compiledSceneId.current !== scene.uuid && !active) {
      compileSceneAsync(gl, scene, camera, () => {
        setReady(true)
        compiledSceneId.current === scene.uuid
      })
    }
  }, [active, camera, gl, scene, setReady])

  const zeroScroll = useRef(true)
  const scroll = useScroll()

  useFrame(() => {
    if (scroll.offset > 0) {
      if (zeroScroll.current) {
        setHasScrolled(true)
        zeroScroll.current = false
      }
    } else {
      if (!zeroScroll.current) {
        setHasScrolled(false)
        zeroScroll.current = true
      }
    }
  })
}
