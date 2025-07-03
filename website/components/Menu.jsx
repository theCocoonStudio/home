import { Droppable } from './Droppable'
import { useCallback, useRef } from 'react'
import { clamp } from 'three/src/math/MathUtils.js'
import { useDndMonitor } from '@dnd-kit/core'

export const Menu = ({ config, MenuComponent }) => {
  const draggable = useRef()
  const droppable = useRef()

  const offset = useRef({ x: 0, y: 0 })
  const base = useRef({ x: 0, y: 0 })

  const onMenuDragEnd = useCallback(() => {
    base.current = {
      x: clamp(
        base.current.x + offset.current.x,
        0,
        droppable.current.clientWidth - draggable.current.clientWidth,
      ),
      y: clamp(
        base.current.y + offset.current.y,
        -1 * (droppable.current.clientHeight - draggable.current.clientHeight),
        0,
      ),
    }

    draggable.current.style.transform = `translate3d(${base.current.x}px, ${base.current.y}px, 0)`
  }, [draggable])

  const onMenuDragMove = useCallback(
    ({ delta: { x: deltaX, y: deltaY } }) => {
      offset.current = { x: deltaX, y: deltaY }
      draggable.current.style.transform = `translate3d(${base.current.x + offset.current.x}px, ${base.current.y + offset.current.y}px, 0)`
    },
    [draggable],
  )

  useDndMonitor({
    onDragEnd: onMenuDragEnd,
    onDragMove: onMenuDragMove,
  })
  return (
    <>
      <MenuComponent config={config} ref={draggable} />
      <Droppable ref={droppable} />
    </>
  )
}
