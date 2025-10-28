import { useCallback, useLayoutEffect, useRef } from 'react'
import styles from 'website/styles/TerminalText.module.css'
import { useTheme } from 'website/hooks/useTheme'

export const TerminalText = ({
  children,
  steps,
  onFinish,
  typingTime = 2400,
  caretTime = 900,
}) => {
  const {
    colors: { white },
  } = useTheme()

  const terminal = useRef()

  // animation callbacks
  const getTypingAnimation = useCallback((_time, _steps) => {
    const typingEffect = new KeyframeEffect(
      terminal.current,
      [{ width: '0%' }, { width: '100%' }],
      {
        // keyframe options
        duration: _time,
        easing: `steps(${_steps}, end)`,
      },
    )
    return new Animation(typingEffect, document.timeline)
  }, [])

  const getCaretAnimation = useCallback(
    (_time) => {
      const caretEffect = new KeyframeEffect(
        terminal.current,
        [
          { borderRightColor: 'transparent' },
          { borderRightColor: white },
          { borderRightColor: 'transparent' },
        ],
        {
          // keyframe options
          duration: _time,
          easing: 'steps(2, end)',
          iterations: 'Infinity',
        },
      )
      return new Animation(caretEffect, document.timeline)
    },
    [white],
  )

  // trigger animations
  useLayoutEffect(() => {
    const caretAnimation = getCaretAnimation(caretTime)
    caretAnimation.play()

    const typingAnimation = getTypingAnimation(
      typingTime,
      steps || children.length,
    )
    // set onFinish when animation completes
    if (onFinish) {
      typingAnimation.onfinish = onFinish
    }
    typingAnimation.play()
    return () => {
      // cancel running animations on unmount
      caretAnimation.cancel()
      typingAnimation.cancel()
    }
  }, [
    caretTime,
    children,
    getCaretAnimation,
    getTypingAnimation,
    onFinish,
    steps,
    typingTime,
  ])

  return (
    <div ref={terminal} className={`${styles.container} space-mono-regular`}>
      {children}
    </div>
  )
}
