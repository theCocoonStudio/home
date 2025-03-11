import { useFont } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import Karla from 'assets/Karla_ExtraBold.json'
import Karla_light from 'assets/Karla_Light.json'
import Karla_Regular from 'assets/Karla_Regular.json'
import { useEffect, useMemo } from 'react'
import { ExtrudeGeometry } from 'three'
import { SVGLoader } from 'three/examples/jsm/Addons.js'

export const SVG3D = ({
  src,
  extrudeSettings,
  depth = 0.01,
  scaleY = 1.0,
  scaleX = 1.0,
  xPos = 0.0,
  yPos = 0.0,
  zPos = 0.0,
  children,
}) => {
  const settings = useMemo(
    () => ({
      steps: 2,
      depth: depth,
      bevelEnabled: false,
      bevelThickness: depth,
      bevelSize: depth,
      bevelOffset: 0,
      bevelSegments: 6,
      curveSegments: 12,
      ...extrudeSettings,
    }),
    [depth, extrudeSettings],
  )

  const { paths } = useLoader(
    SVGLoader,
    !src.startsWith('<svg') ? src : `data:image/svg+xml;utf8,${src}`,
  )

  const geometries = useMemo(() => {
    const result = []
    paths.forEach((path) => {
      if (
        path.userData?.style.fill !== undefined &&
        path.userData.style.fill !== 'none'
      ) {
        const shapes = SVGLoader.createShapes(path)
        const geom = new ExtrudeGeometry(shapes, settings)

        result.push({
          geometry: geom.center(),
          xLength: geom.boundingBox.max.x - geom.boundingBox.min.x,
          YLength: geom.boundingBox.max.y - geom.boundingBox.min.y,
        })
      }
    })
    return result
  }, [paths, settings])

  useEffect(
    () => () => {
      geometries.forEach(({ geometry }) => geometry && geometry.dispose())
    },
    [geometries],
  )

  const meshes = useMemo(
    () =>
      geometries.map(({ geometry, xLength, YLength }, i) => (
        <mesh
          key={i}
          scale-x={scaleY / YLength}
          scale-y={scaleY / YLength}
          position-x={xPos + (xLength * scaleY) / YLength / 2}
          position-y={yPos + scaleY / 2}
          position-z={zPos}
          geometry={geometry}
        >
          {children}
        </mesh>
      )),
    [children, geometries, scaleY, xPos, yPos, zPos],
  )

  return meshes
}
