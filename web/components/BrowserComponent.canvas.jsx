import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { Component } from './PlantUML/Component.canvas'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'

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
  const runtime = useRef()

  useImperativeHandle(forwardedRef, () => component.current, [])
  const [heapProps, setHeapProps] = useState()
  const [stackProps, setStackProps] = useState()
  const [queueProps, setQueueProps] = useState()
  const [apiProps, setApiProps] = useState()
  const [runtimeProps, setRuntimeProps] = useState()

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
      setApiProps({
        bounds: {
          min: browserMin.clone().setY(browserMin.y + browserLength.y / 2),
          max: browserMax,
        },
        margin: [0, 0, 0, padding / 4],
      })
      setRuntimeProps({
        bounds: {
          min: browserMin,
          max: browserMax.clone().setY(browserMax.y - browserLength.y / 2),
        },
        margin: [0, padding / 4, 0, 0],
      })
    },
    [labelHeight, padding],
  )

  const onRuntimeResize = useCallback(
    ({
      bodyData: {
        bounds: { max, min, length },
      },
    }) => {
      setHeapProps({
        bounds: { min, max: max.clone().setX(max.x - length.x / 2) },
        margin: [0, 0, padding / 4, 0],
      })
      setStackProps({
        bounds: {
          min: min.clone().setX(min.x + length.x / 2),
          max: max.clone().setX(max.x - length.x / 4),
        },
        margin: [padding / 4, 0, padding / 4, 0],
      })
      setQueueProps({
        bounds: {
          min: min.clone().setX(min.x + (length.x * 3) / 4),
          max: max.clone().setX(max.x),
        },
        margin: [padding / 4, 0, 0, 0],
      })
    },
    [padding],
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

  const {
    setState: { pointer: setPointer },
  } = useShowcase()

  const bodyProps = useMemo(
    () => ({
      onPointerOver: (e) => {
        e.stopPropagation()
        setPointer(true)
      },
      onPointerOut: (e) => {
        e.stopPropagation()
        setPointer(false)
      },
    }),
    [setPointer],
  )
  return (
    <Component
      position-z={-1}
      bounds={bounds}
      onResize={onResize}
      padding={padding}
      ref={component}
      colorTheme={colorTheme}
      label='browser'
      labelHeight={0.1}
      bodyProps={bodyProps}
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
      {heapProps && (
        <Component
          ref={heap}
          colorTheme={colorTheme}
          label='heap'
          labelHeight={0.06}
          layerDepthFactor={0.85 ** 2}
          padding={padding / 4}
          {...heapProps}
        />
      )}
      {stackProps && (
        <Component
          ref={stack}
          colorTheme={colorTheme}
          label='stack'
          labelHeight={0.06}
          layerDepthFactor={0.85 ** 2}
          padding={padding / 4}
          {...stackProps}
        />
      )}
      {queueProps && (
        <Component
          ref={queue}
          colorTheme={colorTheme}
          label='queue'
          labelHeight={0.06}
          layerDepthFactor={0.85 ** 2}
          padding={padding / 4}
          {...queueProps}
        />
      )}
      {apiProps && (
        <Component
          ref={api}
          colorTheme={colorTheme}
          label='API'
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
          {...apiProps}
        />
      )}
      {runtimeProps && (
        <Component
          ref={runtime}
          colorTheme={colorTheme}
          label='runtime'
          onResize={onRuntimeResize}
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
          {...runtimeProps}
        />
      )}
    </Component>
  )
})
