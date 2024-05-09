import { forwardRef, useImperativeHandle, useRef } from 'react'

export const GetParent = forwardRef(function GetParent(props, ref) {
  const localRef = useRef()
  useImperativeHandle(ref, () => localRef.current.parent)
  return <object3D ref={localRef} {...props} />
})
