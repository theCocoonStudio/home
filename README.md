# izzyerlich.com

This is the project for the yet-unreleased [izzyerlich.com](https://izzyerlich.com) website.

There is an associated library included in this repo which contains exports to modules used in the website.

## Structure

**/web**: contains the website code<br/>
**/src**: contains the library and its exports

## Exports

_Note: this library is still unreleased as it is in development._

### **`configureShaderMaterial(materials) : undefined`**<br/>

Uses [`shaderMaterial`](https://drei.docs.pmnd.rs/shaders/shader-material#shadermaterial) to create one or more `THREE.ShaderMaterial` R3F objects and [extends](https://r3f.docs.pmnd.rs/api/additional-exports) the native [R3F](https://r3f.docs.pmnd.rs/api/objects) catalogue to include it. Simplifies dynamic usage of `extend`, which it wraps. <br/>

**params:**<br/>

1. `materials` (required): `Object` containing `materialConfig`s for one or more materials. Each config is keyed by the desired (uppercase) material name.

   `materialConfig` structure:

   ```js
   {
   // THREE.ShaderMaterial.uniforms
   uniforms: Object,
   // THREE.ShaderMaterial.vertexShader
   vert: String,
   // THREE.ShaderMaterial.fragmentshader
   frag: String
   }
   ```

**example usage:**<br/>

```jsx
const FiberComponent = () => {
  // create materials before use
  useLayoutEffect(() => {
    configureShaderMaterial({
      CustomShaderMaterial: {
        uniforms: {
          scale: { value: new Vector2() },
          time: { value: null },
        },
        vert: `GLSL shader code`,
        frag: `GLSL shader code`,
      },
      AnotherShaderMaterial: {
        uniforms: {
          color: { value: new Color() },
          time: { value: null },
        },
        vert: `GLSL shader code`,
        frag: `GLSL shader code`,
      },
    })
  }, [])

  // use as builtin R3F object; uniforms can now be updated declaratively
  return (
    <mesh>
      <planeGeometry />
      <customShaderMaterial scale={scaleVale} time={timeVal} />
    </mesh>
  )
}
```

### **`useFluidTexture(options, priority, fboArgs) : THREE.Texture`**<br/>

Outputs a fluid simulation to a `THREE.Texture` and returns it. Can be used as a `THREE.Material` `.map`, `.alphaMap`, or anywhere a texture would normally be used.

Adapted from [fluid-three](https://github.com/mnmxmx/fluid-three).

**params:**<br/>

1. `options` (optional): `Object` with simulation options; excluded options will use default values:
   ```js
   {
     iterations_poisson = 32,
     iterations_viscous = 32,
     mouse_force = 20,
     resolution = 0.5,
     cursor_size = 100,
     viscous = 30,
     isBounce = false,
     dt = 0.014,
     isViscous = false,
     BFECC = true,
   }
   ```
2. `priority` (optional): `Number` (integer) representing the render priority in the internally-used [`useFrame`](https://r3f.docs.pmnd.rs/api/hooks#taking-over-the-render-loop) hook. Default is `-1`.

3. `fboArgs` (optional): `Array` containing arguments to [useFBO](https://drei.docs.pmnd.rs/misc/fbo-use-fbo#fbo-/-usefbo), used to defined the `THREE.WebGLRenderTarget` that contains the output texture. Default options are analogous to those of `useFBO`.

**example usage:**<br/>

```jsx
const FiberComponent = () => {
  const texture = useFluidTexture()
  return (
    <mesh>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}
```
