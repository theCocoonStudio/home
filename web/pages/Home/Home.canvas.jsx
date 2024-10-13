import { useRef } from 'react'
import {
  Environment,
  PerformanceMonitor,
  PerspectiveCamera,
} from '@react-three/drei'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import { LinkedIn } from '../../components/Socials/LinkedIn'
import { Github } from '../../components/Socials/Github'
import { Instagram } from '../../components/Socials/Instagram'
import { Icon } from '../../components/Socials/Icon'
import { Gear } from '../../components/Gear'
import { usePage } from '../../hooks/usePage'
import { CubeScene } from './scenes/CubeScene.canvas'
import { useProgress } from '../../hooks/useProgress'

/* simulation mesh */
export function Home() {
  const camera = useRef()

  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings = useRef()

  const {
    data: {
      theme: colorTheme,
      layout: { tracking },
      footer: { socials1: s1, socials2: s2, socials3: s3, settings1 },
    },
  } = usePage()

  useProgress(5, 5)
  use2DBounds(socials1, {
    trackingElement: true,
    trackingElementRef: s1,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials2, {
    trackingElement: true,
    trackingElementRef: s2,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials3, {
    trackingElement: true,
    trackingElementRef: s3,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(settings, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings1,
    computeScale: setScale,

    pause: true,
    damping: { smoothTime: 0.0 },
  })

  return (
    <>
      <PerformanceMonitor>
        <CubeScene tracking={tracking} colorTheme={colorTheme} />
        <Icon ref={socials1} colorTheme={colorTheme.gunmetal}>
          <LinkedIn colorTheme={colorTheme} />
        </Icon>
        <Icon ref={socials2} colorTheme={colorTheme.gunmetal}>
          <Github colorTheme={colorTheme} />
        </Icon>
        <Icon ref={socials3} colorTheme={colorTheme.gunmetal}>
          <Instagram colorTheme={colorTheme} />
        </Icon>
        <Gear ref={settings} colorTheme={colorTheme} />
        {/* <Bulb scale={0.03} position-z={0.5} /> */}
        <PerspectiveCamera makeDefault position-z={1} ref={camera} />
        <Effects />

        <Environment
          preset='studio'
          background={false}
          /* environmentIntensity={1} */
        />

        <color attach='background' args={['#101010']} />
        {/*     <Bulb
          scale={0.1}
          ref={cube}
        /> */}
      </PerformanceMonitor>
    </>
  )
}

const setScale = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  scale.set(scaleX, scaleX, scaleX)
  return scale
}

const setEven = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  const scaleY = Math.abs(
    results.bounds.max.getComponent(1) - results.bounds.min.getComponent(1),
  )
  scale.set(scaleX, scaleY / 2, scaleY / 2)
  return scale
}
