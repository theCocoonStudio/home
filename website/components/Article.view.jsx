import { PerspectiveCamera } from '@react-three/drei'
import { useParams } from 'react-router'

const Article = () => {
  const { '*': splat } = useParams()

  return (
    <>
      {splat === 'test' ? (
        <PerspectiveCamera makeDefault userData={{ splat: 'test' }} />
      ) : (
        <PerspectiveCamera makeDefault userData={{ splat: 'article' }} />
      )}
      <color attach='background' args={['red']} />
    </>
  )
}

export default Article
