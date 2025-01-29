import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useMemo, useRef } from 'react'
import CircleIcon from 'web/public/icons/circle.svg'

export const Grid = function Grid({
  min,
  max,
  length,
  color,
  colorTheme,
  rows,
  columns,
  layerDepthFactor = 0.85,
  rowGap = 0,
  columnGap = 0,
  icon = CircleIcon,
  icons = [],
  colors = [],
  labels = [],
  heapPositions = [],
  visible = [],
  type = 'heap',
  ...props
}) {
  const scale = useMemo(() => {
    const x =
      columns > 1 ? (length.x - columnGap * (columns - 1)) / columns : length.x

    const y = rows > 1 ? (length.y - rowGap * (rows - 1)) / rows : length.y
    const z = length.z * layerDepthFactor
    return [x, y, z]
  }, [
    columnGap,
    columns,
    layerDepthFactor,
    length.x,
    length.y,
    length.z,
    rowGap,
    rows,
  ])

  const data = useMemo(() => {
    if (type === 'heap') {
      return labels.map((label, index) => {
        const [xIndex, yIndex] = heapPositions[index]
        const x = min.x + xIndex * (scale[0] + columnGap) + scale[0] / 2
        const y = min.y + yIndex * (scale[1] + rowGap) + scale[1] / 2
        return {
          label,
          props: {
            scale,
            ['position-x']: x,
            ['position-y']: y,
            visible: visible[index],
          },
        }
      })
    }
  }, [
    columnGap,
    heapPositions,
    labels,
    min.x,
    min.y,
    rowGap,
    scale,
    type,
    visible,
  ])

  const group = useRef()

  return (
    <group ref={group} {...props}>
      {data.map(({ label, props }, index) => (
        <mesh key={`${index}`} {...props}>
          <boxGeometry />
          <meshStandardMaterial
            color={colors[index] || color || colorTheme.charcoal}
          />
        </mesh>
      ))}
    </group>
  )
}
