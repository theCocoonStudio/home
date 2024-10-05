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

### **`use2DBounds(object3DRef, Use2DBoundsOptions) : Use2DBoundsResults`**<br/>

_Note: if you need to output your scene to a subset of the canvas, `gl.scissor` is likely more suitable (and performant, given that the resolution and buffer sizes will be smaller). [This component](https://drei.docs.pmnd.rs/portals/view#view) from the `drei` team is a turnkey solution._

A convenient hook for aligning objects in a 3D scene to positions on the canvas or to a `THREE.Box2` corresponding to an HTML element contained within the canvas:

- use the returned data to position the element yourself or let the hook do the work for you
- works imperatively under the hood so canvas/viewport/object changes are automatically reflected in the result
- position, rotation, and scale changes are automaticaly dampened using [maath/easing](https://github.com/pmndrs/maath/blob/main/README.md)
- built in easing is fully customizeable
- full customization of results: the new position, rotation, and scale can be updated based on the calculated targets before being applied using optional callbacks
- easily pause the hook to optimize performance if you know your app won't need it

**params:**<br/>

1. `object3DRef` (required): `React.Ref` containing a `THREE.Object3D` to bind. Note that this is a ref so React won't waste compute resources on lifecycle updates unless needed.

2. `Use2DBoundsOptions` (optional): `Object` with config options:

   ```js
    {
      // React.ref to an HTML element contained fully within the Canvas. If trackingElement is true, the hook uses the element as the 2D bounds.
      trackingElementRef,
      // If false, the hook uses the Canvas as 2D bounds. If true, the hook uses the element as 2D bounds. Setting this to true assumes that the Canvas is set to fill the document exactly.
      trackingElement = false,
      // React.ref to a custom camera to use for calculations. The default camera is used if undefined.
      customCameraRef,
      // Number (integer) representing the render priority in the internally-used useFrame (https://r3f.docs.pmnd.rs/api/hooks#taking-over-the-render-loop) hook. Default is undefined.
      renderPriority,
      // A float between 0.0 and 1.0 representing a target x-position within the horizontal bounds. A value of 0.0 sets the target x-position at the left bound, while 1.0 at the right.
      left = 0.5,
      // A float between 0.0 and 1.0 representing a target y-position within the vertical bounds. A value of 0.0 sets the target y-position at the top bound, while 1.0 at the bottom.
      top = 0.5,
      // If true, calculation stops. The calculation is always carried out at least once when the component mounts, even if pause is initially set to true.
      pause = false,
      // If true, the hook calculates and updates the bound object's position (and optionally, scale and rotation) each frame, and returns the calculated target results. If false, the target results are returned without any modification to the object.
      damp = true,
      // Args to pass to damp() functions. See https://github.com/pmndrs/maath/blob/main/README.md#easing for reference and defaults.
      damping: {
        smoothTime,
        delta = THREE.Clock.getDelta(),
        maxSpeed,
        easing,
        eps
      },
      // Overridden by setting computeScale. If true, the hook calculates the object's new scale so that its new width is the width of the bounds less the left and right margin (if set), while the new height is the height of the bounds less the top and bottom margin (if set). z-values of the scale are not changed. This only works if object3DRef.current.geometry.parameters contains .width and .height values. Examples are THREE.PlaneGeometry and THREE.BoxGeometry.
      scaleToFitWidth = true,

      /* A callback function to further customize the final target result. It has the following signature:

      computePosition(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Vector3,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations before your updates, and camera is the camera used by the hook. The callback should return a THREE.Vector3 for the final target position. If not configured, the new target position will be fully reflected by other configuration options.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computePosition,
      /* A callback function to further customize the final target result. It has the following signature:

      computeScale(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Vector3,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations before your updates, and camera is the camera used by the hook. The callback should return a THREE.Vector3 for the final target scale. If not configured, the new target scale will be fully reflected by scaleToFitWidth. If scaleToFitWidth = false, computeScale is undefined, scale is not calculated.

      Setting this callback overrides scaleToFitWidth = true.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computeScale,
      /* A callback function to further customize the final target result. It has the following signature:

      computeRotation(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Euler,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations before your updates, and camera is the camera used by the hook. The callback should return a THREE.Euler for the final target rotation. If not configured, the hook does not calculate rotation.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computeRotation,
      /* A THREE.Vector4 containing values for the top, right, bottom, and left margin, respectively. Default is 0 for all values. The margin is only applied internally when setting the object's new scale if scaleToFitWidth = true, so if you're not using scaleToFitWidth = true, it is your responsibility to account for margin application using the intermediateResults parameter in the computeScale callback (and in computePosition, if your use case requires it). Vector units should be float proportions relative to the horizontal/vertical bound lengths if using UNITS.WU or integers if using UNITS.PX. E.g., 0.1 WU for the top margin will set it at 0.1 x the height of the bounds, will 100 PX for would set it to 100 / ppwu. If your object is using any textures, make sure to account for the change in aspect ratio when setting the texture/FBO dimensions.*/
      margin,
      /* Either UNITS.PX or UNITS.WU (default). UNITS is a named, top-level export.  */
      marginUnits
    }
   ```

**return value:**<br/>

`Use2DBoundsResults`, an object with the following properties:

```js
{
  // Pixels-per-world-unit: Conversion factor for both x and y dimensions to convert from pixels to world-units and vice-versa. The two values should, in practice, be idential. 1 wu = ppwu pixels
  ppwu: THREE.Vector2,
  // The min and max bounds of the camera's viewport at the object's distance along the viewing angle, expressed in three.js world units. See THREE.PerspectiveCamera.getViewBounds().
  viewBounds: {
    min: THREE.Vector2,
    max: THREE.Vector2
  },
  // If trackingElement = true, the min and max bounds of the HTML element set as trackingElementRef.current, at the object's distance along the viewing angle, expressed in three.js world units. If false, identical to viewBounds.
  bounds: {
    min: THREE.Vector2,
    max: THREE.Vector2,
  },
  // calculated target position, scale, and rotation. If scale or rotation aren't included in calculations, they are set as the object's current scale and rotation, respectively.
  targets: {
    position: THREE.Vector3,
    scale: THREE.Vector3,
    rotation: THREE.Euler,
  },
  //  The object's distance to the camera along the camera's viewing angle. This number will always be greater than or equal to zero.
  distance: Number,
  // The margin values passed-in to the margin config option, converted to world units (UNITS.WU) for usage in compute callbacks or outside of the hook. Note that the returned value is in UNITS.WU regardless of how the marginUnits config option is set.
  margin: THREE.Vector4
}
```

_Important:_ internally, the `Use2DBoundsResults` is stored in a `React.ref`, since calculations are performed every frame. If you choose to update the object's properties yourself (by setting `damp = false`) or use the return values for other calculations, make sure not to tie them to the React lifecycle.

❌ Incorrect usage:<br/>

```jsx
<mesh position={results.targets.position} />
```

✅ Better (only an example):

```jsx
const { targets: position } = use2DBounds(ref)
const setPosition = useCallback(() => {
  ref.current.position.copy(position)
  ref.current.matrixWorldNeedsUpdate = true
}, [])
return <mesh ref={ref} onBeforeRender={setPosition} />
```

**example usage:**<br/>

```jsx
const FiberComponent = ({ trackingElementRef }) => {
  const ref = useRef()
  // center the mesh at the trackingElement centre and scale it proportionally so that its width fills the element.
  use2DBounds(ref, {
    trackingElement: true,
    trackingElementRef: trackingElementRef,
  })
  return (
    <mesh ref={ref}>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}
```
