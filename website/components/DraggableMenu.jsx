import { useDraggable } from '@dnd-kit/core'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { raleway } from '../utils/styles'

export const DraggableMenu = forwardRef(function DraggableMenu(
  { children, styles, setShowMenu, onBeforeMaximize, padding, droppableHeight },
  forwardedRef,
) {
  const container = useRef()
  const content = useRef()
  const panel = useRef()
  const { attributes, listeners, setNodeRef, node } = useDraggable({
    id: 'draggable',
  })

  useImperativeHandle(
    forwardedRef,
    () => ({ handle: node.current, container: container.current }),
    [node],
  )

  const {
    colors: { black },
    lengths: { footerHeight },
  } = useTheme()

  const [minimized, setMinimized] = useState(false)
  const [markupHeights, setMarkupHeights] = useState()

  useLayoutEffect(() => {
    setMarkupHeights({
      content: content.current.clientHeight,
      panel: panel.current.clientHeight,
    })
  }, [])

  const draggableStyle = useMemo(
    () => ({
      left: `${padding || 0}px`,
      bottom: `${footerHeight}px`,
    }),
    [footerHeight, padding],
  )

  const minimizeStyle = useMemo(
    () => (!minimized ? { transform: 'rotate(0deg)' } : {}),
    [minimized],
  )

  const { style: panelStyle, className: panelClassName } = useMemo(
    () =>
      raleway(
        700,
        false,
        !minimized
          ? undefined
          : {
              boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 0px',
              transform: 'rotate(0)',
            },
        styles.panel,
      ),
    [minimized, styles.panel],
  )
  const { style: contentStyle, className: contentClassName } = useMemo(() => {
    return raleway(
      400,
      false,
      markupHeights && {
        overflowY:
          !minimized &&
          droppableHeight - footerHeight - markupHeights.panel <
            markupHeights.content
            ? 'auto'
            : 'hidden',
        maxHeight: minimized
          ? '0'
          : `${droppableHeight - footerHeight - markupHeights.panel}px`,
      },
      undefined,
      styles.content,
    )
  }, [droppableHeight, footerHeight, markupHeights, minimized, styles.content])

  const closeMenu = useCallback(() => {
    setShowMenu(false)
  }, [setShowMenu])

  const toggleMinimized = useCallback(() => {
    if (minimized) {
      const isScroll =
        droppableHeight - footerHeight - markupHeights.panel <
        markupHeights.content
      onBeforeMaximize(
        isScroll
          ? droppableHeight - footerHeight
          : markupHeights.content + markupHeights.panel,
      )
    }
    setMinimized((prev) => !prev)
  }, [
    droppableHeight,
    footerHeight,
    markupHeights,
    minimized,
    onBeforeMaximize,
  ])

  return (
    <div className={styles.draggable} ref={container} style={draggableStyle}>
      <div className={styles.settings}>
        <div style={panelStyle} className={panelClassName} ref={panel}>
          <div>
            <div
              className={styles.dragCursor}
              ref={setNodeRef}
              {...listeners}
              {...attributes}
            >
              <svg
                viewBox='0,0,48,48'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                strokeWidth={1}
                transform='rotate(0) matrix(1 0 0 1 0 0)'
                fill={black}
                stroke={black}
              >
                <g fillRule='evenodd' clipRule='evenodd'>
                  <path d='M19 10C19 12.2091 17.2091 14 15 14C12.7909 14 11 12.2091 11 10C11 7.79086 12.7909 6 15 6C17.2091 6 19 7.79086 19 10ZM15 28C17.2091 28 19 26.2091 19 24C19 21.7909 17.2091 20 15 20C12.7909 20 11 21.7909 11 24C11 26.2091 12.7909 28 15 28ZM15 42C17.2091 42 19 40.2091 19 38C19 35.7909 17.2091 34 15 34C12.7909 34 11 35.7909 11 38C11 40.2091 12.7909 42 15 42Z' />
                  <path d='M37 10C37 12.2091 35.2091 14 33 14C30.7909 14 29 12.2091 29 10C29 7.79086 30.7909 6 33 6C35.2091 6 37 7.79086 37 10ZM33 28C35.2091 28 37 26.2091 37 24C37 21.7909 35.2091 20 33 20C30.7909 20 29 21.7909 29 24C29 26.2091 30.7909 28 33 28ZM33 42C35.2091 42 37 40.2091 37 38C37 35.7909 35.2091 34 33 34C30.7909 34 29 35.7909 29 38C29 40.2091 30.7909 42 33 42Z' />
                </g>
              </svg>
            </div>
          </div>
          <h3>Page Settings</h3>
          <div>
            <div className={styles.icon} onClick={toggleMinimized}>
              <svg
                style={minimizeStyle}
                className={styles.minimize}
                viewBox='0,0,48,48'
                xmlns='http://www.w3.org/2000/svg'
                width={20}
                height={20}
                strokeWidth={3}
                transform='rotate(0) matrix(1 0 0 1 0 0)'
              >
                <path
                  fill='none'
                  stroke={black}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M36 18L24 30L12 18'
                />
              </svg>
            </div>
            <div className={styles.icon} onClick={closeMenu}>
              <svg
                viewBox='0,0,48,48'
                xmlns='http://www.w3.org/2000/svg'
                width={20}
                height={20}
                strokeWidth={3}
                transform='rotate(0) matrix(1 0 0 1 0 0)'
              >
                <g
                  fill='none'
                  stroke={black}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                >
                  <path d='M14 14L34 34' />
                  <path d='M14 34L34 14' />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div style={contentStyle} className={contentClassName} ref={content}>
          {children}
        </div>
      </div>
    </div>
  )
})
