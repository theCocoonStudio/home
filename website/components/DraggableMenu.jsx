import { useDraggable } from '@dnd-kit/core'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useTheme } from '../hooks/useTheme'
import { useMenu } from 'website/hooks/useMenu'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const DraggableMenu = forwardRef(function DraggableMenu(
  { children, styles, setShowMenu, onBeforeMaximize, padding, droppableHeight },
  forwardedRef,
) {
  // internal refs
  const container = useRef()
  const content = useRef()
  const panel = useRef()

  // DnD data
  const { attributes, listeners, setNodeRef, node } = useDraggable({
    id: 'draggable',
  })

  // external handle
  useImperativeHandle(
    forwardedRef,
    () => ({ handle: node.current, container: container.current }),
    [node],
  )

  // menu API
  const {
    notification: { show: showNotification, content: notificationContent },
    setNotification,
  } = useMenu()

  // theme data
  const {
    colors: { black },
    page: { requiredFooterHeight },
  } = useTheme()

  // internal state
  const [minimized, setMinimized] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [contentStyles, setContentStyles] = useState({
    marginTop: showNotification ? 16 : 8,
  })

  // internal calculation callbacks
  const getPanelHeight = useCallback(() => {
    return panel.current.clientHeight
  }, [])

  const getContentHeight = useCallback(() => {
    // returns full height of content, even when overflowing container (isScroll=true)

    /* 
    Memo styles trigger a nonzero css transition duration, so we can't use 
    element.clientHeight. This is not a problem since element.scrollHeight gives us
    the height we want regardlesss of the element's current height. 
     */
    const contentHeight =
      content.current.children[1].scrollHeight +
      (showNotification ? content.current.children[0].scrollHeight : 0)

    // add correct margin as scrollHeight doesn't include margin
    const contentMarginTop = showNotification ? 16 : 8
    return contentHeight + contentMarginTop
  }, [showNotification])

  const getIsScroll = useCallback(
    (panelHeight, contentHeight) => {
      return (
        droppableHeight - requiredFooterHeight - panelHeight < contentHeight
      )
    },
    [droppableHeight, requiredFooterHeight],
  )

  // menu control callbacks
  const closeMenu = useCallback(() => {
    setShowMenu(false)
  }, [setShowMenu])

  const dismissNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, show: false }))
  }, [setNotification])

  const toggleMinimized = useCallback(() => {
    if (minimized) {
      const panelHeight = getPanelHeight()
      const contentHeight = getContentHeight()
      const isScroll = getIsScroll(panelHeight, contentHeight)
      // pass expanded height as argument
      onBeforeMaximize(
        isScroll
          ? droppableHeight - requiredFooterHeight // i.e. content maxHeight
          : contentHeight + panelHeight, // full content width since no scroll
      )
    }
    setMinimized((prev) => !prev)
  }, [
    droppableHeight,
    getContentHeight,
    getIsScroll,
    getPanelHeight,
    minimized,
    onBeforeMaximize,
    requiredFooterHeight,
  ])

  // markup styles
  const draggableStyle = useMemo(
    () => ({
      left: `${padding || 0}px`,
      bottom: `${requiredFooterHeight}px`,
    }),
    [padding, requiredFooterHeight],
  )

  const minimizeStyle = useMemo(
    () => (!minimized ? { transform: 'rotate(0deg)' } : {}),
    [minimized],
  )

  const { style: panelStyle, className: panelClassName } = useMemo(() => {
    const className = `${styles.panel} changa-one-regular`
    const style = !minimized
      ? {
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 10px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }
      : undefined
    return { className, style }
  }, [minimized, styles])

  const notificationStyle = useMemo(
    () =>
      showNotification
        ? undefined
        : {
            overflow: 'hidden',
            maxHeight: 0,
            opacity: '0',
          },
    [showNotification],
  )
  /* 
  If `showNotification` changes while menu is open, isScroll needs to be recalculated 
  with content height changes. Content style calculations need to run after the rest 
  of the markup has been updated so that it can use updated markup heights to 
  determine whether to apply isScroll=true styles. This is why these styles use an
  effect and not a memo like the others.
  */

  useEffect(() => {
    const panelHeight = getPanelHeight() // doesn't change
    const contentHeight = getContentHeight() // now reflects heights updated with memos
    const isScroll = getIsScroll(panelHeight, contentHeight)
    setIsScroll(isScroll)
    // now we can apply the proper styles to content.current
    const maximizedMarginTop = showNotification ? 16 : 8 // subtracted from maxHeight
    setContentStyles({
      marginTop: minimized ? 0 : maximizedMarginTop,
      overflowY: !minimized && isScroll ? 'auto' : 'hidden',
      maxHeight: minimized
        ? '0'
        : `${droppableHeight - requiredFooterHeight - panelHeight - maximizedMarginTop}px`,
    })
    /* 
    In case !isScroll and !minimized and showNotification changed to true, run 
    onBeforeMaximize so that height increase from notification doesn't take 
    menu out of bounds
    */
    if (!minimized) {
      onBeforeMaximize(
        isScroll
          ? droppableHeight - requiredFooterHeight
          : contentHeight + panelHeight,
      )
    }
  }, [
    droppableHeight,
    getContentHeight,
    getIsScroll,
    getPanelHeight,
    minimized,
    onBeforeMaximize,
    requiredFooterHeight,
    showNotification,
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
        <div
          className={`${styles.content} raleway no-scroll`}
          style={contentStyles}
          ref={content}
        >
          <div className={styles.notification} style={notificationStyle}>
            <div className='raleway'>
              <div className={styles.notificationIcon}>
                <ReportGmailerrorredIcon fontSize='inherit' />
              </div>
              <div className={styles.notificationText}>
                {notificationContent}
              </div>
              <div className={styles.notificationIcon}>
                <IconButton
                  onClick={dismissNotification}
                  aria-label='dismiss notification'
                  sx={{
                    color: 'common.white',
                    fontSize: 14,
                    padding: 0,
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              </div>
            </div>
          </div>

          {children}
          {!minimized && isScroll && (
            <div className={styles.footer}>
              <div>
                <UnfoldMoreIcon fontSize='inherit' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})
