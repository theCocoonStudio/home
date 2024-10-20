import { useRef } from 'react'
import { usePage } from 'web/hooks/usePage'
import { LinkedIn } from 'web/components/Socials/LinkedIn.canvas'
import { Github } from 'web/components/Socials/Github.canvas'
import { Instagram } from 'web/components/Socials/Instagram.canvas'
import { Icon } from 'web/components/Socials/Icon.canvas'
import { Gear } from 'web/components/Gear.canvas'
import { use2DBounds } from 'src/hooks'
import { UNITS } from 'src/constants'
import { Menu } from 'web/components/Menu.canvas'
import { setScaleXYOfXZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Vector4 } from 'three'
import { PerformanceMonitor } from '@react-three/drei'
import { Play } from 'web/components/Play.canvas'
import { Pause } from 'web/components/Pause.canvas'

export const Page = function Page({ s1, s2, s3, s4, s5, s6, pause, menu }) {
  // three refs
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings1 = useRef()
  const settings2a = useRef()
  const settings2b = useRef()
  const settings3 = useRef()
  const menuRef = useRef()
  const {
    data: { theme: colorTheme },
  } = usePage()

  use2DBounds(socials1, {
    trackingElement: true,
    trackingElementRef: s1,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials2, {
    trackingElement: true,
    trackingElementRef: s2,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials3, {
    trackingElement: true,
    trackingElementRef: s3,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(settings1, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: s4,
    computeScale: setScaleXYOfXZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(settings2a, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: s5,
    computeScale: setScaleXYOfXZOfX,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(settings2b, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: s5,
    computeScale: setScaleXYOfXZOfX,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(settings3, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: s6,
    computeScale: setScaleXYOfXZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(menuRef, {
    margin: new Vector4(100, 0, 100, 0),
    marginUnits: UNITS.PX,
    damping: { smoothTime: 0.0 },
  })

  return (
    <>
      <PerformanceMonitor onChange={({ fps }) => console.log(fps)} />
      <Effects />
      <Menu ref={menuRef} position-z={-10} visible={false} />
      {pause ? (
        <Play colorTheme={colorTheme} ref={settings2a} />
      ) : (
        <Pause colorTheme={colorTheme} ref={settings2b} />
      )}
      <Icon ref={socials1} colorTheme={colorTheme.gunmetal}>
        <LinkedIn colorTheme={colorTheme} />
      </Icon>
      <Icon ref={socials2} colorTheme={colorTheme.gunmetal}>
        <Github colorTheme={colorTheme} />
      </Icon>
      <Icon ref={socials3} colorTheme={colorTheme.gunmetal}>
        <Instagram colorTheme={colorTheme} />
      </Icon>
      <Gear ref={settings3} colorTheme={colorTheme} menu={menu} />
    </>
  )
}
