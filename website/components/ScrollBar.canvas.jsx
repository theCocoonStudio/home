import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { useMarkupBounds } from 'src/hooks'
import { useTheme } from '../hooks/useTheme'
import { Orb } from './Orb.canvas'
import { useThree } from '@react-three/fiber'
import { Vector2, Vector4 } from 'three'

export const ScrollBar = forwardRef(function ScrollBar(
  { orbSize = 25, forceSize = 2 },
  forwardedRef,
) {
  const blogOrb = useRef()
  const aboutOrb = useRef()
  const portfolioOrb = useRef()
  const activeIndex = useRef(0)

  const {
    colors,
    markupIds: {
      scroll: { container },
    },
    lengths: { atomicPadding },
  } = useTheme()

  const track = useRef(document.getElementById(container))

  const callback = useCallback((data) => {
    blogOrb.current?.boundsCallback && blogOrb.current.boundsCallback(data)
    aboutOrb.current?.boundsCallback && aboutOrb.current.boundsCallback(data)
    portfolioOrb.current?.boundsCallback &&
      portfolioOrb.current.boundsCallback(data)
  }, [])

  useMarkupBounds(
    {
      distance: 1,
      callback,
      element: track,
    },
    [],
  )

  const camera = useThree(({ camera }) => camera)

  const prevCenter = useRef(new Vector2(0, 0))
  const centerDiff = useRef(new Vector2(0, 0))

  const forceCallback = useCallback(() => {
    const active = [blogOrb, aboutOrb, portfolioOrb][activeIndex.current]
      .current.ref
    const { x, y, z } = active.position
    const position = new Vector4(x, y, z, 1.0)
    const projectionMatrix = camera.projectionMatrix.clone()
    const modelViewMatrix = camera.matrixWorldInverse
      .clone()
      .multiply(active.matrixWorld.clone())
    const glPosition = position.applyMatrix4(
      projectionMatrix.multiply(modelViewMatrix),
    )
    const center = new Vector2(glPosition.x, glPosition.y)

    centerDiff.current.subVectors(center, prevCenter.current).multiplyScalar(10)
    prevCenter.current.copy(center)

    const pxToCellScaleRadius = orbSize * 0.5 * forceSize // 0.5 is simulation resolution
    return { center, force: centerDiff.current, radius: pxToCellScaleRadius }
  }, [camera.matrixWorldInverse, camera.projectionMatrix, forceSize, orbSize])

  useImperativeHandle(forwardedRef, () => ({ forceCallback }), [forceCallback])

  return (
    <>
      <Orb
        ref={blogOrb}
        index={0}
        orbSize={orbSize}
        color={colors.mint}
        padding={atomicPadding}
        count={4}
        activeIndex={activeIndex}
      >
        <coneGeometry args={[0.5, 1]} />
      </Orb>
      <Orb
        ref={aboutOrb}
        index={1}
        orbSize={21}
        color={colors.charcoal}
        padding={atomicPadding}
        count={5}
        activeIndex={activeIndex}
      >
        <boxGeometry args={[1, 1, 0.5]} />
      </Orb>
      <Orb
        ref={portfolioOrb}
        index={2}
        orbSize={orbSize}
        color={colors.red}
        padding={atomicPadding}
        count={7}
        activeIndex={activeIndex}
        last
      >
        <sphereGeometry args={[0.5]} />
      </Orb>
    </>
  )
})
