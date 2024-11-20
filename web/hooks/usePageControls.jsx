import { useContext, useMemo } from 'react'
import { ControlsContext } from 'web/context/ControlsContext'

export const usePageControls = () => {
  const context = useContext(ControlsContext)

  const memoized = useMemo(() => context, [context])
  return memoized
}
