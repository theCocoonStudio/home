import { useDraggable } from '@dnd-kit/core'
import { forwardRef, useImperativeHandle } from 'react'
import styles from 'website/styles/Menu.module.css'

export const DraggableMenu = forwardRef(function DraggableMenu(
  { children },
  forwardedRef,
) {
  const { attributes, listeners, setNodeRef, node } = useDraggable({
    id: 'draggable',
  })

  useImperativeHandle(forwardedRef, () => node.current, [node])

  return (
    <div
      className={styles.draggable}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  )
})
