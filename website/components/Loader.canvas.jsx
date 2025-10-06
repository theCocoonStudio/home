import { useProgress } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { compileSceneAsync } from 'website/utils/gl'

export const CanvasLoader = ({ setReady }) => {
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
}
