import { useProgress } from '@react-three/drei'
import { forwardRef, useEffect, useState } from 'react'

export const Loader = forwardRef(function Loader(
  { onReady, ...props },
  forwardedRef,
) {
  const [show, setShow] = useState(true)
  const [timeLeft, setTimeLeft] = useState(true)

  const { progress, active } = useProgress()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeLeft(false)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !active) {
      setShow(false)
    }
  }, [active, progress])

  useEffect(() => {
    if (!show && !timeLeft) {
      if (typeof onReady === 'function') {
        onReady()
      }
    }
  }, [onReady, show, timeLeft])

  if (show || timeLeft) {
    return (
      <div ref={forwardedRef} id='loadingContainer' {...props}>
        <div className={'loaderContainer'}>
          <div className={'loader'} />
        </div>
        <div className={'labelContainer'}>
          <div className={`label .space-mono-bold`} />
        </div>
        <div className='overlay' />
      </div>
    )
  }
})
