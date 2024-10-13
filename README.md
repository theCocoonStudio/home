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
   const options = {
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
      forceCallback
   }
   ```

   where `forceCallback` is a callback used to determine, at each frame, what (if any) external force to add to the simulation. It has following signature:<br/>

   ```ts
   (delta: Number, clock: THREE.Clock, pointer: THREE.Vector2, pointerDiff: THREE.Vector2) :
    {
      force: THREE.Vector2, // normalized, centric coords: [-1, 1]
      center: THREE.Vector2, // normalized, centric coords: [-1, 1]
    }`
   ```

   At each frame, the simulation runs the callback and adds a force to the fluid in a rectangular area centered at `center`. The aspect of the rectangle equals the FBO aspect and scaled by `cursor_size`. Note that `cursor_size` refers to the number of simulation cells, the total number of which is equal to `resolution` multiplied by the FBO width or height. The strength of the force at each fluid "cell" is determined by `mouse_force` and scaled by the returned `force`.

   `forceCallback` takes `useFrame`'s `delta`, `clock`, and `pointer` as parameters, as well as `pointerDiff`, representing the pointer diff for the given frame.

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
      /* Overridden by setting computeScale. If true, the hook calculates the object's new scale so that its new width is the width of the bounds less the left and right margin (if set), while the new height is the height of the bounds less the top and bottom margin (if set). z-values of the scale are not changed.

      If object3DRef.current.geometry.parameters does not contain .width and .height values, set geometrySize as the base, unscaled geometry dimensions. If neither is defined, a default of 1.0 is used for the base geometry dimensions. Geometries with width and height parameters include THREE.PlaneGeometry and THREE.BoxGeometry. In contrast, @drei/RoundedBox's geometry does not include these parameters. */
      scaleToFitWidth = true,

      /* A callback function to further customize the final target result. It has the following signature:

      computePosition(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Vector3,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations for the frame before your updates, and camera is the camera used by the hook. The callback should return a THREE.Vector3 for the final target position. If not configured, the new target position will be fully reflected by other configuration options.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computePosition,
      /* A callback function to further customize the final target result. It has the following signature:

      computeScale(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Vector3,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations for the frame before your updates, and camera is the camera used by the hook. The callback should return a THREE.Vector3 for the final target scale. If not configured, the new target scale will be fully reflected by scaleToFitWidth. If scaleToFitWidth = false, computeScale is undefined, scale is not calculated.

      Setting this callback overrides scaleToFitWidth = true.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computeScale,
      /* A callback function to further customize the final target result. It has the following signature:

      computeRotation(obj3d: THREE.Object3D,  intermediateResults: Use2DBoundsResults, camera: THREE.Camera) : THREE.Euler,

      where obj3D is a direct reference to the bound object, intermediateResults contains the target calculations for the frame before your updates, and camera is the camera used by the hook. The callback should return a THREE.Euler for the final target rotation. If not configured, the hook does not calculate rotation.

      Note that this function is called each frame, so try to limit the computation as much as possible for performance or use pause = true when you can. */
      computeRotation,
      /* A THREE.Vector4 containing values for the top, right, bottom, and left margin, respectively. Default is 0 for all values and values can be negative. The margin is applied internally only when setting the object's new scale (if scaleToFitWidth = true), so if you're not using scaleToFitWidth = true, it is your responsibility to account for margin application using the intermediateResults parameter in the computeScale callback (and in computePosition, if your use case requires it). Vector units should be float proportions relative to the horizontal/vertical bound lengths if using UNITS.WU or integers if using UNITS.PX. E.g., 0.1 WU for the top margin will set it at 0.1 * the height of the bounds, while 100 PX would set it to 100 / ppwu. If your object is using any textures, make sure to account for the change in aspect ratio when setting the texture/FBO dimensions. */
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

### **`useProgress(count, time, pause, id, prefix, updateCallback) : Number[]`**<br/>

A convenient hook to easily create `linear-gradient()`-based CSS progress bars in a `three.js`/`r3f` scene.

This hook requires a very basic markup/css setup. See example usage for details.

**params:**<br/>

1. `count` (required): `Number` (integer) representing the number of items whose progress is tracked. For example, you can use this hook to create a carousel UI element, wherein count would represent the number of items in the carousel.

2. `time` (required): `Number` representing the number of seconds to go from `progress = 0.0` to `progress = 1.0`.

3. `pause` (optional): `Boolean` representing whether to pause progress tracking. Default is `false`.

4. `id` (optional): `String` representing an HTML element `id` whose direct children are individual elements to be styled. The number of children of the element should equal `count`. Default is `"progress"`.

5. `prefix` (optional): `String` representing a CSS variable prefix to use in order to update the style of the progress-tracking elements. Default is `"p"`.

