import { useCallback, useMemo, useRef, useState, useTransition } from 'react'
import { usePage } from 'web/hooks/usePage'

import { Hud } from '@react-three/drei'
import { Performance } from 'web/components/Performance.canvas'
import { useProgress } from 'src/hooks'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Showcase } from 'web/pages/Showcase/Showcase.canvas'
import { FooterHUD } from './Footer.canvas'
import { usePageControls } from 'web/hooks/usePageControls'
import { folder, useControls } from 'leva'

const renderOrder = Object.freeze({
  footerHud: 2,
  showcase: 1,
  global: 1,
})

export const Page = function Page({ count = 5, time = 10, bufferTime = 0.2 }) {
  // three refs
  const home = useRef()

  // global state
  const {
    theme: colorTheme,
    state: { pause, current },
    setState: { current: setCurrent },
  } = usePage()
  const { store3 } = usePageControls()

  // local state
  const [progressColor, setProgressColor] = useState(colorTheme.slate)
  const [isPending, startTransition] = useTransition()
  const [sun, setSun] = useState()
  const [{ godRaysExposure, godRaysWeight, forceSource, preset }, set] =
    useControls(
      () => ({
        GodRays: folder(
          {
            godRaysExposure: {
              value: [0.5, 0.02][current - 1],
              label: 'exposure',
            },
            godRaysWeight: {
              value: [0.8, 3.6][current - 1],
              label: 'weight',
            },
          },
          { collapsed: true },
        ),
        Simulation: folder(
          {
            forceSource: {
              value: 'cube',
              label: 'force',
              options: ['mouse'],
            },
          },
          { collapsed: true },
        ),
        Environment: folder(
          {
            preset: {
              value: 'studio',
              label: 'lights',
              options: [
                'apartment',
                'city',
                'dawn',
                'forest',
                'lobby',
                'night',
                'park',
                'sunset',
                'warehouse',
              ],
            },
          },
          { collapsed: true },
        ),
      }),
      { store: store3 },
    )
  const effectProps = useMemo(
    () => ({
      sun,
      godRaysExposure,
      godRaysWeight,
    }),
    [godRaysExposure, godRaysWeight, sun],
  )
  const { cubeSceneProps, galleryProps, showCaseProps } = useMemo(
    () => ({
      cubeSceneProps: { forceSource },
      galleryProps: {},
      showCaseProps: { preset },
    }),
    [forceSource, preset],
  )

  // imperative -> declarative progress transitions
  const progressCallback = useCallback(
    (progress, curr) => {
      const newColor = [colorTheme.slate, colorTheme.black][curr - 1]
      document.documentElement.style.setProperty('--progress', newColor)
      setCurrent(curr)
      startTransition(() => {
        setSun(home.current[curr - 1])
        setProgressColor(newColor)
        set({
          godRaysExposure: [0.5, 0.02][curr - 1],
          godRaysWeight: [0.8, 3.6][curr - 1],
        })
      })
    },
    [colorTheme.black, colorTheme.slate, set, setCurrent],
  )
  const { progressRef, setElapsed } = useProgress(
    count,
    time,
    pause,
    progressCallback,
    undefined,
    undefined,
    renderOrder.global,
  )

  return (
    <>
      {/* footer */}
      <Hud renderPriority={renderOrder.footerHud}>
        <FooterHUD
          renderPriority={renderOrder.footerHud}
          progressColor={progressColor}
          count={count}
          time={time}
          bufferTime={bufferTime}
          setElapsed={setElapsed}
        />
      </Hud>
      {/* r3f globals (will be Showcase globals) */}
      <Effects
        current={current}
        renderPriority={renderOrder.global}
        {...effectProps}
      />
      <Performance colorTheme={colorTheme} />

      {/* Showcase slides */}
      <Showcase
        renderPriority={renderOrder.showcase}
        ref={home}
        time={time}
        bufferTime={bufferTime}
        progressRef={progressRef}
        current={current}
        isPending={isPending}
        setSun={setSun}
        cubeSceneProps={cubeSceneProps}
        galleryProps={galleryProps}
        {...showCaseProps}
      />
    </>
  )
}
