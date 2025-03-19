import { PerspectiveCamera } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { TitleText } from '../components/TitleText.canvas'
import { useCallback, useRef } from 'react'

export const Home = () => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()

  const callback = useCallback((...args) => {
    bg.current?.boundsCallback && bg.current.boundsCallback(...args)
    title.current?.boundsCallback && title.current.boundsCallback(...args)
  }, [])

  useMarkupBounds(
    {
      distance: 1,
      callback,
    },
    [],
  )

  return (
    <>
      <Panels />
      <FluidBackground ref={bg} stencil={title.current?.stencil} />
      <TitleText
        fontSize={0.1}
        ref={title}
        mask={true}
        text={`Technically creative`}
      />

      {/* <EffectComposer disableNormalPass multisampling={8}>
        <Vignette
          offset={0.5} // vignette offset
          darkness={0.6} // vignette darkness
          eskil={false} // Eskil's vignette technique
        />
      </EffectComposer> */}
      <color attach='background' args={[colors.white]} />

      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='park' />
    </>
  )
}