6. `updateCallback` (optional): `Function` that runs each frame when `pause = false` wherein you can manually update the styles of the children of the container with id `id` based on progress values at that frame.

   If set, the hook does not update styles (and `prefix` isn't used), and updates should be manually implemented. This callback is a preferred alternative to using the hook's returned value: by using the callback pattern you eliminate the chance of accidentally tying the hook's returned value to the React lifecycle (see returned value section for more info).

   At each frame, the callback is run `count` times, with the following signature:

   ```ts
   (child: Element, progress: Number, index: Number, cssVar: String, clock: THREE.Clock, delta: Number) : undefined
   ```

   where:

   - **`child`** is equal to `document.getElementById(id).children[i]`, `id` being the corresponding hook argument and `i` described below.
   - **`progress`** is a `Number` from `0.0` to `1.0` representing the current progress of `child`, configured with hook params.
   - **`index`** is a `Number` (integer) in the range `[0, count - 1]` , correspoding to the current child node being updated. <br/>_Note:_ `CSS` pseudo-classes like `:nth-child()` use ordinal numbers as indexes, which start at `1` (with values in the range `[1, count]`). Make sure to map `index` to the correct value if used in CSS code.
   - **`cssVar`** is a `String` -- the template literal `` `--${prefix}${index}` `` -- where `prefix` is the corresponding hook argument and `index` is defined as above.
   - **`clock`** and **`delta`** correspond to `r3f`'s [`useFrame` callback parameters](https://r3f.docs.pmnd.rs/api/hooks#useframe) `state.clock` and `delta`, respectively.

   See example usage for an example implementation. If `updateCallback` is `undefined`, the hook's default behaviour is identical to setting `useCallback` to:

   ```js
   const updateCallback = (child, progress, index, cssVar, clock, delta) => {
     child.style.setProperty(cssVar, `${progress * 100}%`)
   }
   ```

7. `renderPriority` (optional): `Number` (integer) representing the render priority in the internally-used [useFrame](https://r3f.docs.pmnd.rs/api/hooks#taking-over-the-render-loop) hook. Default is undefined.

**return value:**<br/>

An array with length configured by the `count` param representing with values corresponding to the progress configured by the `time` param and dependent on the elapsed time and the `pause` param. After `count * time` unpaused seconds have elapsed, the progress is reset. E.g:

```js
useProgress(5, 5)

// unpaused time elapsed: 2.5 seconds
// returned array: [0.5, 0, 0, 0, 0]

// unpaused time elapsed: 17 seconds
// returned array: [1.0, 1.0, 1.0, 0.4, 0]

// unpaused time elapsed: 35 seconds (reset after 25 seconds)
// returned array: [1.0, 1.0, 0, 0, 0]
```

_Important:_ internally, the returned array is stored in a `React.ref`, since calculations are performed every frame. If you use the returned values, do not tie them into the React lifecycle much like you would not set state in a `r3f` `useFrame` callback. This does mean, however, that you can imperatively update the progress values from outside the hook.

**example usage:**<br/>

Custom carousel UI element, automatically updated:

```jsx
/* App.jsx */
const Carousel = () => {
  return (
    <div id='carousel'>
      <div />
      <div />
      <div />
    </div>
  )
}
const FiberComponent = () => {
  // 3 carousel items, 3 seconds each
  useProgress(3, 3.0, false, 'carousel')
  /* return ... */
}

const App = () => {
  return (
    <>
      /* ... */
      <Canvas>
        <FiberComponent />
      </Canvas>
      <Carousel>
      /* ... */
    </>
  )
}
```

```css
/* App.css */
@property --p0 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --p1 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --p2 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}
#carousel {
  width: 800px;
  height: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  column-gap: 16px;
}

#carousel > * {
  flex-shrink: 1;
  flex-grow: 1;
}

#carousel > *:nth-child(1) {
  --p0: 0%;
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff var(--p0),
    #000 var(--p0)
  );
}
#carousel > *:nth-child(2) {
  --p1: 0%;
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff var(--p1),
    #000 var(--p1)
  );
}
#carousel > *:nth-child(3) {
  --p2: 0%;
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff var(--p2),
    #000 var(--p2)
  );
}
```

Custom carousel UI element, manually updated, custom prefix:

```jsx
/* App.jsx */

// const Carousel defined as in previous example

const FiberComponent = () => {
  // manual updates: animates with 1 second css transition (see App.css) 3 times instead of each frame.
  const state = useRef([0, 0, 0])
  const updateCallback = useCallack((child, progress, index, cssVar) => {
    if (progress < 0.5 && state.current[index] !== 0) {
      state.current[index] = 0
      child.style.setProperty(cssVar, '0%')
    } else if (progress > 0.5 && progress < 1.0 && state.current[index] !== 1) {
      state.current[index] = 1
      child.style.setProperty(cssVar, '50%')
    } else if (progress > 1.0 && state.current[index] !== 2) {
      state.current[index] = 2
      child.style.setProperty(cssVar, '100%')
    }
  }, [])

  useProgress(3, 3.0, false, 'carousel', 'carousel', updateCallback) // custom prefix and manual style updates
  /* return ... */
}

// const App defined as in previous example
```

```css
/* App.css */
@property --carousel0 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --carousel1 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}
@property --carousel2 {
  syntax: '<length-percentage>';
  inherits: false;
  initial-value: 0%;
}

/* ... */

#carousel > *:nth-child(1) {
  --carousel0: 0%; /* custom prefix */
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff var(--carousel0),
    #000 var(--carousel0)
  );
  transition: --carousel0 1s; /* animation with CSS */
}
/* ... */
```
