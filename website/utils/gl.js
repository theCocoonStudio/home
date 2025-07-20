import { CubeCamera, WebGLCubeRenderTarget } from 'three'

export const compileSceneAsync = (gl, scene, camera, callback) => {
  const invisible = []
  // Find all invisible objects, store and then flip them
  scene.traverse((object) => {
    if (object.visible === false) {
      invisible.push(object)
      object.visible = true
      object.frustumCulled = false
    }
  })
  // Now compile the scene

  gl.compileAsync(scene, camera).then((x) => {
    // And for good measure, hit it with a cube camera
    const cubeRenderTarget = new WebGLCubeRenderTarget(128)
    const cubeCamera = new CubeCamera(0.01, 100000, cubeRenderTarget)
    cubeCamera.update(gl, scene)
    cubeRenderTarget.dispose()

    // Flips these objects back
    invisible.forEach((object) => {
      object.visible = false
      object.frustumCulled = true
    })
    callback(x)
  })
}
