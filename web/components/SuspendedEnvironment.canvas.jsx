import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { suspend } from 'suspend-react'

const modules = import.meta.glob('/node_modules/@pmndrs/assets/hdri/*.exr.js')

export const SuspendedEnvironment = ({ preset = 'studio', ...props }) => {
  const data = suspend(async () => {
    const res =
      await modules[`/node_modules/@pmndrs/assets/hdri/${preset}.exr.js`]()
    return res.default
  }, [preset])

  return (
    <Suspense>
      <Environment files={data} {...props} />
    </Suspense>
  )
}
