import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useEffect,
  useState,
  useCallback,
  useContext,
  useRef,
} from 'react'
import { RenderTexture, RenderCubeTexture } from '@react-three/drei'
import { RenderTexture as RenderTexture3D } from 'src/components/canvas/RenderTexture'
import { ShaderContext } from 'src/context/shader'

export const ShaderPassesTexture = forwardRef(function ShaderPassesTexture(
  { children, ...props },
  ref,
) {
  const [fbos, setFbos] = useState({})

  const register = useCallback(
    (name, ref) => {
      console.log(name)
      setFbos((prev) => ({ ...prev, [name]: ref }))
    },
    [setFbos],
  )

  const deregister = useCallback(
    (name) => {
      // eslint-disable-next-line no-unused-vars
      setFbos(({ [name]: _, ...rest }) => ({ ...rest }))
    },
    [setFbos],
  )

  const value = useMemo(
    () => ({ fbos, register, deregister }),
    [deregister, fbos, register],
  )

  useImperativeHandle(ref, () => fbos, [fbos])

  return (
    <ShaderContext.Provider value={value} {...props}>
      {children}
    </ShaderContext.Provider>
  )
})

const targets = {
  '2d': RenderTexture,
  '3d': RenderTexture3D,
  cube: RenderCubeTexture,
}

export const ShaderPass = forwardRef(function ShaderPasses(
  { children, name, type = '2D', ...props },
  ref,
) {
  const textureRef = useRef()
  useImperativeHandle(ref, () => textureRef.current)

  const { register, deregister, fbos } = useContext(ShaderContext)

  const Target = useMemo(() => targets[type], [type])

  useEffect(() => {
    register(name, textureRef)
    return () => deregister(name)
  }, [name, register, deregister])

  return (
    <Target ref={textureRef} {...props}>
      {typeof children === 'function' ? children(fbos) : children}
    </Target>
  )
})
