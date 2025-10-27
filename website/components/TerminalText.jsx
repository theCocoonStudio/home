import { useLayoutEffect, useRef } from 'react'
import styles from 'website/styles/TerminalText.module.css'
import { useTheme } from 'website/hooks/useTheme'

export const TerminalText = ({
  children = 'scroll up and down...',
  typingTime = 2500,
  caretTime = 900,
}) => {
  const {
    colors: { white },
  } = useTheme()

  const terminal = useRef()
  useLayoutEffect(() => {
    // keyframe effects
    const typingEffect = new KeyframeEffect(
      terminal.current,
      [{ width: '0%' }, { width: '100%' }],
      {
        // keyframe options
        duration: typingTime,
        easing: `steps(${children.length}, end)`,
      },
    )
    const caretEffect = new KeyframeEffect(
      terminal.current,
      [
        { borderRightColor: 'transparent' },
        { borderRightColor: white },
        { borderRightColor: 'transparent' },
      ],
      {
        // keyframe options
        duration: caretTime,
        easing: 'steps(2, end)',
        iterations: 'Infinity',
      },
    )

    // animations
    const typingAnimation = new Animation(typingEffect, document.timeline)
    const caretAnimation = new Animation(caretEffect, document.timeline)

    // play animations
    typingAnimation.play()
    caretAnimation.play()
    return () => {
      // cancel previous animations
      typingAnimation.cancel()
      caretAnimation.cancel()
    }
  }, [caretTime, children, typingTime, white])

  return (
    <div ref={terminal} className={`${styles.container} space-mono-regular`}>
      {children}
    </div>
  )
}
