import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { Vector3 } from 'three'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { Html, Svg, Text } from '@react-three/drei'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Bold.ttf'
import Component from 'web/public/icons/components.svg'
import { setTargetProps, setLabelProps } from '../helpers/useMarkupBoundsUtils'

export const Browser = forwardRef(function Browser(
  {
    setFloorY,
    colorTheme,
    tracking,
    padding = 0.075,
    titleHeight = 0.1,
    labelHeight = 0.06,
    layerDepthFactor = 0.9,
  },
  forwardedRef,
) {
  const minimize = useRef()
  const maximize = useRef()
  const exit = useRef()
  const browser = useRef()
  const title = useRef()
  const icon = useRef()
  const mesh = useRef()
  const heap = useRef()
  const stack = useRef()
  const queue = useRef()
  const api = useRef()

  useImperativeHandle(forwardedRef, () => mesh.current, [])
  const resizeCallback = useCallback(
    (bounds) => {
      const { target, min, max } = bounds
      setFloorY(min.y)

      const {
        bounds: { min: browserMin, max: browserMax, length: browserLength },
      } = setTargetProps({
        target,
        min,
        max,
        labelHeight: titleHeight,
        boundsPadding: [padding, padding, padding, padding],
      })

      const {
        bounds: { max: labelMax, min: labelMin },
        position: labelPosition,
      } = setLabelProps({
        target: browser.current,
        min,
        max,
        labelHeight: titleHeight,
        boundsPadding: [padding, 0, padding, 0],
      })

      exit.current.position.set(
        labelMax.x - exit.current.scale.x / 2,
        labelPosition.y,
        labelMax.z - titleHeight / 6 / 4,
      )
      maximize.current.position.set(
        exit.current.position.x - padding - maximize.current.scale.x / 2,
        exit.current.position.y,
        exit.current.position.z,
      )
      minimize.current.position.set(
        maximize.current.position.x - padding - minimize.current.scale.x / 2,
        maximize.current.position.y,
        maximize.current.position.z,
      )

      icon.current.position.set(
        labelMin.x,
        labelPosition.y + titleHeight / 4,
        labelMax.z + 0.01,
      )
      title.current.position.set(
        labelMin.x + titleHeight / 2 + padding / 4,
        labelPosition.y,
        labelMax.z + 0.01,
      )

      setTargetProps({
        target: heap.current,
        min: browserMin,
        max: browserMax,
        margin: [0, browserLength.y / 2, 0, 0],
        layerDepthFactor,
      })

      setTargetProps({
        target: stack.current,
        min: browserMin,
        max: browserMax,
        margin: [
          0,
          0,
          (browserLength.x * 3) / 4 + padding,
          browserLength.y / 2 + padding,
        ],
        layerDepthFactor,
      })
      setTargetProps({
        target: queue.current,
        min: browserMin,
        max: browserMax,
        margin: [
          browserLength.x / 4,
          0,
          browserLength.x / 2 + padding,
          browserLength.y / 2 + padding,
        ],
        layerDepthFactor,
      })
      setTargetProps({
        target: api.current,
        min: browserMin,
        max: browserMax,
        margin: [browserLength.x / 2, 0, 0, browserLength.y / 2 + padding],
        layerDepthFactor,
      })
    },
    [layerDepthFactor, padding, setFloorY, titleHeight],
  )
  useMarkupBounds({
    target: mesh,
    element: tracking,
    callback: resizeCallback,
  })

  return (
    <group position-z={-1}>
      <mesh ref={minimize} scale={titleHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'green'} />
      </mesh>
      <mesh ref={maximize} scale={titleHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'orange'} />
      </mesh>
      <mesh ref={exit} scale={titleHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'red'} />
      </mesh>
      <Text
        font={Font}
        fontSize={titleHeight / 2}
        color={colorTheme.white}
        anchorX='left'
        anchorY='middle'
        ref={title}
      >
        browser
      </Text>
      <Svg
        src={Component}
        ref={icon}
        scale={((1 / 24) * titleHeight) / 2}
        position={[0, 0.5, 0.1]}
      />
      <mesh ref={browser} castShadow>
        <boxGeometry />
        <meshPhongMaterial
          color={colorTheme.charcoal}
          /* transparent
          opacity={0.1} */
        />
      </mesh>
      <mesh ref={mesh} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.white} transparent opacity={0.1} />
      </mesh>
      <mesh ref={heap} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.charcoal} />
      </mesh>
      <mesh ref={stack} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.charcoal} />
      </mesh>
      <mesh ref={queue} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.charcoal} />
      </mesh>
      <mesh ref={api} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.charcoal} />
      </mesh>
    </group>
  )
})
