import { AdditiveBlending, PlaneGeometry, Vector2 } from 'three'
import fragmentShader from './glsl/externalForce.frag?raw'
import vertexShader from './glsl/mouse.vert?raw'

const materialConfig = {
  vertexShader,
  fragmentShader,
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
  blending: AdditiveBlending,
}

const geometry = () => new PlaneGeometry(1, 1)

export const forcePassConfig = {
  materialConfig,
  geometry,
  fboConfig: { isNull: true },
}