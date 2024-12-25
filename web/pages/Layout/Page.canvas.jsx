import { useState } from 'react'
import { useTheme } from 'web/hooks/useTheme'
import { Hud } from '@react-three/drei'
import { Performance } from 'web/components/Performance.canvas'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { Showcase } from 'web/pages/Showcase/Showcase.canvas'
import { FooterHUD } from './Footer.canvas'
import { useGlobalState } from 'web/hooks/useGlobalState'

export const Page = function Page() {
  const {
    state: { renderOrder },
  } = useGlobalState()
  const colorTheme = useTheme()

  // local state
  const [effectComposerProps, setEffectComposerProps] = useState()
  const [effects, setEffects] = useState()

  return (
    <>
      {/* footer */}
      <Hud renderPriority={renderOrder.footerHud}>
        <FooterHUD renderPriority={renderOrder.footerHud} />
      </Hud>
      {/* r3f globals (will be Showcase globals) */}

      <Effects renderPriority={renderOrder.global} {...effectComposerProps}>
        {effects}
      </Effects>

      <Performance colorTheme={colorTheme} />

      {/* Showcase slides */}
      <Showcase
        renderPriority={renderOrder.showcase}
        setEffectComposerProps={setEffectComposerProps}
        setEffects={setEffects}
      />
    </>
  )
}
