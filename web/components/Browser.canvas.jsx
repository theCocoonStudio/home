import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { Vector3 } from 'three'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { Text } from '@react-three/drei'
import Font from 'web/public/fonts/Anonymous_Pro/AnonymousPro-Regular.ttf'

export const Browser = forwardRef(function Browser(
  { setFloorY, colorTheme, tracking, factor = 1.5, titleHeight = 0.1 },
  forwardedRef,
) {
  const minimize = useRef()
  const maximize = useRef()
  const exit = useRef()
  const browser = useRef()
  const title = useRef()
  const mesh = useRef()
  const heap = useRef()
  const stack = useRef()
  const queue = useRef()

  useImperativeHandle(forwardedRef, () => mesh.current, [])
  const resizeCallback = useCallback(
    ({ target, element, min, max, ppwu, contentRect, camera }) => {
      setFloorY(min.y)

      const scale = new Vector3(
        max.x - min.x,
        max.y - titleHeight - min.y,
        (max.x - min.x) / 10,
      )

      const position = new Vector3(
        min.x + target.scale.x / 2,
        min.y + target.scale.y / 2,
        target.position.z,
      )

      target.position.copy(position)
      target.scale.copy(scale)

      browser.current.scale.set(scale.x, titleHeight, scale.z)
      browser.current.position.z = position.z
      browser.current.position.x = position.x
      browser.current.position.y = max.y - titleHeight / 2

      exit.current.scale.set(titleHeight / 5, titleHeight / 5, titleHeight / 5)
      exit.current.position.z =
        browser.current.position.z + scale.z / 2 - exit.current.scale.z / 2
      exit.current.position.y = browser.current.position.y
      exit.current.position.x = max.x - exit.current.scale.x - 0.05 * factor

      maximize.current.scale.copy(exit.current.scale)
      maximize.current.position.copy(exit.current.position)
      maximize.current.position.x =
        exit.current.position.x - 0.03 * factor - exit.current.scale.x

      minimize.current.scale.copy(exit.current.scale)
      minimize.current.position.copy(exit.current.position)
      minimize.current.position.x =
        maximize.current.position.x - 0.03 * factor - exit.current.scale.x

      title.current.position.y = exit.current.position.y
      title.current.position.z = position.z + scale.z / 2 + 0.01
      title.current.position.x = min.x + 0.05 * factor

      heap.current.scale.set(
        scale.x - 0.1 * factor,
        0.5 * scale.y - 0.075 * factor,
        0.9 * scale.z,
      )
      heap.current.position.z = position.z
      heap.current.position.x = position.x
      heap.current.position.y = min.y + 0.05 * factor + heap.current.scale.y / 2

      stack.current.scale.set(
        0.5 * scale.x - 0.075 * factor,
        0.5 * scale.y - 0.075 * factor,
        0.9 * scale.z,
      )
      stack.current.position.z = position.z
      stack.current.position.y =
        max.y - titleHeight - 0.05 * factor - stack.current.scale.y / 2
      stack.current.position.x =
        max.x - 0.05 * factor - stack.current.scale.x / 2

      queue.current.scale.set(
        0.5 * scale.x - 0.075 * factor,
        0.5 * scale.y - 0.075 * factor,
        0.9 * scale.z,
      )

      queue.current.position.z = position.z
      queue.current.position.y =
        max.y - titleHeight - 0.05 * factor - stack.current.scale.y / 2
      queue.current.position.x =
        min.x + 0.05 * factor + stack.current.scale.x / 2
    },
    [factor, setFloorY, titleHeight],
  )
  useMarkupBounds({
    target: mesh,
    element: tracking,
    callback: resizeCallback,
  })

  return (
    <group position-z={-1}>
      <mesh ref={minimize}>
        <sphereGeometry />
        <meshPhongMaterial color={'green'} />
      </mesh>
      <mesh ref={maximize}>
        <sphereGeometry />
        <meshPhongMaterial color={'orange'} />
      </mesh>
      <mesh ref={exit}>
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
      <mesh ref={browser} castShadow>
        <boxGeometry />
        <meshPhongMaterial color={colorTheme.charcoal} />
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
    </group>
  )
})
