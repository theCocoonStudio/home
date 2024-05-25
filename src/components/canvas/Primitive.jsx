import { useEffect } from 'react'

export const Primitive = ({ children, object, ...props }) => {
  useEffect(() => () => object.dispose(), [object])
  return (
    <primitive object={object} {...props}>
      {children}
    </primitive>
  )
}
