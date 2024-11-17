import Model from 'public/models/github.glb'
import { useGLTF } from '@react-three/drei'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { dampC } from 'maath/easing'
import { Color } from 'three'
import { useFrame } from '@react-three/fiber'

export const Icon = forwardRef(function Icon(
  { colorTheme, renderPriority, children, ...props },
  ref,
) {
  const { nodes, materials } = useGLTF(Model)
  const mat0 = materials['Material.084']
  const mat1 = materials['Material.019']
  const [geometry0, geometry1] = useMemo(
    () => [nodes.Cube053.geometry.clone(), nodes.Cube054.geometry.clone()],
    [nodes.Cube053.geometry, nodes.Cube054.geometry],
  )
  const [material0, material1] = useMemo(
    () => [mat0.clone(), mat1.clone()],
    [mat0, mat1],
  )
  const mesh = useRef()

  useImperativeHandle(ref, () => mesh.current)
  useEffect(() => {
    console.log(material0.clone)
    geometry0.center()
    const { min, max } = geometry0.boundingBox
    const factor = 1 / (Math.abs(max.x) + Math.abs(min.x))
    geometry0.scale(factor, factor, factor)

    geometry1.scale(factor, factor, factor)
    return () => {
      geometry0?.dispose()
      geometry1?.dispose()
      material0?.dispose()
      material1?.dispose()
      mat0?.dispose()
      mat1?.dispose()
    }
  }, [geometry0, geometry1, mat0, mat1, material0, material1])

  const materialColor = useMemo(() => {
    return new Color(colorTheme)
  }, [colorTheme])
  /* eslint-disable-next-line */
  useFrame(({ state, delta }) => {
    dampC(material0.color, materialColor, 0.2, delta)
    dampC(material1.color, materialColor, 0.2, delta)
  }, renderPriority)

  return (
    <mesh
      receiveShadow
      geometry={geometry0}
      material={material0}
      ref={mesh}
      {...props}
    >
      <mesh
        receiveShadow
        name='Cube054'
        geometry={geometry1}
        material={material1}
      />
      {children}
    </mesh>
  )
})

// useGLTF.preload(Model)
