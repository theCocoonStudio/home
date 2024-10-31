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
import { setScaleXYZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { PerformanceMonitor } from '@react-three/drei'
import { PlayPause } from 'web/components/PlayPause.canvas'

import { Next } from 'web/components/Next.canvas'

export const Page = function Page() {
  // three refs
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const se1 = useRef()
  const se2 = useRef()
  const se3 = useRef()
  const se4 = useRef()
  const menuRef = useRef()

  const {
    theme: colorTheme,
    refs: {
      markup: {
        socials1,
        socials2,
        socials3,
        settings1,
        settings2,
        settings3,
        settings4,
        menu1,
        menu2,
        menu3,
        menu: menuHTML,
      },
    },
    state: { pause, menu },
  } = usePage()

  use2DBounds(s1, {
    trackingElement: true,
    trackingElementRef: socials1,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(s2, {
    trackingElement: true,
    trackingElementRef: socials2,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,

    damping: { smoothTime: 0.0 },
  })
  use2DBounds(s3, {
    trackingElement: true,
    trackingElementRef: socials3,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se1, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings1,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se2, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings2,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se3, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings3,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(se4, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings4,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(menuRef, {
    marginUnits: UNITS.PX,
    scaleToFitWidth: true,
    trackingElement: true,
    trackingElementRef: menuHTML,
    damping: { smoothTime: 0.0 },
  })

  return (
    <>
      <PerformanceMonitor /* onChange={({ fps }) => console.log(fps)} */ />
      <Effects />
      <Menu
        ref={menuRef}
        position-z={-10}
        visible={true}
        colorTheme={colorTheme}
        menu={menu}
        sub1={menu1}
        sub2={menu2}
        sub3={menu3}
      />

      <Icon ref={s1} colorTheme={colorTheme.gunmetal}>
        <LinkedIn colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s2} colorTheme={colorTheme.gunmetal}>
        <Github colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s3} colorTheme={colorTheme.gunmetal}>
        <Instagram colorTheme={colorTheme} />
      </Icon>
      <Next colorTheme={colorTheme} ref={se1} prev />
      <PlayPause colorTheme={colorTheme} pause={pause} ref={se2} />
      <Next ref={se3} colorTheme={colorTheme} />
      <Gear ref={se4} colorTheme={colorTheme} menu={menu} />
    </>
  )
}
