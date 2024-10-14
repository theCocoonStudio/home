import { forwardRef, useImperativeHandle, useRef } from 'react'
import { usePage } from 'web/hooks/usePage'
import { LinkedIn } from 'web/components/Socials/LinkedIn'
import { Github } from 'web/components/Socials/Github'
import { Instagram } from 'web/components/Socials/Instagram'
import { Icon } from 'web/components/Socials/Icon'
import { Gear } from 'web/components/Gear'
import { use2DBounds, useProgress } from 'src/hooks'
import { setScaleXYOfXZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { Effects } from 'web/components/Effects.canvas.jsx'

export const Page = forwardRef(function Page({ children, ...props }, ref) {
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings = useRef()

  useImperativeHandle(ref, () => progress)
  const {
    data: {
      theme: colorTheme,
      footer: { socials1: s1, socials2: s2, socials3: s3, settings1 },
    },
  } = usePage()

  const progress = useProgress(5, 5)
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
    trackingElementRef: settings1,
    computeScale: setScaleXYOfXZOfX,

    pause: true,
    damping: { smoothTime: 0.0 },
  })
  return (
    <>
      {children}
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
})
