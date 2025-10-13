import { Droppable } from './Droppable'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { clamp } from 'three/src/math/MathUtils.js'
import { useDndMonitor } from '@dnd-kit/core'
import { DraggableMenu } from './DraggableMenu'
import { useMenu } from 'website/hooks/useMenu'
import styles from 'website/styles/Menu.module.css'
import { useTheme } from '../hooks/useTheme'
import { useResizeEvent } from 'src/hooks/useResizeEvent'

export const Menu = ({
  config,
  MenuComponent,
  setScrollDistanceFactor,
  scrollContainer,
  atStartOrFinish,
  ready,
}) => {
  const {
    lengths: { sidePadding },
    page: { requiredFooterHeight },
  } = useTheme()

  const draggable = useRef()
  const droppable = useRef()

  const offset = useRef({ x: 0, y: 0 })
  const base = useRef({ x: 0, y: 0 })

  const { showMenu, setShowMenu } = useMenu()

  const { droppableWidth, droppableHeight } = useMemo(() => {
    if (showMenu) {
      return {
        droppableWidth: scrollContainer.clientWidth,

        droppableHeight: scrollContainer.clientHeight,
      }
    }
    return {}
  }, [scrollContainer, showMenu])

  const onMenuDragEnd = useCallback(
    (height) => {
      if (droppableWidth && sidePadding) {
        base.current = {
          x: clamp(
            base.current.x + offset.current.x,
            -sidePadding,
            droppableWidth -
              draggable.current.container.clientWidth -
              sidePadding,
          ),
          y: clamp(
            base.current.y + offset.current.y,
            -1 *
              (droppable.current.clientHeight -
                (typeof height === 'number'
                  ? height
                  : draggable.current.container.clientHeight) -
                requiredFooterHeight),
            requiredFooterHeight,
          ),
        }
        offset.current = { x: 0, y: 0 }

        draggable.current.container.style.transition = 'transform .2s'
        draggable.current.container.style.transform = `translate3d(${base.current.x}px, ${base.current.y}px, 0)`
      }
    },
    [droppableWidth, requiredFooterHeight, sidePadding],
  )

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

  const size = useResizeEvent()

  // hide menu on resize
  useEffect(() => {
    setShowMenu(false)
  }, [setShowMenu, size])

  // hide menu on atStartOrFinish or !ready
  useEffect(() => {
    if (atStartOrFinish.either || !ready) {
      setShowMenu(false)
    }
  }, [atStartOrFinish.either, ready, setShowMenu])

  useEffect(() => {
    if (!showMenu) {
      base.current = { x: 0, y: 0 }
      offset.current = { x: 0, y: 0 }
    }
  }, [showMenu])
  return showMenu ? (
    <>
      <DraggableMenu
        styles={styles}
        ref={draggable}
        setShowMenu={setShowMenu}
        onBeforeMaximize={onMenuDragEnd}
        padding={sidePadding}
        droppableWidth={droppableWidth}
        droppableHeight={droppableHeight}
      >
        <MenuComponent
          config={config}
          setShowMenu={setShowMenu}
          setScrollDistanceFactor={setScrollDistanceFactor}
        />
      </DraggableMenu>
      <Droppable ref={droppable} styles={styles} />
    </>
  ) : null
}
