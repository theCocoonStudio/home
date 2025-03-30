import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import { useScroll as useMarkupScroll } from 'website/hooks/useScroll'

export const SetScroll = ({
  event,
  eventData,
  isEventData = true,
  rangeMin,
  rangeMax,
}) => {
  const scrollData = useScroll()

  const [calcData, setCalData] = useState()

  const data = useMemo(
    () => (typeof eventData !== 'undefined' ? eventData : calcData),
    [calcData, eventData],
  )

  useMarkupScroll(
    isEventData ? event : undefined,
    isEventData ? data : scrollData,
    isEventData,
  )

  return (
    (rangeMin || rangeMax) && (
      <Range
        set={setCalData}
        rangeMin={rangeMin || 0.01}
        rangeMax={rangeMax || 1}
        scrollData={scrollData}
      />
    )
  )
}

const Range = ({ set, rangeMin, rangeMax, scrollData }) => {
  const visible = useRef()
  useFrame(() => {
    const updated = scrollData.visible(rangeMin, rangeMax)
    if (visible.current !== updated) {
      visible.current = updated
      set(updated)
    }
  })
}
