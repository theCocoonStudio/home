import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const _DirectionalLight = function DirectionalLight(
  { color, intensity, ...props },
  ref,
) {
  const light = useRef()

  useEffect(() => {
    light.current.shadow.camera.near = 0
    light.current.shadow.camera.far = 500
    light.current.shadow.camera.right = 1
    light.current.shadow.camera.left = -1
    light.current.shadow.camera.top = 1
    light.current.shadow.camera.bottom = -1
  }, [])

  useImperativeHandle(ref, () => light.current)
  return <directionalLight ref={light} args={[color, intensity]} {...props} />
}

export const DirectionalLight = forwardRef(_DirectionalLight)
