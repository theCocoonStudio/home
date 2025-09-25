import { forwardRef, useMemo } from 'react'
import { useItemGeometry } from '../hooks/useItemGeometry.canvas'
import { Vector2, Vector3 } from 'three'

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
  },
  forwardedRef,
) {
  // geometry
  const { geometry, depth } = useItemGeometry()

  // item-specific markup data
  const { focusScales, focusPositions } = useMemo(() => {
    if (modelsSize) {
      // innitialize output
      const centerLayoutScales = []
      const modelsZScales = []
      const centerLayoutPositions = []
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

      // models pixel height
      const modelsHeightPx = modelsSize.y * modelsFactor

      // max width for center layout
      const maxWidthCenterLayout =
        (contentWidthPx - 2 * sidePadding) / factorCenterLayout

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
          1,
        )

        // add modelsZ item position to corresponding array
        modelsZPositions[i] = new Vector3(
          (0.25 * contentWidthPx) / modelsFactor,
          floorY + scaleModelsZFactor / 2,
          modelsZ - depth / 2,
        )

        // only while center layout still applies, calculate center-layout item scale as well

        if (isCenterLayout) {
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
            heightCenterLayoutPx >= 2 * modelsHeightPx
          console.log(
            'change this to calculate visible height as floor y in center layout will appear above floor y in models',
          )
          // set isCenterLayout for next iteration
          isCenterLayout = supportsCenterLayout

          //if center layout still applies, add item's center-layout position and scale to output arrays
          if (isCenterLayout) {
            centerLayoutScales[i] = new Vector3(
              scaleCenterLayoutFactor,
              scaleCenterLayoutFactor,
              1,
            )

            centerLayoutPositions[i] = new Vector3(
              0,
              floorY + scaleCenterLayoutFactor / 2,
              centerLayoutZ - depth / 2,
            )
          }
        }
      }

      // return array corresponding to active layout and variable indicating active layout
      return {
        focusScales: isCenterLayout ? centerLayoutScales : modelsZScales,
        focusPositions: isCenterLayout
          ? centerLayoutPositions
          : modelsZPositions,
      }
    }
    return {}
  }, [
    contentWidthPx,
    depth,
    floorY,
    get,
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

  return (
    <>
      {focusScales && (
        <mesh
          geometry={geometry}
          scale={focusScales[0]}
          position={focusPositions[0]}
        >
          <meshStandardMaterial color='red' />
        </mesh>
      )}
    </>
  )
})
