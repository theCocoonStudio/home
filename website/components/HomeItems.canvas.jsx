import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useItemGeometry } from '../hooks/useItemGeometry.canvas'
import {
  MeshBasicMaterial,
  MeshStandardMaterial,
  Vector2,
  Vector3,
} from 'three'
import { HomeItem } from './HomeItem.canvas'
import { useSettings } from 'website/pages/Home/useSettings'

export const HomeItems = forwardRef(function HomeItems(
  {
    modelsSize,
    itemsConfig,
    itemDescriptionIdBase,
    scrollContainerId,
    positionZ0,
    sidePadding,
    topBottomPadding,
    get,
    modelsZ,
    floorY,
    size,
    modelsViewportHeight,
    modelsViewportWidth,
    modelsFactor,
    contentWidthPx,
    isMobileLayout,
  },
  forwardedRef,
) {
  // refs
  const group = useRef()
  // geometry
  const { geometry, depth: focusDepth } = useItemGeometry(0.1, 0.00005)
  // material
  const { material, targetMaterial } = useMemo(() => {
    const material = new MeshStandardMaterial({
      transparent: true,
      opacity: 0.4,
      metalness: 1,
      roughness: 1,
      depthWrite: false,
      depthTest: true,
    })

    const targetMaterial = new MeshBasicMaterial({ color: '#777' })
    return { material, targetMaterial }
  }, [])
  useEffect(
    () => () => {
      material.dispose()
      targetMaterial.dispose()
    },
    [],
  )
  // animation data
  const { focusFactor } = useSettings()

  // item-specific data
  const { focusScales, focusPositions, initialPositions, ranges, markups } =
    useMemo(() => {
      if (modelsSize) {
        // initialize output
        const centerLayoutScales = []
        const modelsZScales = []
        const centerLayoutPositions = []
        const mobileSidePositions = []
        const modelsZPositions = []
        const modelsZInitialPositions = []
        const centerLayoutInitialPositions = []
        const ranges = []
        const markups = []

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
          Math.abs(modelsZ - positionZ0) - modelsSize.z - 0.002 > focusDepth * 3

        let isCenterLayout = hasDepthForCenterLayout

        for (let i = 0; i < itemsConfig.length; i++) {
          // calculate range
          const start = i * (1 / itemsConfig.length)
          const fullLength = 1 / itemsConfig.length
          const animationLength = fullLength * ((1 - focusFactor) / 2)
          const end = start + fullLength
          ranges[i] = {
            in: [start, animationLength],
            out: [end - animationLength, animationLength],
          }

          // item's description markup and bottom
          const markup = document.getElementById(
            `${itemDescriptionIdBase}-${i}`,
          )
          const bottomPx = markup.getBoundingClientRect().bottom
          markups[i] = markup

          // model layout calculations, only if not mobile
          if (!isMobileLayout) {
            // item max height in modelsZ layout
            const maxHeightModelsZ =
              modelsViewportHeight / 2 -
              bottomPx / modelsFactor -
              floorY -
              topBottomPadding / modelsFactor

            // item final scale in modelsZ layout
            const scaleModelsZFactor = Math.min(
              maxWidthModelsZ,
              maxHeightModelsZ,
            )

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
              modelsZ - focusDepth / 2,
            )
            // add corresponding initial position
            modelsZInitialPositions[i] = new Vector3(
              modelsViewportWidth / 2 + 2 * modelsZScales[i].x,
              modelsZPositions[i].y,
              modelsZPositions[i].z,
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
                1,
              )

              centerLayoutPositions[i] = new Vector3(
                0,
                floorY + scaleCenterLayoutFactor / 2,
                centerLayoutZ - focusDepth / 2,
              )
              mobileSidePositions[i] = centerLayoutPositions[i]
                .clone()
                .setX(maxWidthCenterLayout / 2 - scaleCenterLayoutFactor / 2)

              // also add corresponding initial position
              centerLayoutInitialPositions[i] = new Vector3(
                modelsViewportWidth / 2 + 2 * centerLayoutScales[i].x,
                centerLayoutPositions[i].y,
                centerLayoutPositions[i].z,
              )
            }
          }
        }

        // focus: return array corresponding to active layout and variable indicating active layout
        const focusScales =
          isCenterLayout || isMobileLayout ? centerLayoutScales : modelsZScales
        const focusPositions = isCenterLayout
          ? centerLayoutPositions
          : isMobileLayout
            ? mobileSidePositions
            : modelsZPositions

        const initialPositions = isCenterLayout
          ? centerLayoutInitialPositions
          : modelsZInitialPositions
        return {
          focusScales,
          focusPositions,
          initialPositions,
          ranges,
          markups,
        }
      }
      return {}
    }, [
      contentWidthPx,
      focusDepth,
      floorY,
      get,
      isMobileLayout,
      itemDescriptionIdBase,
      itemsConfig,
      modelsFactor,
      modelsSize,
      modelsViewportHeight,
      modelsViewportWidth,
      modelsZ,
      positionZ0,
      sidePadding,
      size,
      topBottomPadding,
      focusFactor,
    ])

  useImperativeHandle(
    forwardedRef,
    () => ({
      group: group.current,
      material,
      targetMaterial,
    }),
    [material, targetMaterial],
  )

  const items = useMemo(() => {
    const returnItems = []
    for (let index = 0; index < itemsConfig.length; index++) {
      returnItems[index] = (
        <HomeItem
          key={`item-${index}`}
          geometry={geometry}
          focusScale={focusScales && focusScales[index]}
          focusPosition={focusPositions && focusPositions[index]}
          initialPosition={initialPositions && initialPositions[index]}
          markup={markups && markups[index]}
          scrollContainerId={scrollContainerId}
          index={index}
          range={ranges && ranges[index]}
          url={itemsConfig[index].url}
          get={get}
          focusDepth={focusDepth}
          material={material}
          targetMaterial={targetMaterial}
        />
      )
    }
    return returnItems
  }, [
    focusDepth,
    focusPositions,
    focusScales,
    geometry,
    get,
    initialPositions,
    itemsConfig,
    markups,
    material,
    ranges,
    scrollContainerId,
    targetMaterial,
  ])

  return <group ref={group}>{items}</group>
})
