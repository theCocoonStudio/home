import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Color, Vector2 } from 'three'
import { LineMaterial } from 'three-stdlib'
import {
  LineSegments2,
  LineSegmentsGeometry,
} from 'three/examples/jsm/Addons.js'
import { useMarkupBounds } from 'src/hooks'
import { PerspectiveCamera } from '@react-three/drei'

export const Logo = function Logo({ size }) {
  const { iLogo, materials, geometries } = useMemo(() => {
    const point = (...words) => {
      const dictionary = {
        left: -0.5,
        right: 0.5,
        top: 0.5,
        bottom: -0.5,
        front: 0.5,
        back: -0.5,
      }
      return words.map((word) =>
        typeof word === 'string' ? dictionary[word] : word,
      )
    }
    const color = (start, end) => {
      const { r: r1, g: g1, b: b1 } = new Color(start)
      const {
        r: r2,
        g: g2,
        b: b2,
      } = end && start !== end ? new Color(end) : { r: r1, g: g1, b: b1 }
      return [r1, g1, b1, r2, g2, b2]
    }
    const iPositions = [
      ...point('left', 'bottom', 'back'),
      ...point('left', 'top', 'back'),
      //
      ...point('left', 'top', 'front'),
      ...point('left', 'bottom', 'front'),
      //
      ...point(-1.0, 'bottom', 'back'),
      ...point('right', 'bottom', 'back'),
      //
      ...point(-1.0, 'top', 'back'),
      ...point(0.5, 'top', 'back'),
      //
      ...point('left', 'bottom', 'front'),
      ...point('right', 'bottom', 'front'),
      //
      ...point('left', 'top', 'front'),
      ...point('right', 'top', 'front'),
      //
    ]

    const iColors = [
      ...color('black'),
      ...color('black'),
      ...color('black'),
      ...color('black'),
      ...color('black'),
      ...color('black'),
      ...color('black'),
      ...color('black', '#555'),
      ...color('black', '#555'),
      ...color('black', '#555'),
    ]

    const geometry1 = new LineSegmentsGeometry()
      .setPositions(iPositions)
      .setColors(iColors)
    geometry1.center()
    const iMaterial = new LineMaterial({
      worldUnits: false,
      linewidth: 4,
      vertexColors: true,
      resolution: new Vector2(80, 80),
    })

    return {
      iLogo: new LineSegments2(geometry1, iMaterial),
      materials: [iMaterial],
      geometries: [geometry1],
    }
  }, [])

  useEffect(
    () => () => {
      materials.forEach((material) => material.dispose())
      geometries.forEach((material) => material.dispose())
    },
    [geometries, materials],
  )

  const ref = useRef()
  const iMesh = useRef()

  const [groupProps, setGroupProps] = useState(null)

  const callback = useCallback(
    ({ ppwu }) => {
      const scale = size / ppwu.x

      setGroupProps({
        scale,
      })
    },
    [size],
  )

  useMarkupBounds(
    {
      distance: 0.5,
      callback,
    },
    [],
  )

  return (
    groupProps && (
      <>
        <group
          rotation-x={0.35} // straight up view (x,y = 0)
          rotation-y={0.48}
          ref={ref}
          position-z={0.5}
          {...groupProps}
        >
          <primitive object={iLogo} ref={iMesh} />
        </group>
        <PerspectiveCamera makeDefault position-z={1} fov={10} />
      </>
    )
  )
}
