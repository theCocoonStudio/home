import { damp } from 'maath/easing'
import { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react'
import {
  /* CameraHelper,
  DirectionalLightHelper, */
  DirectionalLight as Light,
} from 'three'

const _DirectionalLight = function DirectionalLightAnimation(
  {
    config: {
      content: {
        sections: {
          photography: { range: photographyRange, items: photographyItems },
        },
      },
    },
    position,
    /* targetPosition, */
    color,
    defaultIntensity = 2.5,
    intensity = 1.7,
    zPos,
  },
  ref,
) {
  const { light /* cameraHelper, helper */ } = useMemo(() => {
    const light = new Light(color, defaultIntensity)
    light.target.position.setZ(zPos)
    light.position.set(...position)
    light.shadow.camera.near = 0
    light.shadow.camera.far = 1
    light.shadow.camera.left = -0.5
    light.shadow.camera.right = 0.5
    light.shadow.camera.bottom = -0.5
    light.shadow.camera.top = 0.5
    light.shadow.mapSize.width = 2048
    light.shadow.mapSize.height = 2048
    /* const cameraHelper = new CameraHelper(light.shadow.camera)
    const helper = new DirectionalLightHelper(light) */
    // update the light target's matrixWorld because it's needed by the helper
    light.target.updateMatrixWorld()
    /* helper.update() */
    // update the light's shadow camera's projection matrix
    light.shadow.camera.updateProjectionMatrix()
    // and now update the camera helper we're using to show the light's shadow camera
    /* cameraHelper.update() */
    return { light /* cameraHelper, helper */ }
  }, [])

  // animation callback

  const scrollCallback = useCallback(
    (state, delta, scrollData, scrollRanges) => {
      const visible = scrollRanges.photographyVisible
      if (visible) {
        // light shadow
        if (!light.castShadow) {
          light.castShadow = true
        }
      } else {
        // light shadow
        if (light.castShadow) {
          light.castShadow = false
        }
      }
      // light intensity
      const startPhotographyOffset = scrollRanges.startPhotographyOffset
      const startBlogOffset = scrollRanges.startBlogOffset
      damp(
        light,
        'intensity',
        startBlogOffset > 0.0
          ? intensity + startBlogOffset * (defaultIntensity - intensity)
          : defaultIntensity +
              startPhotographyOffset * (intensity - defaultIntensity),
        0.05,
        delta,
      )
      // light position
      const fullOffset = scrollRanges.photographyOffset
      damp(
        light.position,
        'x',
        Math.sin(fullOffset * photographyItems.length * 2 * Math.PI) / 2,
        0.0,
        delta,
      )
    },
    [defaultIntensity, intensity, light, photographyItems],
  )

  useImperativeHandle(
    ref,
    () => ({
      scrollCallback,
      light,
      defaultIntensity,
      intensity,
    }),
    [defaultIntensity, intensity, light, scrollCallback],
  )

  return (
    <>
      <primitive object={light} />
      {/* <primitive object={cameraHelper} />
      <primitive object={helper} /> */}
    </>
  )
}

export const DirectionalLightAnimation = forwardRef(_DirectionalLight)
