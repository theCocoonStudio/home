import { forwardRef, useCallback, useRef } from 'react'
import { configureShaderMaterial } from './helpers'
import { usePointerDiff } from 'web/hooks/usePointerDiff'
import frag from './glsl/externalForce.frag?raw'
import vert from './glsl/mouse.vert?raw'
import { RenderTexture } from '@react-three/drei'
import { AdditiveBlending, Vector2 } from 'three'
import { useThree } from '@react-three/fiber'
import { FluidQuad } from './FluidQuad'

configureShaderMaterial({
  ForceMaterial: {
    vert,
    frag,
    uniforms: {
      px: {
        value: null,
      },
      force: {
        value: new Vector2(0.0, 0.0),
      },
      center: {
        value: new Vector2(0.0, 0.0),
      },
      scale: {
        value: null,
      },
    },
  },
})

export const ForceTexture = forwardRef(function ForceTexture(
  { px, mouse_force, cursor_size, inputTexture, ...props },
  ref,
) {
  const diff = usePointerDiff()

  const scaleVector = useRef(new Vector2(cursor_size, cursor_size))
  const forceVector = useRef(new Vector2())
  const centerVector = useRef(new Vector2())

  const get = useThree((state) => state.get)

  const updateForce = useCallback((diff, px, get, cursor_size, mouse_force) => {
    const { pointer } = get()
    const forceX = (diff.x / 2) * mouse_force
    const forceY = (diff.y / 2) * mouse_force

    const cursorSizeX = cursor_size * px.x
    const cursorSizeY = cursor_size * px.y

    const centerX = Math.min(
      Math.max(pointer.x, -1 + cursorSizeX + px.x * 2),
      1 - cursorSizeX - px.x * 2,
    )
    const centerY = Math.min(
      Math.max(pointer.y, -1 + cursorSizeY + px.y * 2),
      1 - cursorSizeY - px.y * 2,
    )

    forceVector.current.set(forceX, forceY)
    centerVector.current.set(centerX, centerY)
    scaleVector.current.set(cursor_size, cursor_size)
  }, [])

  return (
    <RenderTexture ref={ref} {...props}>
      <FluidQuad geometryProps={{ args: [1, 1] }}>
        <forceMaterial
          blending={AdditiveBlending}
          px={px}
          scale={scaleVector.current}
          force={forceVector.current}
          center={centerVector.current}
          onBeforeRender={(gl) => {
            updateForce(diff, px, get, cursor_size, mouse_force)
            gl.initTexture(inputTexture.clone())
          }}
        />
      </FluidQuad>
    </RenderTexture>
  )
})
