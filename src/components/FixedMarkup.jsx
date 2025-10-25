import { createPortal } from 'react-dom'
import { useScrollControls } from 'src'

export const FixedMarkup = ({ children }) => {
  const { fixedContainer } = useScrollControls()
  return fixedContainer && createPortal(<>{children}</>, fixedContainer)
}
