import { useMemo, useState } from 'react'
import { TargetItemContext } from './TargetItemContext'

export const TargetItemProvider = ({ children }) => {
  const [targetItems, setTargetItems] = useState()

  const value = useMemo(() => ({ targetItems, setTargetItems }), [targetItems])
  return (
    <TargetItemContext.Provider value={value}>
      {children}
    </TargetItemContext.Provider>
  )
}
