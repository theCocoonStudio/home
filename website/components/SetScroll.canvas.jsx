import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { damp } from 'maath/easing'
import { useCallback, useMemo, useRef, useState, useTransition } from 'react'
import { useScroll as useMarkupScroll } from 'website/hooks/useScroll'

export const SetScroll = ({
  event,
  eventData,
  onEvent,
  isEventData = true,
  rangeMin,
  rangeMax,
}) => {
  const scrollData = useScroll()

  const [isPending, startTransition] = useTransition()
  const [calcData, setCalData] = useState()

  const set = useCallback((args) => {
    startTransition(() => {
      setCalData(args)
    })
  }, [])

  const data = useMemo(
    () => (typeof eventData !== 'undefined' ? eventData : calcData),
    [calcData, eventData],
  )

  const _data = useMarkupScroll(
    isEventData ? event : undefined,
    isEventData ? data : scrollData,
    isEventData,
  )

  return rangeMin || rangeMax ? (
    <Range
      set={set}
      rangeMin={rangeMin || 0.01}
      rangeMax={rangeMax || 1}
      scrollData={scrollData}
      onEvent={onEvent}
    />
  ) : (
    <ScrollTo scrollData={scrollData} targetRef={_data?.target} />
  )
}

const Range = ({ set, rangeMin, rangeMax, scrollData, onEvent }) => {
  const visible = useRef()
  useFrame(() => {
    const updated = scrollData.visible(rangeMin, rangeMax)
    if (visible.current !== updated) {
      visible.current = updated
      set(updated)
      onEvent && onEvent(updated)
    }
  })
}

const ScrollTo = ({ targetRef, scrollData }) => {
  useFrame((state, delta) => {
    // if target exists
    if (typeof targetRef.current.value !== 'undefined') {
      // if it's been reached, remove the target
      if (Math.abs(targetRef.current.value - scrollData.el.scrollTop) < 1.0) {
        targetRef.current.value = undefined
      } else {
        //otherwise, continue scrolling to it
        damp(
          scrollData.el,
          'scrollTop',
          targetRef.current.value,
          targetRef.current.smoothTime,
          delta,
          Infinity,
          undefined,
          5.0,
        )
      }
    }
  })
}
