import { Droppable } from './Droppable'
import { useCallback, useRef } from 'react'
import { clamp } from 'three/src/math/MathUtils.js'
import { useDndMonitor } from '@dnd-kit/core'
import { DraggableMenu } from './DraggableMenu'
import styles from 'website/styles/Menu.module.css'

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
        droppable.current.clientWidth - draggable.current.container.clientWidth,
      ),
      y: clamp(
        base.current.y + offset.current.y,
        -1 *
          (droppable.current.clientHeight -
            draggable.current.container.clientHeight),
        0,
      ),
    }
    offset.current = { x: 0, y: 0 }
    draggable.current.container.style.transition = 'transform .2s'
    draggable.current.container.style.transform = `translate3d(${base.current.x}px, ${base.current.y}px, 0)`
  }, [draggable])

  const onMenuDragMove = useCallback(
    ({ delta: { x: deltaX, y: deltaY } }) => {
      offset.current = { x: deltaX, y: deltaY }
      draggable.current.container.style.transform = `translate3d(${base.current.x + offset.current.x}px, ${base.current.y + offset.current.y}px, 0)`
    },
    [draggable],
  )

  const onMenuDragStart = useCallback((e) => {
    draggable.current.container.style.transition = 'none'
  }, [])

  useDndMonitor({
    onDragEnd: onMenuDragEnd,
    onDragMove: onMenuDragMove,
    onDragStart: onMenuDragStart,
  })
  return (
    <>
      <DraggableMenu styles={styles} ref={draggable}>
        <MenuComponent config={config} />
      </DraggableMenu>
      <Droppable ref={droppable} styles={styles} />
    </>
  )
}
