import { PerspectiveCamera } from '@react-three/drei'
import { useParams } from 'react-router'
import { useTheme } from 'website/hooks/useTheme'

const Article = () => {
  const { '*': splat } = useParams()
  const { colors } = useTheme()
  return (
    <>
      {splat === 'test' ? (
        <PerspectiveCamera makeDefault userData={{ splat: 'test' }} />
      ) : (
        <PerspectiveCamera makeDefault userData={{ splat: 'article' }} />
      )}
      <color attach='background' args={[colors.black]} />
    </>
  )
}

export default Article
