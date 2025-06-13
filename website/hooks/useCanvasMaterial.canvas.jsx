import { useTexture } from '@react-three/drei'
import metal from 'website/assets/canvas/metal.png'
import norm from 'website/assets/canvas/norm.png'
import rough from 'website/assets/canvas/rough.png'
import { useEffect, useMemo } from 'react'
import { MeshStandardMaterial, RepeatWrapping } from 'three'

export const useCanvasMaterial = () => {
  const [metalnessMap, normalMap, roughnessMap] = useTexture([
    metal,
    norm,
    rough,
  ])
  const { material, dispose } = useMemo(() => {
    const leftRight = new MeshStandardMaterial({})
    const topBottom = new MeshStandardMaterial({})
    const front = new MeshStandardMaterial({})
    const back = new MeshStandardMaterial({})
    const materials = [leftRight, topBottom, front, back]
    materials.forEach((material) => {
      material.metalnessMap = metalnessMap.clone()
      material.normalMap = normalMap.clone()
      material.roughnessMap = roughnessMap.clone()
      material.normalMap.wrapS = RepeatWrapping
      material.normalMap.wrapT = RepeatWrapping
      material.metalnessMap.wrapS = RepeatWrapping
      material.metalnessMap.wrapT = RepeatWrapping
      material.roughnessMap.wrapS = RepeatWrapping
      material.roughnessMap.wrapT = RepeatWrapping
      material.normalScale.set(6.0, 6.0)
      material.metalness = 0.5
      material.roughness = 1.0
      material.needsUpdate = true
    })
    return {
      material: [leftRight, leftRight, topBottom, topBottom, front, back],
      dispose: [leftRight, topBottom, front, back],
    }
  }, [metalnessMap, normalMap, roughnessMap])

  useEffect(
    () => () => {
      dispose.forEach((material) => {
        material.normalMap.dispose()
        material.metalnessMap.dispose()
        material.roughnessMap.dispose()
        material.dispose()
      })
      normalMap.dispose()
      metalnessMap.dispose()
      roughnessMap.dispose()
    },
    [dispose, metalnessMap, normalMap, roughnessMap],
  )

  return material
}
