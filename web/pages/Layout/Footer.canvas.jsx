import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { LinkedIn } from 'web/components/Socials/LinkedIn.canvas'
import { Github } from 'web/components/Socials/Github.canvas'
import { Instagram } from 'web/components/Socials/Instagram.canvas'
import { Icon } from 'web/components/Socials/Icon.canvas'
import { Gear } from 'web/components/Gear.canvas'
import { PlayPause } from 'web/components/PlayPause.canvas'
import { Next } from 'web/components/Next.canvas'
import { usePage } from '../../hooks/usePage'
import { use2DBounds } from 'src/hooks'
import { setScaleXYZOfX } from 'web/helpers/use2DBoundsScaleUtils'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

const scaleFactored = (obj, results) => {
  return setScaleXYZOfX(obj, results).multiplyScalar(0.8)
}

export const FooterHUD = forwardRef(function FooterHud(
  { progressColor, count, time, bufferTime, setElapsed, renderPriority },
  forwardedRef,
) {
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const se1 = useRef()
  const se2 = useRef()
  const se3 = useRef()
  const se4 = useRef()
  const scene = useRef()

  useImperativeHandle(forwardedRef, () => scene.current, [])

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

        description,
      },
    },
    state: { pause, menu, current },
    setState: { pause: setPause },
  } = usePage()

  use2DBounds(s1, {
    trackingElement: true,
    trackingElementRef: socials1,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })
  use2DBounds(s2, {
    trackingElement: true,
    trackingElementRef: socials2,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })
  use2DBounds(s3, {
    trackingElement: true,
    trackingElementRef: socials3,
    scaleToFitWidth: false,
    computeScale: setScaleXYZOfX,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })

  use2DBounds(se1, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings1,
    computeScale: scaleFactored,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })

  use2DBounds(se2, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings2,
    computeScale: scaleFactored,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })

  use2DBounds(se3, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings3,
    computeScale: scaleFactored,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })

  use2DBounds(se4, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings4,
    computeScale: scaleFactored,
    damping: { smoothTime: 0.0 },
    renderPriority,
  })

  const prev = useCallback(() => {
    setPause(false)
    description.current.style.opacity = '0'
    const factor = current === 1 ? count - 1 : current - 2
    setElapsed(factor * time)
  }, [count, current, description, setElapsed, setPause, time])

  const next = useCallback(() => {
    setPause(false)
    setElapsed(current * time - bufferTime)
  }, [bufferTime, current, setElapsed, setPause, time])

  const hudScene = useThree((state) => state.scene)

  return (
    <>
      <Environment
        preset='studio'
        background={false}
        environmentIntensity={1}
        scene={hudScene}
      />
      <PerspectiveCamera makeDefault position-z={1} />
      <Icon ref={s1} colorTheme={progressColor}>
        <LinkedIn colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s2} colorTheme={progressColor}>
        <Github colorTheme={colorTheme} />
      </Icon>
      <Icon ref={s3} colorTheme={progressColor}>
        <Instagram colorTheme={colorTheme} />
      </Icon>
      <Next
        colorTheme={colorTheme}
        ref={se1}
        prev
        onPointerDown={prev}
        renderPriority={renderPriority}
      />
      <PlayPause
        colorTheme={colorTheme}
        pause={pause}
        ref={se2}
        renderPriority={renderPriority}
      />
      <Next ref={se3} colorTheme={colorTheme} onPointerDown={next} />
      <Gear ref={se4} colorTheme={colorTheme} menu={menu} />
    </>
  )
})
