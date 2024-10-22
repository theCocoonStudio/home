import {
  Camera,
  Mesh,
  PlaneGeometry,
  RawShaderMaterial,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from 'three'

export class ShaderPass {
  #fbo
  #children
  #onDispose
  #uniforms = {}
  constructor({
    materialConfig: {
      vertexShader,
      fragmentShader,
      uniforms = {},
      raw = false,
      ...materialProps
    },
    material,
    geometry,
    camera,
    onBeforeRender,
    onAfterRender,
    fboConfig: { width, height, options, isNull = false },
    fbo,
    children,
    onDispose,
  }) {
    if (material) {
      this.material = typeof material === 'function' ? material() : material
    } else {
      this.#uniforms = uniforms
      this.material = raw
        ? new RawShaderMaterial({
            uniforms: this.#uniforms,
            vertexShader,
            fragmentShader,
            ...materialProps,
          })
        : new ShaderMaterial({
            uniforms: this.#uniforms,
            vertexShader,
            fragmentShader,
            ...materialProps,
          })
    }
    if (geometry) {
      this.geometry = typeof geometry === 'function' ? geometry() : geometry
    } else {
      this.geometry = new PlaneGeometry(2.0, 2.0)
    }

    this.mesh = new Mesh(this.geometry, this.material)

    if (camera) {
      this.camera = typeof camera === 'function' ? camera() : camera
    } else {
      this.camera = new Camera()
    }

    this.scene = new Scene()
    this.scene.add(this.mesh)

    if (children) {
      this.#children =
        typeof children === 'function'
          ? children({ uniforms: this.#uniforms, mesh: this.mesh })
          : children
      this.scene.add(this.#children)
    }

    if (typeof onBeforeRender === 'function') {
      this.scene.onBeforeRender = onBeforeRender
    }
    if (typeof onAfterRender === 'function') {
      this.scene.onAfterRender = onAfterRender
    }
    if (fbo) {
      this.#fbo = fbo
    } else if (!isNull) {
      this.#fbo = new WebGLRenderTarget(width, height, options)
    } else {
      this.#fbo = null
    }

    this.#onDispose = onDispose
  }

  dispose(material = true, geometry = true, fbo = true, onDispose = true) {
    material && this.material.dispose()
    geometry && this.geometry.dispose()
    fbo && this.#fbo.dispose()
    if (onDispose && typeof this.#onDispose === 'function') {
      this.#onDispose(this.#children)
    }
  }

  setFBO(fbo) {
    this.#fbo = fbo
    return this
  }

  get fbo() {
    return this.#fbo
  }

  setOnBeforeRender(func) {
    this.scene.onBeforeRender = func
    return this
  }

  get onBeforeRender() {
    return this.scene.onBeforeRender
  }

  setOnAfterRender(func) {
    this.scene.onAfterRender = func
    return this
  }

  get onAfterRenderRender() {
    return this.scene.onAfterRender
  }

  get uniforms() {
    return this.#uniforms
  }

  get children() {
    return this.#children
  }

  updateUniforms(uniforms = {}) {
    for (const property in uniforms) {
      this.#uniforms[property] = uniforms[property]
      this.material.uniforms[property] = this.#uniforms[property]
    }
    return this
  }

  render(renderer) {
    renderer.setRenderTarget(this.#fbo)
    renderer.render(this.scene, this.camera)
    renderer.setRenderTarget(null)
    return this
  }
}
