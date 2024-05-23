# react-three-shader-passes (DRAFT)

Note: `react-three-shader-passes` (`R3SP`) is currently still in pre-release stages.

This library provides a minimal setup to get [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (R3F) to run custom shader passes on a Three.js material. It also exports some useful helpers.

&rarr; Ideal for raw physics simulations and for effects, post processing, optimization, and complex shader-based logic

&rarr; Use output texture of any scene as an FBO input to another without cumbersome, hierarchical JSX code or complex `ref`-based code design

&rarr; Use chaining capabilities as a GPGPU solution that's fully hooked into your React app, or as a simple framework for modular shader logic

&rarr; Fully declarative API and implementation for a turnkey R3F integration

&rarr; Exports all utilities and helpers for even more R3F syntactic sugar

&rarr; Fully managed objects/components implemented on top of R3F ecosystem; you have full control of all objects but do not have to worry about memory if you don't need to

## Why?

Using [drei](https://github.com/pmndrs/drei/tree/master) alone, multiple shader passes using `uniform` FBO input-output chains become computationally heavy both in your React app and in your WebGL/R3F app. The deep nesting necessary is both unwieldy and inflexible.

`SceneTexture_1` --uniform--> `SceneTexture_2` --uniform--> `SceneTexture_3`

```jsx
// Example code using `drei` as-is
<mesh>
  <Geometry />
  <meshStandardMaterial>
    <RenderTexture attach='map'>
      <mesh>
        <RawShaderMaterial>
          <RenderTexture attach='someUniform'>
            <mesh>
              <RawShaderMaterial attach='someOtherUniform'>
                <mesh />
              </RawShaderMaterial>
            </mesh>
          </RenderTexture>
        </RawShaderMaterial>
      </mesh>
    </RenderTexture>
  </meshStandardMaterial>
</mesh>
```

Moreover, there is no simple way to use the logic of a given pass to be used elsewhere in the GPU program without cumbersone React `ref` logic, which can be even more error-prone when you want your WebGL app to be synced with your React app.

By removing the hierarchy required -- i.e., the nesting of `RenderTexture`s -- you can put your `RenderTexture` instances (wrapped by `ShaderPass`) anywhere in the `ShaderPassesTexture` tree. This removes the one-way relationship of the FBO input-output chain.

This creates memory parity between your WebGL/React apps. If `RenderTexture1` is input for `RenderTexture2`, you can keep `RenderTexture1` in memory even if `RenderTexture2` unmounts because the latter does not need to be a parent of the former. Simply render a `RenderTexture` in React wherever it will adequately be privisioned and garbage-collected according to your WebGL program's needs.

Note that this is only a pattern preference. There is no magic here, only syntactic sugar. However, this pattern can be extended to any architecture wherein your React components must both control and be in sync with a concurrent, parallel app that exposes its reference data in a React API.

## Usage

Use this component with `react-three-fiber` to create chained, modular shader passes.

This is best illustrated with an example. The code below renders two scenes in a portal using [`RenderTexture`](https://github.com/pmndrs/drei/?tab=readme-ov-file#rendertexture) under the hood. Each scene can contain anything you want, and `RenderPass` takes a superset of `RenderTexture`'s prop types.

The API makes it very simple for each `ShaderPass` in a `ShaderPassesTexture` to use the output texture of any other `ShaderPass` by using a function that receives as input an object containing all textures (FBOs).

That is, `ShaderPass` optionally takes a function that renders `props.children` as `props.children(fbos)`. `fbos` contains `ref`s to each scene's FBO output, keyed by the `name` prop of `ShaderPass`.

The code snippet below shows an invisible scene being rendered and its output being used as an input `uniform` FBO to the fragment shader of a `THREE.RawShaderMaterial` used in the second invisible scene. The output of the second scene is then attached as the `map` to a material in a third, visible scene.

```jsx
// `drei` + `r3sp`
<mesh>
  <Geometry />
  <meshStandardMaterial>
    <ShaderPassesTexture>
      <ShaderPass name="firstPass">
      <>
        <Camera />
        <mesh>
          <Geography/>
          <ShaderMaterial {...uniforms} />
        </mesh>
      </>
      </ShaderPass>
      <ShaderPass name="secondPass" attach="map">
        {(fbos) => (
          <>
            <Camera2 />
            <mesh>
              <Geography2/>
              <ShaderMaterial2
                {
                ...uniforms2,
                inputFbo: fbos?.firstPass.current
                }
              />
            </mesh>
          </>
        )}
      </ShaderPass>
    </ShaderPassesTexture>
  </meshStandardMaterial>
</mesh>
```

## Exports

1. [`ShaderPassesTexture` & `ShaderPass`](#ShaderPass)
2. [`GetParent` & `withParent`](#getParent)

<hr/>

### <a name="ShaderPass"></a>**(1) `ShaderPassesTexture` & `ShaderPass`**

&rarr; Configure custom shader passes and use the output FBO for textures or even for GPGPU calculations

&rarr; Each instance sets up its own `THREE.WebGLRenderTarget` and live R3F scene in an isolated [portal](https://github.com/pmndrs/drei/?tab=readme-ov-file#portals).

&rarr; Fully managed using [`RenderTexture`](https://github.com/pmndrs/drei/?tab=readme-ov-file#rendertexture) internally. All resources (FBOs, materials, geometries, etc.) are hooked into React, so they'll remain in memory while the component is mounted and autodispose when it unmounts.

&rarr; Use any arbitrary shader pass result as input for the next

&rarr; Fully control the rendering order priority with only props

&rarr; Customize logic and performance with easy access to all internal refs and props

<table>
  <tr>
    <th><code>RenderPass</code> props  </th>
    <th>type</th>
    <th>description</th>
  </tr>
  <tr>
    <td><code>children</code> </td>
    <td><code>string | JSX.Element | JSX.Element[] | () => JSX.Element</code></td>
    <td>Children for <code>@pmndrs/drei/RenderTexture</code>, which <code>ShaderPass</code> uses under the hood. Children are wrapped in a <code>&lt;mesh></code> and a <code><rawShaderMaterial></code> (or <code>&lt;shaderMaterial></code>) is appended to them. These children configure the properties of the <code>&lt;mesh></code> that is output to a <code>THREE.WebGLRenderTarget</code>. They typically just comprise a <code>THREE.BufferGeography</code>:
    <br/><br/.>
    <table>
    <tr><th><center>Client code</center></th><th><center>Internal render</center></th>
    <tr>
    <td><pre>
&lt;ShaderPass>
  &lt;planeGeometry>
&lt;/ShaderPass>
    </pre></td>
    <td><pre>
&lt;RenderTexture>
  &lt;mesh>
    &lt;rawShaderMaterial>
    &lt;planeGeometry>
  &lt;/mesh>
&lt;/RenderTexture>
    </pre></td>
    </tr>
    </table>
  </tr>
  <tr>
    <td><code>uniforms</code></td>
    <td><code>Object</code></td>
    <td><code>uniforms</code> property to set for the underlying <code>THREE.RawMeshMaterial</code> or <code>THREE.MeshMaterial</code> to which the shader program will apply.
    </td>
  </tr>
  <tr>
    <td><code>vert</code></td>
    <td><code>string</code></td>
    <td>
    <code>vertexShader</code> property to set for the underlying <code>THREE.RawMeshMaterial</code> or <code>THREE.MeshMaterial</code> to which the shader program will apply.
    </td>
  </tr>
  <tr>
    <td><code>frag</code></td>
    <td><code>string</code></td>
    <td>
    <code>fragmentShader</code> property to set for the underlying <code>THREE.RawMeshMaterial</code> or <code>THREE.MeshMaterial</code> to which the shader program will apply.
    </td>
  </tr>
  <tr>
    <td><code>renderPriority</code></td>
    <td><code>number</code></td>
    <td>
    This is passed through to <code>R3F/useFrame</code> via <code>&lt;RenderTexture></code> This should not be consider optional and should implement the logic of your shader passes. Internally:
    <pre>
useFrame(({ gl }) => {
  gl.render(scene, camera)
}, props.renderPriority)</pre>
    </td>
  </tr>
  <tr>
    <td><code>renderTextureProps</code> (optional)</td>
    <td><code>Object</code></td>
    <td>
    Sets the props of the underlying <code>@pmndrs/drei/RenderTexture</code> component. Use <code>props.children</code> and <code>props.renderPriority</code> instead of  <code>props.renderTextureProps.children</code> and <code>props.renderTextureProps.renderPriority</code>, respectively.
    </td>
  </tr>
  <tr>
    <td><code>meshProps</code> (optional)</td>
    <td><code>Object</code></td>
    <td>
    Sets the props of the underlying <code>&ltmesh></code> component.
    </td>
  </tr>
  <tr>
    <td><code>raw</code> (optional)</td>
    <td><code>boolean</code></td>
    <td>
    <strong>Default: <code>true</code></strong>. Set this to <code>false</code> to apply shaders to a <code>THREE.ShaderMaterial</code> instead of a <code>THREE.RawShaderMaterial</code>.
    </td>
  </tr>
</table>

### <a name="getParent"></a>**(2) `GetParent` & `withParent`**

An alternative to using `instance.__r3f.parent` (see `useInstanceHandle` [here](https://docs.pmnd.rs/react-three-fiber/api/additional-exports)).

Provides a React `ref` to the parent of non-`Object3D` primitives (e.g. materials). Unlike `Object3D` instances, these do not have a built-in (`.parent`) reference to the containing object in the scene graph.

Using inside a component:

```jsx
function MaterialWithParentInternal(props) {
  const parent = useRef()
  useEffect(() => {
    console.log(parent.current), [parent]
  })
  return (
    <>
      <meshStandardMaterial {...props} />
      <GetParent ref={parent} />
    </>
  )
}
```

Using inside the component and exposing to parent:

```jsx
forwardRef(function MaterialWithParentInternalAndExternal(props, ref) {
  const internal = useRef()
  const parent = useRef()
  useImperativeHandle(ref, () => ({ ...internal.current, parent: parent.current }))
  return (
    <>
      <meshStandardMaterial ref={internal} {...props} />
      <GetParent ref={parent} />
    </>
  )
})
```

Only exposing to parent (`ref` will include added `.parent` property):

```jsx
const MyMaterialWithParentExternal = withParent(MyMaterial)
```

```jsx
const Anscestor = () => {
  const descendentParent = useRef()
  useEffect(() => {
    console.log(descendentParent.current.parent)
  }, [])
  return <MyMaterialWithParentExternal ref={descendentParent} />
}
```

Optional custom parent key:

```jsx
const MyMaterialWithParentExternal = withParent(MyMaterial, 'parentKey')
```

```jsx
const Anscestor = () => {
  const descendentParent = useRef()
  useEffect(() => {
    console.log(descendentParent.current.parentKey)
  }, [])
  return <MyMaterialWithParentExternal ref={descendantParent} />
}
```
