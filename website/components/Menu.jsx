import { Droppable } from './Droppable'
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import { clamp } from 'three/src/math/MathUtils.js'
import { useDndMonitor } from '@dnd-kit/core'
import { DraggableMenu } from './DraggableMenu'
import { useMenu } from 'website/hooks/useMenu'
import styles from 'website/styles/Menu.module.css'
import { useTheme } from '../hooks/useTheme'
import { ResizeEventContext } from '../../src/context/ResizeEventContext'
import { useLightbox } from '../hooks/useLightbox'

export const Menu = ({
  config,
  MenuComponent,
  setScrollDistanceFactor,
  scrollContainer,
}) => {
  const {
    lengths: { footerHeight, atomicPadding },
  } = useTheme()

  const draggable = useRef()
  const droppable = useRef()

  const offset = useRef({ x: 0, y: 0 })
  const base = useRef({ x: 0, y: 0 })

  const { showMenu, setShowMenu } = useMenu()

  const { padding, droppableWidth, droppableHeight } = useMemo(() => {
    if (showMenu) {
      const width = scrollContainer.clientWidth
      const padding =
        width > 768
          ? 8 * atomicPadding
          : width > 450
            ? 4 * atomicPadding
            : 2 * atomicPadding
      return {
        droppableWidth: width,
        padding,
        droppableHeight: scrollContainer.clientHeight,
      }
    }
    return {}
  }, [atomicPadding, scrollContainer, showMenu])

  const onMenuDragEnd = useCallback(
    (height) => {
      if (droppableWidth && padding) {
        base.current = {
          x: clamp(
            base.current.x + offset.current.x,
            -padding,
            droppableWidth - draggable.current.container.clientWidth - padding,
          ),
          y: clamp(
            base.current.y + offset.current.y,
            -1 *
              (droppable.current.clientHeight -
                (typeof height === 'number'
                  ? height
                  : draggable.current.container.clientHeight) -
                footerHeight),
            footerHeight,
          ),
        }
        offset.current = { x: 0, y: 0 }

        draggable.current.container.style.transition = 'transform .2s'
        draggable.current.container.style.transform = `translate3d(${base.current.x}px, ${base.current.y}px, 0)`
      }
    },
    [droppableWidth, footerHeight, padding],
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

  const { showLightbox } = useLightbox()

  const { entries } = useContext(ResizeEventContext)

  // hide menu on resize
  useEffect(() => {
    setShowMenu(false)
  }, [entries, setShowMenu])

  // hide menu on lightbox open
  useEffect(() => {
    if (showLightbox) {
      setShowMenu(false)
    }
  }, [setShowMenu, showLightbox])

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
        padding={padding}
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
