import { useThree } from '@react-three/fiber'
import { memo, useEffect } from 'react'

export const EventLayerOn = memo(function EventLayerOn() {
  const { get } = useThree(({ get }) => ({
    get,
  }))
  // turn on events, were turned off at
  // ScrollControls level (to prevent unnecessary compute overhead)
  useEffect(() => {
    get().setEvents({ enabled: true })
  }, [get])
})
