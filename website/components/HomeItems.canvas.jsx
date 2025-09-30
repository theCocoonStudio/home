import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import { useItemGeometry } from '../hooks/useItemGeometry.canvas'
import { Vector2, Vector3 } from 'three'
import { HomeItem } from './HomeItem.canvas'

export const HomeItems = forwardRef(function HomeItems(
  {
    modelsSize,
    positionZ0,
    itemsConfig,
    itemDescriptionIdBase,
    sidePadding,
    topBottomPadding,
    get,
    modelsZ,
    floorY,
    size,
    modelsViewportHeight,
    modelsFactor,
    contentWidthPx,
    isMobileLayout,
  },
  forwardedRef,
) {
  // refs
  const mesh = useRef()
  const material = useRef()
  // geometry
  const { geometry, depth } = useItemGeometry(0.08, 0.00005)

  // item-specific markup data
  const { focusScales, focusPositions } = useMemo(() => {
    if (modelsSize) {
      // innitialize output
      const centerLayoutScales = []
      const modelsZScales = []
      const centerLayoutPositions = []
      const mobileSidePositions = []
      const modelsZPositions = []

      // base data

      const { camera } = get()

      // center layout viewport data
      const centerLayoutZ =
        positionZ0 + (modelsZ - modelsSize.z - positionZ0) / 2

      const viewportSizeCenterLayout = camera.getViewSize(
        Math.abs(camera.position.z - centerLayoutZ),
        new Vector2(),
      )
      const factorCenterLayout = size.height / viewportSizeCenterLayout.y

      // max width for center layout
      const maxWidthCenterLayout =
        (contentWidthPx - 2 * sidePadding) / factorCenterLayout

      // height from bottom of center-layout item to top of models (overlap), in center layout units
      const floorYCenterLayoutBottomPx =
        factorCenterLayout * (floorY - -viewportSizeCenterLayout.y / 2)

      const modelsTopBottomPx =
        modelsFactor * (floorY + modelsSize.y - -modelsViewportHeight / 2)
      const centerLayoutOverlapHeightPx =
        modelsTopBottomPx > floorYCenterLayoutBottomPx
          ? modelsTopBottomPx - floorYCenterLayoutBottomPx
          : 0

      // max width for modelsZ layout
      const maxWidthModelsZ =
        (contentWidthPx / 2 - 2 * sidePadding) / modelsFactor

      // initial test for center layout
      const hasDepthForCenterLayout =
        Math.abs(modelsZ - positionZ0) - modelsSize.z - 0.002 > depth * 3

      let isCenterLayout = hasDepthForCenterLayout

      for (let i = 0; i < itemsConfig.length; i++) {
        // item's description markup bottom
        const bottomPx = document
          .getElementById(`${itemDescriptionIdBase}-${i}`)
          .getBoundingClientRect().bottom

        // model layout calculations, only if not mobile
        if (!isMobileLayout) {
          // item max height in modelsZ layout
          const maxHeightModelsZ =
            modelsViewportHeight / 2 -
            bottomPx / modelsFactor -
            floorY -
            topBottomPadding / modelsFactor

          // item final scale in modelsZ layout
          const scaleModelsZFactor = Math.min(maxWidthModelsZ, maxHeightModelsZ)

          // add modelsZ item scale to corresponding array
          modelsZScales[i] = new Vector3(
            scaleModelsZFactor,
            scaleModelsZFactor,
            scaleModelsZFactor,
          )

          // add modelsZ item position to corresponding array
          modelsZPositions[i] = new Vector3(
            (0.25 * contentWidthPx) / modelsFactor,
            floorY + scaleModelsZFactor / 2,
            modelsZ - depth / 2,
          )
        }

        // only while center layout still applies, calculate center-layout item scale as well

        if (isCenterLayout || isMobileLayout) {
          // item max height in center layout
          const maxHeightCenterLayout =
            viewportSizeCenterLayout.y / 2 -
            bottomPx / factorCenterLayout -
            floorY -
            topBottomPadding / factorCenterLayout

          // item final scale in center layout
          const scaleCenterLayoutFactor = Math.min(
            maxWidthCenterLayout,
            maxHeightCenterLayout,
          )
          // item pixel height in center layout
          const heightCenterLayoutPx =
            scaleCenterLayoutFactor * factorCenterLayout

          // test if center layout still applies
          const supportsCenterLayout =
            heightCenterLayoutPx >= 2 * centerLayoutOverlapHeightPx

          // set isCenterLayout for next iteration
          isCenterLayout = supportsCenterLayout

          // if center-layout still applies (or isMobile), add item's center-layout (or mobile) position and scale to output arrays
          if (isCenterLayout || isMobileLayout) {
            centerLayoutScales[i] = new Vector3(
              scaleCenterLayoutFactor,
              scaleCenterLayoutFactor,
              scaleCenterLayoutFactor,
            )

            centerLayoutPositions[i] = new Vector3(
              0,
              floorY + scaleCenterLayoutFactor / 2,
              centerLayoutZ - depth / 2,
            )
            mobileSidePositions[i] = centerLayoutPositions[i]
              .clone()
              .setX(maxWidthCenterLayout / 2 - scaleCenterLayoutFactor / 2)
          }
        }
      }

      // return array corresponding to active layout and variable indicating active layout
      const focusScales =
        isCenterLayout || isMobileLayout ? centerLayoutScales : modelsZScales
      const focusPositions = isCenterLayout
        ? centerLayoutPositions
        : isMobileLayout
          ? mobileSidePositions
          : modelsZPositions
      return {
        focusScales,
        focusPositions,
      }
    }
    return {}
  }, [
    contentWidthPx,
    depth,
    floorY,
    get,
    isMobileLayout,
    itemDescriptionIdBase,
    itemsConfig,
    modelsFactor,
    modelsSize,
    modelsViewportHeight,
    modelsZ,
    positionZ0,
    sidePadding,
    size,
    topBottomPadding,
  ])

  useImperativeHandle(
    forwardedRef,
    () => ({
      item: mesh.current,
      material: material.current,
    }),
    [],
  )

  return (
    <>
      <HomeItem
        ref={mesh}
        geometry={geometry}
        focusScale={focusScales ? focusScales[0] : undefined}
        focusPosition={focusPositions ? focusPositions[0] : undefined}
      />
    </>
  )
})
