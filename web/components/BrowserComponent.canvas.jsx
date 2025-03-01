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
import { Interface } from './PlantUML/Interface.canvas'
import { Grid } from './PlantUML/Grid.canvas'

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
  const setTimeoutRef = useRef()
  const setIntervalRef = useRef()
  const setAnimationRef = useRef()
  const queueMicroTaskRef = useRef()
  const eventCallbackRef = useRef()
  const promiseResolveRef = useRef()

  useImperativeHandle(forwardedRef, () => component.current, [])
  const [heapProps, setHeapProps] = useState()
  const [stackProps, setStackProps] = useState()
  const [queueProps, setQueueProps] = useState()
  const [apiProps, setApiProps] = useState()
  const [runtimeProps, setRuntimeProps] = useState()
  const [interfaceProps, setInterfaceProps] = useState([])

  const [heapStateProps, setHeapStateProps] = useState()
  const [stackStateProps, setStackStateProps] = useState()
  const [queueStateProps, setQueueStateProps] = useState()

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
        bounds: {
          min: min.clone(),
          max: max.clone().setX(max.x - length.x / 2),
        },
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

  const onApiResize = useCallback(
    ({
      bodyData: {
        bounds: { max, min, length },
      },
    }) => {
      setInterfaceProps([
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [
            min.x + length.x / (2 * 3.3),
            max.y - length.x / (2 * 3.3),
            0,
          ],
        },
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [min.x + length.x / 2, max.y - length.x / (2 * 3.3), 0],
        },
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [
            max.x - length.x / (2 * 3.3),
            max.y - length.x / (2 * 3.3),
            0,
          ],
        },
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [
            min.x + length.x / (2 * 3.3),
            min.y + length.x / (2 * 3.3),
            0,
          ],
        },
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [min.x + length.x / 2, min.y + length.x / (2 * 3.3), 0],
        },
        {
          radius: length.x / (2 * 3.3),
          labelRadius: 0.01,
          position: [
            max.x - length.x / (2 * 3.3),
            min.y + length.x / (2 * 3.3),
            0,
          ],
        },
      ])
    },
    [],
  )
  const onHeapResize = useCallback(
    ({
      bodyData: {
        bounds: { max, min, length },
      },
    }) => {
      setHeapStateProps({ max, min, length })
    },
    [],
  )
  const onStackResize = useCallback(
    ({
      bodyData: {
        bounds: { max, min, length },
      },
    }) => {
      setStackStateProps({ max, min, length })
    },
    [],
  )
  const onQueueResize = useCallback(
    ({
      bodyData: {
        bounds: { max, min, length },
      },
    }) => {
      setQueueStateProps({ max, min, length })
    },
    [],
  )

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
        <>
          <Component
            ref={heap}
            colorTheme={colorTheme}
            label='heap'
            labelHeight={0.06}
            layerDepthFactor={0.85 ** 2}
            padding={padding / 4}
            type='state'
            onResize={onHeapResize}
            {...heapProps}
          />
          {heapStateProps && (
            <Grid
              {...heapStateProps}
              colorTheme={colorTheme}
              rows={10}
              fontSize={labelHeight / 3.5}
              columns={8}
              labels={['one', 'two']}
              heapPositions={[
                [0, 1],
                [2, 3],
              ]}
              colors={[colorTheme.red, colorTheme.slate]}
              visible={[true, true]}
            />
          )}
        </>
      )}
      {stackProps && (
        <>
          <Component
            ref={stack}
            colorTheme={colorTheme}
            label='stack'
            labelHeight={0.06}
            layerDepthFactor={0.85 ** 2}
            padding={padding / 4}
            onResize={onStackResize}
            type='state'
            {...stackProps}
          />
          {stackStateProps && (
            <Grid
              {...stackStateProps}
              colorTheme={colorTheme}
              rows={10}
              fontSize={labelHeight / 3.5}
              labels={['one', 'two', 'three', 'four']}
              colors={[colorTheme.red, colorTheme.slate]}
              visible={[true, true, true, true]}
              rowGap={padding / 4}
              type='stack'
            />
          )}
        </>
      )}
      {queueProps && (
        <>
          <Component
            ref={queue}
            colorTheme={colorTheme}
            label='queue'
            labelHeight={0.06}
            layerDepthFactor={0.85 ** 2}
            padding={padding / 4}
            onResize={onQueueResize}
            type='state'
            {...queueProps}
          />
          {queueStateProps && (
            <Grid
              {...queueStateProps}
              colorTheme={colorTheme}
              rows={10}
              fontSize={labelHeight / 3.5}
              labels={['one', 'two', 'three', 'four']}
              colors={[colorTheme.red, colorTheme.slate]}
              visible={[true, true, true, true]}
              rowGap={padding / 4}
              type='queue'
            />
          )}
        </>
      )}
      {apiProps && (
        <>
          <Component
            ref={api}
            colorTheme={colorTheme}
            label='Executable Code API'
            labelHeight={0.06}
            layerDepthFactor={0.85}
            padding={padding / 2}
            type='folder'
            onPointerDown={(transparentState) => {
              setTimeoutRef.current.visible = transparentState
              setIntervalRef.current.visible = transparentState
              setAnimationRef.current.visible = transparentState
              queueMicroTaskRef.current.visible = transparentState
              eventCallbackRef.current.visible = transparentState
              promiseResolveRef.current.visible = transparentState
            }}
            onResize={onApiResize}
            {...apiProps}
          />
          {interfaceProps[0] && (
            <Interface
              ref={setTimeoutRef}
              colorTheme={colorTheme}
              label={'setTimeout'}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[0]}
            />
          )}
          {interfaceProps[1] && (
            <Interface
              ref={setIntervalRef}
              colorTheme={colorTheme}
              label={'setInterval'}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[1]}
            />
          )}
          {interfaceProps[2] && (
            <Interface
              ref={setAnimationRef}
              colorTheme={colorTheme}
              label={`reqAnimationFrame`}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[2]}
            />
          )}
          {interfaceProps[3] && (
            <Interface
              ref={eventCallbackRef}
              colorTheme={colorTheme}
              label={`event callback`}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[3]}
            />
          )}
          {interfaceProps[4] && (
            <Interface
              ref={queueMicroTaskRef}
              colorTheme={colorTheme}
              label={`queueMicrotask`}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[4]}
            />
          )}
          {interfaceProps[5] && (
            <Interface
              ref={promiseResolveRef}
              colorTheme={colorTheme}
              label={`promise return`}
              layerDepthFactor={0.85 ** 2}
              fontSize={labelHeight / 3.5}
              {...interfaceProps[5]}
            />
          )}
        </>
      )}
      {runtimeProps && (
        <Component
          ref={runtime}
          colorTheme={colorTheme}
          label='Event Loop'
          onResize={onRuntimeResize}
          labelHeight={0.06}
          layerDepthFactor={0.85}
          padding={padding / 2}
          type='folder'
          {...runtimeProps}
        />
      )}
    </Component>
  )
})
