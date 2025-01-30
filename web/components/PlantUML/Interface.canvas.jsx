import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import { Text } from '@react-three/drei'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Bold.ttf'
import InterfaceIcon from 'web/public/icons/interface.svg'
import { Svg } from '../Svg.canvas'
import { ExtrudeGeometry, Path, Shape } from 'three'

export const Interface = forwardRef(function Interface(
  {
    radius,
    children,
    colorTheme,
    label = 'interface',
    labelRadius,
    layerDepth = 0.175,
    layerDepthFactor = 1,
    position,
    scale = 1,
    bodyColor,
    labelColor,
    fontSize,
    labelProps,
    bodyProps,
    ...props
  },
  forwardedRef,
) {
  const labelRef = useRef()
  const title = useRef()
  const icon = useRef()
  const mesh = useRef()
  const group = useRef()

  useImperativeHandle(forwardedRef, () => group.current, [])

  const { bodyGeometry, labelGeometry } = useMemo(() => {
    const extrudeSettings = {
      steps: 2,
      depth: layerDepth * layerDepthFactor,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1,
    }
    const shape = new Shape()
      .moveTo(radius, 0)
      .absarc(0, 0, radius, 0, Math.PI * 2, false)

    // if there's a label
    if (labelRadius && labelRadius > 0) {
      // create and add hole
      const hole = new Path()
        .moveTo(radius - labelRadius, 0)
        .absarc(0, 0, radius - labelRadius, 0, Math.PI * 2, false)
      shape.holes.push(hole)

      // create body shape
      const bodyShape = new Shape()
        .moveTo(radius - labelRadius - 0.001, 0)
        .absarc(0, 0, radius - labelRadius - 0.001, 0, Math.PI * 2, false)

      // create geometries
      const labelGeometry = new ExtrudeGeometry(shape, extrudeSettings)
      const bodyGeometry = new ExtrudeGeometry(bodyShape, extrudeSettings)
      return { labelGeometry, bodyGeometry }
    } else {
      const bodyGeometry = new ExtrudeGeometry(shape, extrudeSettings)
      return { labelGeometry: undefined, bodyGeometry }
    }
  }, [labelRadius, layerDepth, layerDepthFactor, radius])

  useEffect(
    () => () => {
      bodyGeometry.dispose()
      labelGeometry && labelGeometry.dispose()
    },
    [bodyGeometry, labelGeometry],
  )

  return (
    <group {...props} position={position} ref={group}>
      {labelGeometry && (
        <>
          <mesh
            ref={labelRef}
            castShadow
            {...labelProps}
            geometry={labelGeometry}
            scale={scale}
            position-z={(scale * layerDepth * layerDepthFactor) / -2}
          >
            <meshStandardMaterial color={labelColor || colorTheme.charcoal} />
          </mesh>
          <Text
            font={Font}
            fontSize={fontSize}
            color={colorTheme.charcoal}
            anchorX='center'
            anchorY='top'
            ref={title}
            position-z={(scale * layerDepth * layerDepthFactor) / 2 + 0.001}
          >
            {label}
            <meshStandardMaterial attach='material' />
          </Text>
          <Svg
            src={InterfaceIcon}
            ref={icon}
            scale={(1 / 24) * fontSize}
            position-z={(scale * layerDepth * layerDepthFactor) / 2 + 0.001}
            position-y={fontSize}
            position-x={-fontSize / 2}
          />
        </>
      )}

      <mesh
        ref={mesh}
        scale={scale}
        geometry={bodyGeometry}
        position-z={(scale * layerDepth * layerDepthFactor) / -2}
        {...bodyProps}
      >
        <meshStandardMaterial color={bodyColor || colorTheme.white} />
      </mesh>
      {children}
    </group>
  )
})
