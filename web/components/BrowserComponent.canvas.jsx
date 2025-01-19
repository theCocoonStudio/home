import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { Component } from './PlantUML/Component.canvas'

export const Browser = forwardRef(function Browser(
  { setFloorY, colorTheme, tracking, padding = 0.075, labelHeight = 0.1 },
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
  const [heapBounds, setHeapBounds] = useState()
  const [stackBounds, setStackBounds] = useState()
  const [queueBounds, setQueueBounds] = useState()
  const [apiBounds, setApiBounds] = useState()

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
      // label content
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
      // sub components
      setHeapBounds({
        max: browserMax
          .clone()
          .setY(browserMax.y - browserLength.y / 2 - padding / 4)
          .setX(browserMax.x - browserLength.x / 2 - padding / 4),
        min: browserMin,
        length: browserLength,
      })
      setStackBounds({
        max: browserMax
          .clone()
          .setY(browserMax.y - browserLength.y / 2 - padding / 4)
          .setX(browserMax.x - browserLength.x / 4 - padding / 4),
        min: browserMin
          .clone()
          .setX(browserMax.x - browserLength.x / 2 + padding / 4),
        length: browserLength,
      })
      setQueueBounds({
        max: browserMax
          .clone()
          .setY(browserMax.y - browserLength.y / 2 - padding / 4),
        min: browserMin
          .clone()
          .setX(browserMax.x - browserLength.x / 4 + padding / 4),
        length: browserLength,
      })
      setApiBounds({
        max: browserMax.clone(),
        min: browserMin
          .clone()
          .setY(browserMax.y - browserLength.y / 2 + padding / 4),
        length: browserLength,
      })
    },
    [labelHeight, padding],
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
      labelHeight={0.1}
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
      {heapBounds && (
        <Component
          ref={heap}
          bounds={heapBounds}
          colorTheme={colorTheme}
          label='heap'
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
        />
      )}
      {stackBounds && (
        <Component
          ref={stack}
          bounds={stackBounds}
          colorTheme={colorTheme}
          label='stack'
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
        />
      )}
      {queueBounds && (
        <Component
          ref={queue}
          bounds={queueBounds}
          colorTheme={colorTheme}
          label='queue'
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
        />
      )}
      {apiBounds && (
        <Component
          ref={api}
          bounds={apiBounds}
          colorTheme={colorTheme}
          label='API'
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
        />
      )}
    </Component>
  )
})
