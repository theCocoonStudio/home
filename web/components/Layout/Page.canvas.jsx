import { useEffect, useRef } from 'react'
import { usePage } from 'web/hooks/usePage'
import { LinkedIn } from 'web/components/Socials/LinkedIn'
import { Github } from 'web/components/Socials/Github'
import { Instagram } from 'web/components/Socials/Instagram'
import { Icon } from 'web/components/Socials/Icon'
import { Gear } from 'web/components/Gear'
import { use2DBounds } from 'src/hooks'
import { setScaleXYOfXZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { Effects } from 'web/components/Effects.canvas.jsx'

export const Page = function Page() {
  // three refs
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings = useRef()
  // html refs
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()

  useEffect(() => {
    const socials = document.getElementById('socials')
    s1.current = socials.children[0]
    s2.current = socials.children[1]
    s3.current = socials.children[2]
    s4.current = document.getElementById('settings').children[2]
  }, [])

  const {
    data: { theme: colorTheme },
  } = usePage()

  use2DBounds(socials1, {
    trackingElement: true,
    trackingElementRef: s1,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials2, {
    trackingElement: true,
    trackingElementRef: s2,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials3, {
    trackingElement: true,
    trackingElementRef: s3,
    scaleToFitWidth: false,
    computeScale: setScaleXYOfXZOfX,
    pause: true,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(settings, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: s4,
    computeScale: setScaleXYOfXZOfX,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  return (
    <>
      <Effects />
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
    </>
  )
}
