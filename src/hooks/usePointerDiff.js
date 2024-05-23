import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Vector2 } from 'three'

export const usePointerDiff = () => {
  const oldPointer = useRef(new Vector2())
  const diff = useRef(new Vector2())

  useFrame(({ pointer }) => {
    diff.current.subVectors(pointer, oldPointer)
    oldPointer.current.copy(pointer)
    if (oldPointer.current.x === 0 && oldPointer.current.add.y === 0) {
      diff.current.set(0, 0)
    }
  })
  return diff.current
}
