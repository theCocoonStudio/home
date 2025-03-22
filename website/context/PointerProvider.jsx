import { useMemo, useState } from 'react'
import { PointerContext } from './PointerContext'

export const PointerProvider = ({ children }) => {
  const [pointer, setPointer] = useState(false)

  const value = useMemo(() => ({ pointer, setPointer }), [pointer])

  return (
    <PointerContext.Provider value={value}>{children}</PointerContext.Provider>
  )
}
