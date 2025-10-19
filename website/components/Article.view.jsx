import { useNavigate } from 'react-router'

const Article = () => {
  const nav = useNavigate()

  return (
    <>
      <color attach='background' args={['red']} />
      <mesh
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
