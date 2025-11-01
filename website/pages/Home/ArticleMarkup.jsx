import { useParams } from 'react-router'

export const ArticleMarkup = () => {
  const { '*': splat } = useParams()

  return (
    <div
      style={{
        height: splat === 'test' ? '200vh' : '300vh',
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, black, white)',
        opacity: 0.7,
      }}
    ></div>
  )
}
