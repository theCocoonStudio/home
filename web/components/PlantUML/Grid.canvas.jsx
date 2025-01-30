import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Bold.ttf'
import { Fragment, useMemo, useRef } from 'react'

export const Grid = function Grid({
  min,
  max,
  length,
  color,
  labelColor,
  labelColors = [],
  colorTheme,
  rows,
  columns,
  layerDepthFactor = 0.85,
  rowGap = 0,
  columnGap = 0,
  fontSize,
  colors = [],
  labels = [],
  heapPositions = [],
  visible = [],
  type = 'heap',
  ...props
}) {
  const scale = useMemo(() => {
    let scale = [
      null,
      rows > 1 ? (length.y - rowGap * (rows - 1)) / rows : length.y,
      length.z * layerDepthFactor,
    ]
    if (type === 'heap') {
      scale[0] =
        columns > 1
          ? (length.x - columnGap * (columns - 1)) / columns
          : length.x
    } else {
      scale[0] = length.x
    }
    return scale
  }, [
    columnGap,
    columns,
    layerDepthFactor,
    length.x,
    length.y,
    length.z,
    rowGap,
    rows,
    type,
  ])

  const data = useMemo(() => {
    return labels.map((label, index) => {
      let x, y
      if (type === 'heap') {
        const [xIndex, yIndex] = heapPositions[index]
        x = min.x + xIndex * (scale[0] + columnGap) + scale[0] / 2
        y = min.y + yIndex * (scale[1] + rowGap) + scale[1] / 2
      } else {
        x = min.x + scale[0] / 2
        y = min.y + index * (scale[1] + rowGap) + scale[1] / 2
      }
      return {
        label,
        visible: visible[index],
        props: {
          scale,
          ['position-x']: x,
          ['position-y']: y,
        },
      }
    })
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

  const queueOffset = useMemo(() => {
    return type === 'queue' ? visible.findIndex((el) => el === true) : 0
  }, [type, visible])

  const group = useRef()

  useFrame((state, delta) => {
    if (group.current && type === 'queue') {
      damp(
        group.current.position,
        'y',
        queueOffset > 0 ? -queueOffset * (scale[1] + rowGap) : 0,
        0.25,
        delta,
      )
    }
  })

  return (
    <group ref={group} {...props}>
      {data.map(({ visible, label, props }, index) =>
        visible ? (
          <Fragment key={`mesh-${index}`}>
            <mesh {...props} userData={{ index }}>
              <boxGeometry />
              <meshStandardMaterial
                color={colors[index] || color || colorTheme.charcoal}
              />
            </mesh>
            <Text
              font={Font}
              fontSize={fontSize}
              color={labelColors[index] || labelColor || colorTheme.white}
              anchorX='center'
              anchorY='middle'
              position-z={scale[2] / 2 + 0.001}
              position-x={props['position-x']}
              position-y={props['position-y']}
              userData={{ index }}
            >
              {label}
              <meshStandardMaterial attach='material' />
            </Text>
          </Fragment>
        ) : null,
      )}
    </group>
  )
}
