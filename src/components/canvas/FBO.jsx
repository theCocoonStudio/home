import * as React from 'react'
import {
  WebGL3DRenderTarget,
  WebGLRenderTarget,
  LinearFilter,
  HalfFloatType,
  DepthTexture,
  FloatType,
} from 'three'
import { useThree } from '@react-three/fiber'

export function useFBO(
  /** Width in pixels, or settings (will render fullscreen by default) */
  width,
  /** Height in pixels */
  height,
  /** Depth in pixels, or settings (defaults to width) */
  depth,
  /**Settings */
  settings,
) {
  const size = useThree((state) => state.size)
  const viewport = useThree((state) => state.viewport)
  const _width = typeof width === 'number' ? width : size.width * viewport.dpr
  const _height =
    typeof height === 'number' ? height : size.height * viewport.dpr
  const _depth = typeof depth === 'number' ? depth : _width
  const _settings =
    [width, depth, settings].find((arg) => typeof arg !== 'number') || {}
  const {
    samples = 0,
    depth: depthBuffer,
    data3D,
    ...targetSettings
  } = _settings

  const target = React.useMemo(() => {
    const opts = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      type: HalfFloatType,
      ...targetSettings,
    }
    const target = data3D
      ? new WebGL3DRenderTarget(_width, _height, _depth, opts)
      : new WebGLRenderTarget(_width, _height, opts)

    if (depthBuffer) {
      target.depthTexture = new DepthTexture(_width, _height, FloatType)
    }

    target.samples = samples
    return target
  }, [])

  React.useLayoutEffect(() => {
    target.setSize(_width, _height)
    if (samples) target.samples = samples
  }, [samples, target, _width, _height])

  React.useEffect(() => {
    return () => target.dispose()
  }, [])

  return target
}
