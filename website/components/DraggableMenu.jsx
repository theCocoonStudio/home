import { useDraggable } from '@dnd-kit/core'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import { changaOne, raleway } from '../utils/styles'

export const DraggableMenu = forwardRef(function DraggableMenu(
  { children, styles },
  forwardedRef,
) {
  const container = useRef()
  const { attributes, listeners, setNodeRef, node } = useDraggable({
    id: 'draggable',
  })

  useImperativeHandle(
    forwardedRef,
    () => ({ handle: node.current, container: container.current }),
    [node],
  )

  const {
    colors: { white, black },
  } = useTheme()
  const { style: panelStyle, className: panelClassName } = useMemo(
    () => raleway(700, false, undefined, styles.panel),
    [styles.panel],
  )
  const { style: contentStyle, className: contentClassName } = useMemo(
    () => raleway(400, false, undefined, styles.content),
    [styles.content],
  )
  const {
    style: titleWithDescriptionStyle,
    className: titleWithDescriptionClassName,
  } = useMemo(
    () => changaOne(true, undefined, styles.titleWithDescription),
    [styles.titleWithDescription],
  )

  return (
    <div className={styles.draggable} ref={container}>
      <h1 className={styles.settings}>
        <div style={panelStyle} className={panelClassName}>
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
            <div className={styles.icon}>
              <svg
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
            <div className={styles.icon}>
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
        <div style={contentStyle} className={contentClassName}>
          <div
            className={titleWithDescriptionClassName}
            style={titleWithDescriptionStyle}
          >
            <h4>Performance</h4>{' '}
            <svg
              viewBox='0,0,48,48'
              xmlns='http://www.w3.org/2000/svg'
              strokeWidth={3}
              transform='rotate(0) matrix(1 0 0 1 0 0)'
              width={16}
              height={16}
            >
              <g fill='none'>
                <path
                  fill={white}
                  stroke={black}
                  strokeLinejoin='round'
                  strokeWidth={5}
                  d='M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z'
                />
                <path
                  fill={black}
                  fillRule='evenodd'
                  d='M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z'
                  clipRule='evenodd'
                />
                <path
                  stroke={black}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={5}
                  d='M24.5 34V20H23.5H22.5'
                />
                <path
                  stroke={black}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={5}
                  d='M21 34H28'
                />
              </g>
            </svg>
          </div>
        </div>
      </h1>
    </div>
  )
})
