import { OrbitControls, PerspectiveCamera, useScroll } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { useTheme } from 'website/hooks/useTheme'
import { FluidBackground } from '../components/FluidBackground.canvas'
import { useMarkupBounds } from 'src/hooks/useBounds/useMarkupBounds'
import { TitleText } from '../components/TitleText.canvas'
import { useCallback, useEffect, useRef } from 'react'
import { ScrollBar } from '../components/ScrollBar.canvas'

export const Home = () => {
  const { colors } = useTheme()

  const bg = useRef()
  const title = useRef()
  const scroll = useRef()

  const callback = useCallback((...args) => {
    bg.current?.boundsCallback && bg.current.boundsCallback(...args)
    title.current?.boundsCallback && title.current.boundsCallback(...args)
  }, [])

  const data = useScroll()

  useEffect(() => {
    bg.current?.scrollCallback(data.offset)
  })

  useMarkupBounds(
    {
      distance: 1,
      callback,
    },
    [],
  )

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Panels /> */}
      <FluidBackground
        ref={bg}
        stencil={title.current?.stencil}
        forceCallback={scroll.current?.forceCallback}
        colors={colors}
      />
      <TitleText
        fontSize={80}
        ref={title}
        mask={true}
        text={`Technically creative`}
      />
      <ScrollBar ref={scroll} />
      {/* <EffectComposer disableNormalPass multisampling={8}>
        <Vignette
          offset={0.5} // vignette offset
          darkness={0.6} // vignette darkness
          eskil={false} // Eskil's vignette technique
        />
      </EffectComposer> */}
      <color attach='background' args={[colors.white]} />
      <PerspectiveCamera makeDefault position-z={1} fov={30} />
      <Environment preset='dawn' environmentIntensity={0.5} />
    </>
  )
}
