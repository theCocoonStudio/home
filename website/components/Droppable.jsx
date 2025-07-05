import { useDroppable } from '@dnd-kit/core'
import { forwardRef, useImperativeHandle } from 'react'

export const Droppable = forwardRef(function Droppable(
  { children, styles },
  forwardedRef,
) {
  const { setNodeRef, node } = useDroppable({
    id: 'droppable',
  })

  useImperativeHandle(forwardedRef, () => node.current, [node])

  return (
    <div className={styles.droppable} ref={setNodeRef}>
      {children}
    </div>
  )
})
