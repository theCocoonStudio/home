import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  setLabelProps,
  setTargetProps,
} from '../../helpers/useMarkupBoundsUtils'
import { Text } from '@react-three/drei'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Bold.ttf'
import ComponentIcon from 'web/public/icons/components.svg'
import { Svg } from '../Svg.canvas'
import { DoubleSide } from 'three'
import { damp } from 'maath/easing'
import { useFrame } from '@react-three/fiber'

export const Component = forwardRef(function Component(
  {
    bounds: { min, max },
    children,
    colorTheme,
    label = 'component',
    padding = 0.075,
    labelHeight,
    layerDepth,
    layerDepthFactor,
    margin,
    onResize,

    bodyColor,
    labelColor,
    labelProps,
    bodyProps,
    ...props
  },
  forwardedRef,
) {
  const browser = useRef()
  const title = useRef()
  const icon = useRef()
  const mesh = useRef()
  const group = useRef()

  useImperativeHandle(forwardedRef, () => group.current, [])

  const resize = useCallback(
    ({ min, max }) => {
      const bodyData = setTargetProps({
        target: mesh.current,
        min,
        max,
        labelHeight: labelHeight,
        boundsPadding: [padding, padding, padding, padding],
        layerDepth,
        layerDepthFactor,
        margin,
      })

      const labelData =
        labelHeight &&
        setLabelProps({
          target: browser.current,
          min,
          max,
          labelHeight: labelHeight,
          boundsPadding: [padding, 0, padding, 0],
          layerDepth,
          layerDepthFactor,
        })

      if (labelHeight) {
        const {
          bounds: { max: labelMax, min: labelMin },
          position: labelPosition,
        } = labelData

        icon.current.position.set(
          labelMin.x - labelHeight / 4,
          labelPosition.y + labelHeight / 4,
          labelMax.z + 0.01,
        )
        title.current.position.set(
          labelMin.x + labelHeight / 4 + padding / 4,
          labelPosition.y,
          labelMax.z + 0.01,
        )
      }
      if (typeof onResize === 'function') {
        onResize({ bodyData, labelData })
      }
    },
    [labelHeight, padding, layerDepth, layerDepthFactor, margin, onResize],
  )

  useEffect(() => {
    if (min && max) {
      resize({ min, max })
    }
  }, [max, min, resize])

  const [transparent, setTransparent] = useState(false)

  useFrame((state, delta) => {
    if (mesh.current) {
      if (transparent) {
        mesh.current.material.transparent = true
        mesh.current.material.depthWrite = false
        mesh.current.material.needsUpdate = true
        damp(mesh.current.material, 'opacity', 0.1, 0.25, delta)
      } else {
        damp(mesh.current.material, 'opacity', 1, 0.25, delta)
        if (mesh.current.material.opacity > 0.99) {
          mesh.current.material.transparent = false
          mesh.current.material.depthWrite = true
          mesh.current.material.needsUpdate = true
        }
      }
    }
  })

  return (
    <group {...props} ref={group}>
      {labelHeight && (
        <>
          <Text
            font={Font}
            fontSize={labelHeight / 2}
            color={colorTheme.white}
            anchorX='left'
            anchorY='middle'
            ref={title}
          >
            {label}
            <meshStandardMaterial attach='material' />
          </Text>
          <Svg
            src={ComponentIcon}
            ref={icon}
            scale={((1 / 24) * labelHeight) / 2}
            position={[0, 0.5, 0.1]}
          />

          <mesh ref={browser} castShadow {...labelProps}>
            <boxGeometry />
            <meshStandardMaterial color={labelColor || colorTheme.charcoal} />
          </mesh>
        </>
      )}
      <mesh
        ref={mesh}
        {...bodyProps}
        onPointerDown={(e) => {
          setTransparent((prev) => {
            // if clicked when transparent
            if (prev) {
              // if this is the farthest mesh
              if (
                e.intersections[e.intersections.length - 1].object ===
                mesh.current
              ) {
                // make opaque
                return !prev
              } else {
                // otherwise, don't change
                return prev
              }
              // if clicked when opaque
            } else {
              // iterate intersections from closest to farthest
              for (let i = 0; i < e.intersections.length; i++) {
                // if a closer mesh exists
                if (e.intersections[i].object !== mesh.current) {
                  // if it's opaque, don't change
                  if (
                    e.intersections[i].object.material.transparent === false
                  ) {
                    return prev
                  }
                } else {
                  // otherwise, make opaque
                  return !prev
                }
              }
            }
          })
        }}
      >
        <boxGeometry />
        <meshStandardMaterial
          color={bodyColor || colorTheme.white}
          side={DoubleSide}
        />
      </mesh>
      {children}
    </group>
  )
})
