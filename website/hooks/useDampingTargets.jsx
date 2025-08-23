import { useThree } from '@react-three/fiber'
import { useCallback, useLayoutEffect, useState } from 'react'
import { Vector3 } from 'three'
import { getMarkupBounds } from '../utils/bounds'

export const useDampingTargets = ({
  default: {
    initialMarkupId,
    intermediateMarkupId,
    focusMarkupId,
    itemZpos,
    initialDepth,
    targetDepth,
    getItemDataFromBounds,
    getTargetDataFromBounds,
  },
  photography: {
    initialMarkupId: initialMarkupIdPhotography,
    intermediateMarkupId: intermediateMarkupIdPhotography,
    focusMarkupId: focusMarkupIdPhotography,
    itemZpos: itemZposPhotography,
  },
  scrollContainerId,
  itemCount,
  setItemDescriptionTop,
  dummySubtitleElement,
  dummyDescriptionElement,
}) => {
  /* independent data */
  const { get } = useThree(({ get }) => ({
    get,
  }))

  /* item position bounds */
  const getItemBounds = useCallback(() => {
    const defaultOps = {
      state: get(),
      target: new Vector3(0, 0, itemZpos),
      id: [initialMarkupId, intermediateMarkupId, focusMarkupId],
    }
    const [
      defaultInitialBounds,
      defaultIntermediateBounds,
      defaultFocusBounds,
    ] = getMarkupBounds(defaultOps)

    const photographyOpts = {
      state: get(),
      target: new Vector3(0, 0, itemZposPhotography),
      id: [
        initialMarkupIdPhotography,
        intermediateMarkupIdPhotography,
        focusMarkupIdPhotography,
      ],
    }
    const [
      photographyInitialBounds,
      photographyIntermediateBounds,
      photographyFocusBounds,
    ] = getMarkupBounds(photographyOpts)

    const targetIds = []
    for (let i = 0; i < itemCount; i++) {
      targetIds[i] = `${scrollContainerId}-${i}`
    }
    const targetOpts = {
      state: get(),
      target: new Vector3(0, 0, itemZpos),
      id: targetIds,
    }
    const targetBounds = getMarkupBounds(targetOpts)

    return {
      defaultInitial: getItemDataFromBounds(defaultInitialBounds, {
        itemZpos,
        depth: initialDepth,
        geometryDepth: initialDepth,
      }),
      defaultIntermediate: getItemDataFromBounds(defaultIntermediateBounds, {
        itemZpos,
        depth: initialDepth,
        geometryDepth: initialDepth,
      }),
      defaultFocus: getItemDataFromBounds(defaultFocusBounds, {
        itemZpos,
        depth: initialDepth,
        geometryDepth: initialDepth,
      }),
      computeDefaultBounds: () => {
        const [
          defaultInitialBounds,
          defaultIntermediateBounds,
          defaultFocusBounds,
        ] = getMarkupBounds(defaultOps)
        return {
          defaultInitial: getItemDataFromBounds(defaultInitialBounds, {
            itemZpos,
            depth: initialDepth,
            geometryDepth: initialDepth,
          }),
          defaultIntermediate: getItemDataFromBounds(
            defaultIntermediateBounds,
            {
              itemZpos,
              depth: initialDepth,
              geometryDepth: initialDepth,
            },
          ),
          defaultFocus: getItemDataFromBounds(defaultFocusBounds, {
            itemZpos,
            depth: initialDepth,
            geometryDepth: initialDepth,
          }),
        }
      },
      photographyInitialBounds,
      photographyIntermediateBounds,
      photographyFocusBounds,
      target: targetBounds.map((bounds) =>
        getTargetDataFromBounds(bounds, {
          itemZpos,
          depth: targetDepth,
          geometryDepth: initialDepth,
        }),
      ),
    }
  }, [
    focusMarkupId,
    focusMarkupIdPhotography,
    get,
    getItemDataFromBounds,
    getTargetDataFromBounds,
    initialDepth,
    initialMarkupId,
    initialMarkupIdPhotography,
    intermediateMarkupId,
    intermediateMarkupIdPhotography,
    itemCount,
    itemZpos,
    itemZposPhotography,
    scrollContainerId,
    targetDepth,
  ])

  const [itemBounds, setItemBounds] = useState(getItemBounds())
  useLayoutEffect(() => {
    if (
      setItemDescriptionTop &&
      dummySubtitleElement &&
      dummyDescriptionElement
    ) {
      setItemDescriptionTop(dummySubtitleElement, dummyDescriptionElement)
      setItemBounds(getItemBounds())
    }
  }, [
    dummyDescriptionElement,
    dummySubtitleElement,
    getItemBounds,
    setItemDescriptionTop,
  ])

  return itemBounds
}
