import { forwardRef, useRef, useImperativeHandle } from 'react'
import { GetParent } from 'src/components/canvas/GetParent'

export const withParent = (Component, parentKey = 'parent') =>
  forwardRef(function MaterialWithParent(props, ref) {
    const internal = useRef()
    const parent = useRef()
    useImperativeHandle(ref, () => ({ ...internal.current, [parentKey]: parent.current }), [])
    return (
      <>
        <Component ref={internal} {...props} />
        <GetParent ref={parent} />
      </>
    )
  })
