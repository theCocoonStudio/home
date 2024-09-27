import { forwardRef } from 'react'

export const FluidGeometry = forwardRef(function FluidGeometry(props, ref) {
  return <planeGeometry ref={ref} args={[2, 2]} {...props} />
})
