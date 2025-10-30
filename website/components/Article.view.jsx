import { PerspectiveCamera } from '@react-three/drei'
import { useNavigation } from 'website/hooks/useNavigation'

const Article = () => {
  const nav = useNavigation()

  return (
    <>
      <PerspectiveCamera makeDefault userData={{ splat: 'article' }} />
      <color attach='background' args={['red']} />
      <mesh
        position-z={-5}
        onPointerDown={() => {
          nav('/')
        }}
      >
        <boxGeometry />
      </mesh>
    </>
  )
}

export default Article
