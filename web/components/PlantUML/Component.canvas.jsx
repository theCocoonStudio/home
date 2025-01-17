import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import {
  setLabelProps,
  setTargetProps,
} from '../../helpers/useMarkupBoundsUtils'
import { Svg, Text } from '@react-three/drei'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Bold.ttf'
import ComponentIcon from 'web/public/icons/components.svg'

export const Component = forwardRef(function Component(
  {
    bounds: { min, max },
    children,
    colorTheme,
    label = 'component',
    padding = 0.075,
    labelHeight = 0.1,
    onResize,
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
      })

      const labelData = setLabelProps({
        target: browser.current,
        min,
        max,
        labelHeight: labelHeight,
        boundsPadding: [padding, 0, padding, 0],
      })

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
      if (typeof onResize === 'function') {
        onResize({ bodyData, labelData })
      }
    },
    [labelHeight, padding, onResize],
  )

  useEffect(() => {
    if (min && max) {
      resize({ min, max })
    }
  }, [max, min, resize])

  return (
    <group {...props} ref={group}>
      <Text
        font={Font}
        fontSize={labelHeight / 2}
        color={colorTheme.white}
        anchorX='left'
        anchorY='middle'
        ref={title}
      >
        {label}
      </Text>
      <Svg
        src={ComponentIcon}
        ref={icon}
        scale={((1 / 24) * labelHeight) / 2}
        position={[0, 0.5, 0.1]}
      />
      <mesh ref={browser} castShadow {...labelProps}>
        <boxGeometry />
        <meshPhongMaterial
          color={colorTheme.charcoal}
          /* transparent
              opacity={0.1} */
        />
      </mesh>
      <mesh ref={mesh} castShadow {...bodyProps}>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.white} transparent opacity={0.1} />
      </mesh>
      {children}
    </group>
  )
})
