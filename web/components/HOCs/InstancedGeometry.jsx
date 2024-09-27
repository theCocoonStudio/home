import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

export const InstancedGeometry = forwardRef(function InstancedGeometry(
  { Geometry, args = [], children, ...props },
  forwardRef,
) {
  const geometry = useMemo(() => new Geometry(...args), [Geometry, args])
  useEffect(() => () => geometry.dispose(), [geometry])

  const ref = useRef()
  useImperativeHandle(forwardRef, () => ref.current)

  return (
    <instancedBufferGeometry
      ref={ref}
      index={geometry.index}
      attributes={geometry.attributes}
      {...props}
    >
      {children}
    </instancedBufferGeometry>
  )
})
