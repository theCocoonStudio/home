import { useThree } from '@react-three/fiber'
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { Vector2 } from 'three'
import { useTheme } from '../hooks/useTheme'
import { clamp } from 'three/src/math/MathUtils.js'
import { BoundPathGenerator } from '../utils/path'

/* const path = new Path().moveTo(0.0, -0.25).lineTo(0.0, 0.25) */
const _PrescrollAnimation = forwardRef(function PrescrollAnimation(
  { range, bgRef },
  forwardedRef,
) {
  const stateCallback = useCallback(({ size, viewport, camera }) => {
    return { size, viewport, camera }
  }, [])

  const { size, viewport, camera } = useThree(stateCallback)
  const {
    lengths: { footerHeight, atomicPadding, navHeight },
  } = useTheme()

  const uvSpaceClamps = useRef(
    new Vector2(
      (8 * 2 * atomicPadding) / size.width,
      (footerHeight - navHeight) / size.height,
    ),
  ) // left/right, top/bottom

  const path = useMemo(() => new BoundPathGenerator(uvSpaceClamps.current), [])

  const resizeCallback = useCallback(() => {
    const target = bgRef.current?.meshRef.current
    const { width, height, factor } = viewport.getCurrentViewport(
      camera,
      target.position.clone(),
      size,
    )
    uvSpaceClamps.current.set(
      (8 * 2 * atomicPadding) / factor / width,
      (footerHeight / factor + navHeight / factor) / height,
    )
    path.updatePadding(uvSpaceClamps.current)
  }, [
    atomicPadding,
    bgRef,
    camera,
    footerHeight,
    navHeight,
    path,
    size,
    viewport,
  ])

  const elapsed = useRef(0.0)
  const applyingForce = useRef(false)
  const randomLength = useRef(clamp(Math.random() * 4.0, 1.3, 3.8))
  const force = useRef(new Vector2())
  const center = useRef(new Vector2())
  const prevCenter = useRef(new Vector2())
  const forceCallback = useCallback(
    (delta) => {
      if (elapsed.current > randomLength.current) {
        force.current.set(0, 0)
        center.current.set(0, 0)
        prevCenter.current.set(0, 0)
        if (applyingForce.current === false) {
          applyingForce.current = true
          elapsed.current = 0.0
          randomLength.current = clamp(Math.random() * 2.0, 0.5, 1.5)
          prevCenter.current.copy(path.newPath().getPoint(0.0))
        } else {
          applyingForce.current = false
          elapsed.current = 0.0
          randomLength.current = clamp(Math.random() * 2.0, 0.3, 1.85)
        }
        return { center: center.current, force: force.current }
      } else {
        if (applyingForce.current === false) {
          force.current.set(0, 0)
          center.current.set(0, 0)
          prevCenter.current.set(0, 0)
          elapsed.current = elapsed.current + delta
          return { center: center.current, force: force.current }
        } else {
          let factor =
            (elapsed.current % randomLength.current) / randomLength.current
          center.current.copy(path.getPoint(factor))
          force.current.subVectors(center.current, prevCenter.current)
          prevCenter.current.copy(center.current)
          elapsed.current = elapsed.current + delta
          return { force: force.current, center: center.current }
        }
      }
    },
    [path],
  )

  const forceCallbackSet = useRef(false)
  const scrollCallback = useCallback(
    (state, delta, scrollData) => {
      if (scrollData.visible(...range)) {
        if (!forceCallbackSet.current) {
          bgRef.current.setForceCallback(forceCallback)
          forceCallbackSet.current = true
        }
      } else {
        // outside range, so will have to be set when/if back
        if (forceCallbackSet.current) {
          forceCallbackSet.current = false
        }
      }
    },
    [bgRef, forceCallback, range],
  )

  useImperativeHandle(
    forwardedRef,
    () => ({ resizeCallback, scrollCallback }),
    [resizeCallback, scrollCallback],
  )
})

export const PrescrollAnimation = memo(_PrescrollAnimation)
