import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector2 } from 'three'

export const usePointerDiff = (priority) => {
  const newPointer = useRef(new Vector2(0, 0))
  const oldPointer = useRef(new Vector2(0, 0))
  const diff = useRef(new Vector2(0, 0))

  useFrame(({ pointer }) => {
    newPointer.current.copy(pointer)
    diff.current.subVectors(pointer, oldPointer)
    oldPointer.current.copy(pointer)
    if (oldPointer.current.x === 0 && oldPointer.current.y === 0) {
      diff.current.set(0, 0)
    }
  }, priority)
  return { diff: diff.current, pointer: newPointer.current }
}
