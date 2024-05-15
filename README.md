# react-three-shader-passes

Note: `react-three-shader-passes` (`R3SP`) is currently still in pre-release stages.

This library provides a minimal setup to get [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (R3F) to run custom shader passes on a Three.js material. It also exports some useful helpers.

&rarr; Fully declarative API and implementation for a turnkey R3F integration

&rarr; Ideal for raw physics simulations as textures and other shader-based logic

&rarr; Use modular shader logic for effects, prost processing, and optimization

&rarr; Exports all utilities and helpers for even more R3F syntactic sugar

&rarr; Fully managed objects/components implemented on top of R3F ecosystem; you have full control of all objects but do not have to worry about memory if you don't need to

&rarr; Exposes refs and props of all underlying React and Three.js components for a fully customizeable experience

## Exports

1. [`GetParent` & `withParent`](#getParent)
2. [`ShaderPass`](#ShaderPass)

<hr/>

<a name="getParent"></a>**(1) `GetParent` & `withParent`**

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

<a name="ShaderPass"></a>**`(2) ShaderPass`**

Use this component with `react-three-fiber` to create chained, modular shader passes.

```jsx
<mesh>
  <rawShaderMaterial>
  <ShaderPass >
    <Geometry />
  </ShaderPass>
</mesh>
```

&rarr; Configure custom shader passes and use the output FBO for textures or even for GPGPU calculations

&rarr; Each instance sets up its own `WebGLRenderTarget` and live R3F scene in an isolated [portal](https://github.com/pmndrs/drei/?tab=readme-ov-file#portals).

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
