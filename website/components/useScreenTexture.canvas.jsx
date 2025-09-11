import { useFBO } from '@react-three/drei'
import { useTheme } from '../hooks/useTheme'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
} from 'three'

import { contain } from 'website/utils/texture'

export const useScreenTexture = ({
  aspect = 1,
  resolution = 256,
  renderPriority = -1,
}) => {
  // theme
  const { colors } = useTheme()

  // three app state
  const { gl } = useThree(({ gl }) => ({
    gl,
  }))

  // render target
  const fbo = useFBO(resolution, resolution)
  useEffect(() => {
    contain(fbo.texture, aspect)
  }, [aspect, fbo.texture])

  // three js objects
  const { scene, camera, geometry, material, group } = useMemo(() => {
    // scene
    const scene = new Scene()
    scene.background = new Color('#000')

    // camera
    const camera = new PerspectiveCamera(10)
    camera.position.z = 1

    // scene objects
    const geometry = new BoxGeometry()
    const material = new MeshStandardMaterial({
      color: colors.white,
    })
    const mesh = new Mesh(geometry, material)
    const group = new Group()
    group.rotation.set(0, Math.PI / 4, Math.PI / 4)
    group.position.setZ(0.5)
    group.scale.set(0.03, 0.03, 0.03)
    group.add(mesh)
    scene.add(group)

    scene.add(new AmbientLight(0xcccccc))

    const light = new DirectionalLight(0xffffff, 3)
    light.position.set(1, 1, 1)
    scene.add(light)
    return { scene, camera, geometry, material, group }
  }, [colors])

  // dispose materials/geometries
  useEffect(
    () => () => {
      geometry.dispose()
      material.dispose()
    },
    [geometry, material],
  )

  // render
  useFrame((state, delta) => {
    const rot = state.clock.getElapsedTime()
    group.rotation.set(0, rot, Math.PI / 4)
    group.matrixWorldNeedsUpdate = true
    gl.setRenderTarget(fbo)
    gl.render(scene, camera)
    gl.setRenderTarget(null)
  }, renderPriority)

  return fbo
}
