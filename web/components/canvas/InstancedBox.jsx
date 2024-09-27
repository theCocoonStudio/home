import { forwardRef, useImperativeHandle, useRef } from 'react'

export const InstancedBox = forwardRef(function InstancedBox(
  { ...props },
  forwardRef,
) {
  const ref = useRef()
  useImperativeHandle(forwardRef, () => {
    ref.current
  })
  return <instancedMesh ref={ref} {...props}></instancedMesh>
})
