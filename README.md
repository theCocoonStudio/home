# react-three-shader-passes

Note: this library is currently in development

This library provides a minimal setup to get [react-three-fiber](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) to run custom shader passes on a three.js material. It also exports some useful helpers.

## Exports

**`GetParent` & `withParent`**

Provides a `React` `ref` to the parent of non-`Object3D` primitives, as these do not have a built-in (`.parent`) reference to the containing object in the scene graph.

Using inside a component:

```jsx
function MaterialWithParentInternal(props) {
  const parent = useRef()
  useEffect(() => {
    console.log(parent), [parent]
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

Only exposing to parent:

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
