# react-three-shader-passes

This template provides a minimal setup to get [react-three-fiber](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) to run custom shader passes on a three.js material.

## Exports

**`GetParent`**

Provides a `React` `ref` to the parent of non-`Object3D` primitives, as these do not have a built-in (`.parent`) reference to the containing object in the scene graph.

Usage:

```jsx
function MaterialWithParent(props) {
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

Exposing `.parent` with ref:

```jsx
forwardRef(function MaterialWithParent(props, ref) {
  const internal = useRef()
  const parent = useRef()
  useImperativeHandleHandle(ref, () => ({ ...internal.current, parent: parent.current }))
  return (
    <>
      <meshStandardMaterial ref={internal} {...props} />
      <GetParent ref={parent} />
    </>
  )
})
```
