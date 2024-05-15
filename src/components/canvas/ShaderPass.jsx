import { useRef, forwardRef, useImperativeHandle, useMemo } from 'react'

import rawShaderMaterial from 'src/types/rawShaderMaterial'
import { RenderTexture, shaderMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const ShaderPass = forwardRef(function ShaderPass(
  { children, uniforms, vert, frag, renderTextureProps, meshProps, raw, renderPriority },
  ref,
) {
  const Material = useMemo(
    () => (raw ? rawShaderMaterial(uniforms, vert, frag) : shaderMaterial(uniforms, vert, frag)),
    [frag, raw, uniforms, vert],
  )

  const material = useRef()
  const texture = useRef(null)
  const mesh = useRef(null)

  const data = useRef({ texture: texture.current, material: material.current, mesh: mesh.current })
  useImperativeHandle(ref, () => data)

  useFrame(() => [])

  return (
    <RenderTexture key={material.key} ref={texture} {...{ ...renderTextureProps, ...{ renderPriority } }}>
      <mesh ref={mesh} {...meshProps}>
        {children}
        <Material ref={material} />
      </mesh>
    </RenderTexture>
  )
})
