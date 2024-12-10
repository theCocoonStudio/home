import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { LinkedIn } from 'web/components/Socials/LinkedIn.canvas'
import { Github } from 'web/components/Socials/Github.canvas'
import { Instagram } from 'web/components/Socials/Instagram.canvas'
import { Icon } from 'web/components/Socials/Icon.canvas'
import { Youtube } from 'web/components/Socials/Youtube.canvas'
import { Gear } from 'web/components/Gear.canvas'
import { PlayPause } from 'web/components/PlayPause.canvas'
import { Next } from 'web/components/Next.canvas'
import { useMarkup } from '../../hooks/useMarkup'
import { useTheme } from '../../hooks/useTheme'
import { useShowcase } from 'web/pages/Showcase/hooks/useShowcase'
import { useMarkupBounds } from 'src/hooks'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const callback = ({ target, element, min, max, ppwu, contentRect }) => {
  const scale = new Vector3(max.x - min.x, max.y - min.y, max.x - min.x)
  const position = new Vector3(
    min.x + target.scale.x / 2,
    min.y + target.scale.y / 2,
    target.position.z,
  )
  target.position.copy(position)
  target.scale.copy(scale)
}
export const FooterHUD = forwardRef(function FooterHud(
  { progressColor, count, time, bufferTime, setElapsed, renderPriority },
  forwardedRef,
) {
  const s1 = useRef()
  const s2 = useRef()
  const s3 = useRef()
  const s4 = useRef()
  const se1 = useRef()
  const se2 = useRef()
  const se3 = useRef()
  const se4 = useRef()
  const scene = useRef()

  useImperativeHandle(forwardedRef, () => scene.current, [])

  const {
    refs: {
      global: {
        socials1,
        socials2,
        socials3,
        socials4,
        settings1,
        settings2,
        settings3,
        settings4,
      },
      showcase: { description },
    },
  } = useMarkup()

  const {
    state: { pause, menu, current },
    setState: { pause: setPause },
  } = useShowcase()

  const colorTheme = useTheme()

  useMarkupBounds({ target: s1, element: socials1, callback })
  useMarkupBounds({
    target: s2,
    element: socials2,
    callback,
  })
  useMarkupBounds({
    target: s3,
    element: socials3,
    callback,
  })
  useMarkupBounds({
    target: s4,
    element: socials4,
    callback,
  })

  useMarkupBounds({
    target: se1,
    element: settings1,
    callback,
  })

  useMarkupBounds({
    target: se2,
    element: settings2,
    callback,
  })
  useMarkupBounds({
    target: se3,
    element: settings3,
    callback,
  })
  useMarkupBounds({
    target: se4,
    element: settings4,
    callback,
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
      <directionalLight
        position-z={0.1}
        intensity={15}
        color={colorTheme.white}
        target={se2.current}
        castShadow
        shadow-camera-near={0}
        shadow-camera-far={3}
      />

      <Environment
        preset='studio'
        background={false}
        environmentIntensity={0.5}
        scene={hudScene}
      />
      <PerspectiveCamera makeDefault position-z={1} />
      <Icon
        ref={s1}
        targetColor={colorTheme.slate}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <LinkedIn colorTheme={colorTheme} />
      </Icon>
      <Icon
        ref={s2}
        targetColor={colorTheme.black}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <Github colorTheme={colorTheme} />
      </Icon>
      <Icon
        ref={s3}
        targetColor={colorTheme.purple}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <Instagram colorTheme={colorTheme} />
      </Icon>
      <Icon
        ref={s4}
        targetColor={colorTheme.charcoal}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <Youtube colorTheme={colorTheme} />
      </Icon>
      <Icon
        ref={se1}
        targetColor={progressColor}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
        onPointerDown={prev}
      >
        <Next colorTheme={colorTheme} prev />
      </Icon>
      <Icon
        ref={se2}
        targetColor={progressColor}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <PlayPause
          colorTheme={colorTheme}
          pause={pause}
          renderPriority={renderPriority}
        />
      </Icon>
      <Icon
        ref={se3}
        targetColor={progressColor}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
        onPointerDown={next}
      >
        <Next colorTheme={colorTheme} />
      </Icon>
      <Icon
        ref={se4}
        targetColor={progressColor}
        colorTheme={colorTheme}
        renderPriority={renderPriority}
      >
        <Gear
          colorTheme={colorTheme}
          menu={menu}
          renderPriority={renderPriority}
        />
      </Icon>
    </>
  )
})
