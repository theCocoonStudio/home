import { PerspectiveCamera } from '@react-three/drei'
import { useParams } from 'react-router'
import { useNavigation } from 'website/hooks/useNavigation'

const Article = () => {
  const nav = useNavigation()
  const { '*': splat } = useParams()

  return (
    <>
      {splat === 'test' ? (
        <PerspectiveCamera makeDefault userData={{ splat: 'test' }} />
      ) : (
        <PerspectiveCamera makeDefault userData={{ splat: 'article' }} />
      )}
      <color attach='background' args={['red']} />
      <mesh
        position-z={-5}
        onPointerDown={() => {
          nav('/test')
        }}
      >
        <boxGeometry />
      </mesh>
    </>
  )
}

export default Article
