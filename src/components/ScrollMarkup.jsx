import { createPortal } from 'react-dom'
import { useScrollControls } from 'src'

export const ScrollMarkup = ({ children }) => {
  const { scrollContainer } = useScrollControls()
  return scrollContainer && createPortal(<>{children}</>, scrollContainer)
}
