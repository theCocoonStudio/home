import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { Component } from './PlantUML/Component.canvas'
import { setTargetProps } from '../helpers/useMarkupBoundsUtils'

export const Browser = forwardRef(function Browser(
  {
    setFloorY,
    colorTheme,
    tracking,
    padding = 0.075,
    labelHeight = 0.1,
    layerDepthFactor = 0.9,
  },
  forwardedRef,
) {
  const component = useRef()
  const minimize = useRef()
  const maximize = useRef()
  const exit = useRef()
  const heap = useRef()
  const stack = useRef()
  const queue = useRef()
  const api = useRef()

  useImperativeHandle(forwardedRef, () => component.current, [])

  const onResize = useCallback(
    ({
      labelData: {
        bounds: { max: labelMax },
        position: labelPos,
      },
      bodyData: {
        bounds: { max: browserMax, min: browserMin, length: browserLength },
      },
    }) => {
      exit.current.position.set(
        labelMax.x - exit.current.scale.x / 2,
        labelPos.y,
        labelMax.z - labelHeight / 6 / 4,
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
    [labelHeight, padding, layerDepthFactor],
  )
  const [bounds, setBounds] = useState({ min: undefined, max: undefined })

  const resizeCallback = useCallback(
    ({ min, max }) => {
      setBounds({ min, max })
      setFloorY(min.y)
    },
    [setFloorY],
  )

  useMarkupBounds(
    {
      target: component,
      element: tracking,
      callback: resizeCallback,
    },
    [],
  )

  return (
    <Component
      position-z={-1}
      bounds={bounds}
      onResize={onResize}
      ref={component}
      colorTheme={colorTheme}
      label='browser'
    >
      <mesh ref={minimize} scale={labelHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'green'} />
      </mesh>
      <mesh ref={maximize} scale={labelHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'orange'} />
      </mesh>
      <mesh ref={exit} scale={labelHeight / 6}>
        <sphereGeometry />
        <meshPhongMaterial color={'red'} />
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
    </Component>
  )
})
