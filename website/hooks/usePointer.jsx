import { useContext, useLayoutEffect, useMemo } from 'react'
import { PointerContext } from '../context/PointerContext'

export const usePointer = (setPointerArg) => {
  const { pointer, setPointer } = useContext(PointerContext)

  useLayoutEffect(() => {
    if (typeof setPointerArg !== 'undefined') {
      setPointer(setPointerArg)
    }
  }, [setPointer, setPointerArg])

  const value = useMemo(() => ({ pointer, setPointer }), [pointer, setPointer])

  return value
}
