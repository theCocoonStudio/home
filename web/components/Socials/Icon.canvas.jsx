import Model from 'public/models/github.glb'
import { useGLTF } from '@react-three/drei'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

export const Icon = forwardRef(function Icon(
  { colorTheme, children, ...props },
  ref,
) {
  const { nodes, materials } = useGLTF(Model)
  const geometry = useMemo(
    () => [nodes.Cube053.geometry.clone(), nodes.Cube054.geometry.clone()],
    [nodes.Cube053.geometry, nodes.Cube054.geometry],
  )
  const material = useMemo(
    () => [
      materials['Material.084'].clone(),
      materials['Material.019'].clone(),
    ],
    [materials],
  )
  const mesh = useRef()
  useImperativeHandle(ref, () => mesh.current)
  useEffect(() => {
    material[0].color.set(colorTheme)
    material[1].color.set(colorTheme)

    geometry[0].center()
    const { min, max } = geometry[0].boundingBox
    const factor = 1 / (Math.abs(max.x) + Math.abs(min.x))
    geometry[0].scale(factor, factor, factor)

    geometry[1].scale(factor, factor, factor)
    return () => {
      geometry[0]?.dispose()
      geometry[1]?.dispose()
      material[0]?.dispose()
      material[1]?.dispose()
    }
  }, [colorTheme, geometry, material])

  return (
    <mesh geometry={geometry[0]} material={material[0]} ref={mesh} {...props}>
      <mesh name='Cube054' geometry={geometry[1]} material={material[1]} />
      {children}
    </mesh>
  )
})

// useGLTF.preload(Model)
