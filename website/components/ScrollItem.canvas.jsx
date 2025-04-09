import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ExtrudeGeometry, Shape, Vector3 } from 'three'
import { useTheme } from '../hooks/useTheme'
import { Html } from '@react-three/drei'
import styles from 'website/styles/ScrollItem.canvas.module.css'
import { nunito } from '../utils/styles'
import { damp3 } from 'maath/easing'

export const ScrollItem = forwardRef(function ScrollItem(
  {
    depth = 0.003,
    borderRadius = 0.05,
    size = 300,
    itemCount = 15,
    itemPadding = 0.1,
    itemIndex = 0,
    zPos,
    revealRange = [0.227, 0.272 - 0.227],
    disposeRange = [0.2721, 0.299 - 0.2721],
    scrollBoundsRef,
  },
  forwardedRef,
) {
  const settings = useMemo(
    () => ({
      steps: 2,
      depth: depth / 3,
      bevelEnabled: true,
      bevelThickness: depth / 3,
      bevelSize: depth / 3,
      bevelOffset: 0,
      bevelSegments: 6,
      curveSegments: 12,
    }),
    [depth],
  )

  const {
    colors: { black, white },
    utilReturn: { className, style },
  } = useTheme(
    'orbitron',
    500,
    ({ colors: { black }, lengths: { atomicPadding } }) => ({
      width: `${size}px`,
      height: `${size}px`,
      color: black,
      padding: `${3 * atomicPadding}px`,
    }),
    styles.div,
  )

  const geometry = useMemo(() => {
    const totalWidth = 1.0
    const totalHeight = 1.0
    const width = totalWidth - (2 * depth) / 3
    const height = totalHeight - (2 * depth) / 3
    const shape = new Shape()
      .moveTo(-width / 2, -height / 2 + borderRadius)
      .lineTo(-width / 2, height / 2 - borderRadius)
      .arc(borderRadius, 0, borderRadius, Math.PI, Math.PI / 2, true)
      .lineTo(width / 2 - borderRadius, height / 2)
      .arc(0, -borderRadius, borderRadius, Math.PI / 2, 0, true)
      .lineTo(width / 2, -height / 2 + borderRadius)
      .arc(-borderRadius, 0, borderRadius, 0, (Math.PI * 3) / 2, true)
      .lineTo(-width / 2 + borderRadius, -height / 2)
      .arc(0, borderRadius, borderRadius, (Math.PI * 3) / 2, Math.PI, true)

    const geometry = new ExtrudeGeometry(shape, settings)
    geometry.center()
    return geometry
  }, [borderRadius, depth, settings])

  useEffect(
    () => () => {
      geometry.dispose()
    },
    [geometry],
  )

  const mesh = useRef()
  const group = useRef()
  const html = useRef()

  const startPos = useRef(0)
  const targetScale = useRef(new Vector3())
  const targetPos = useRef(new Vector3())

  const [scale, setScale] = useState()

  const position = useMemo(
    () => new Vector3(scale ? -scale / 2 - (scale * 10) / size : 0, 0, 0),
    [scale, size],
  )

  const boundsCallback = useCallback(
    ({ ppwu, min }) => {
      setScale(size / ppwu.x)
      scale && (startPos.current = min.x - scale - (scale * 10) / size)
      const targetDepth =
        ((scrollBoundsRef.current.max.x - scrollBoundsRef.current.min.x) /
          itemCount) *
        (1 - itemPadding)
      targetScale.current.set(
        depth,
        (scrollBoundsRef.current.max.y - scrollBoundsRef.current.min.y) *
          (1 - itemPadding),
        targetDepth / depth,
      )
      targetPos.current.set(
        scrollBoundsRef.current.min.x +
          (targetDepth / (1 - itemPadding)) * (0.5 + itemIndex),
        scrollBoundsRef.current.min.y +
          (targetScale.current.y / (1 - itemPadding)) * 0.5,
        zPos - depth / 2,
      )
    },
    [
      depth,
      itemCount,
      itemIndex,
      itemPadding,
      scale,
      scrollBoundsRef,
      size,
      zPos,
    ],
  )

  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      const revealOffset = scrollData.range(...revealRange)
      const disposeOffset = scrollData.range(...disposeRange)

      // group position
      group.current.position.x = startPos.current * (1 - revealOffset)
      mesh.current.matrixWorldNeedsUpdate = true
      group.current.matrixWorldNeedsUpdate = true
      // mesh transforms
      if (revealOffset < 1.0) {
        damp3(mesh.current.scale, [scale, scale, 1.0], 0.15, delta)
        damp3(mesh.current.rotation, [0, 0, 0], 0.15, delta)
        damp3(mesh.current.position, position, 0.15, delta)
      } else {
        damp3(
          mesh.current.scale,
          [
            scale - (scale - targetScale.current.x) * disposeOffset,
            scale - (scale - targetScale.current.y) * disposeOffset,
            1.0 - (1.0 - targetScale.current.z) * disposeOffset,
          ],
          0.05,
          delta,
        )
        damp3(
          mesh.current.rotation,
          [0, (Math.PI / 2) * disposeOffset, 0],
          0.15,
          delta,
        )
        const localPosTarget = group.current.worldToLocal(
          targetPos.current.clone(),
        )

        damp3(
          mesh.current.position,
          [
            position.x - (position.x - localPosTarget.x) * disposeOffset,
            position.y - (position.y - localPosTarget.y) * disposeOffset,
            0,
          ],
          0.05,
          delta,
        )
      }
    },
    [disposeRange, position, revealRange, scale],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({
      boundsCallback,
      scrollCallback,
    }),
    [boundsCallback, scrollCallback],
  )

  const { style: pStyle, className: pClassName } = useMemo(
    () => nunito([300], { color: black }, styles.paragraph),
    [black],
  )

  const { style: dStyle, className: dClassName } = useMemo(
    () => nunito([200], { color: black }, styles.date),
    [black],
  )

  return (
    scale && (
      <group position-z={zPos} ref={group} position-x={-10}>
        <mesh ref={mesh} geometry={geometry} scale-x={scale} scale-y={scale}>
          <meshStandardMaterial color={black} />
          {/* <mesh scale={[0.2, 0.2, 0.01]}>
            <sphereGeometry />
            <meshStandardMaterial color='red' />
          </mesh> */}
        </mesh>
        <Html
          transform
          distanceFactor={0.1}
          position={[scale / 2 + (scale * 10) / size, 0, 0]}
        >
          <div className={className} style={style}>
            <div className={dClassName} style={dStyle}>
              <div>April 1, 2025</div>
            </div>
            <div className={styles.title}>
              <span>Hello, this is just a title example. Here it is.</span>
            </div>
            <div className={pClassName} style={pStyle}>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </div>
            </div>
          </div>
        </Html>
      </group>
    )
  )
})
