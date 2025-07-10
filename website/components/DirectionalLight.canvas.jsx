import { damp } from 'maath/easing'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { DirectionalLight as Light } from 'three'
import { useSettings } from 'website/pages/Home/useSettings'

const _DirectionalLight = function DirectionalLightAnimation(
  {
    config: {
      content: {
        sections: {
          photography: { range: photographyRange, items: photographyItems },
        },
      },
    },
    color,
    defaultIntensity = 2.5,
    intensity = 1.7,
    posY = 0.2,
    posZ = 0.5,
    zPos,
  },
  ref,
) {
  const { mapSize } = useSettings()
  const [light, setLight] = useState()

  useEffect(() => {
    const posX = light ? light.position.x : 0
    const _light = new Light(color, defaultIntensity)
    _light.target.position.setZ(zPos)
    _light.position.setX(posX)
    _light.position.setY(posY)
    _light.position.setZ(posZ)
    _light.shadow.camera.near = 0
    _light.shadow.camera.far = 1
    _light.shadow.camera.left = -0.5
    _light.shadow.camera.right = 0.5
    _light.shadow.camera.bottom = -0.5
    _light.shadow.camera.top = 0.5
    _light.shadow.mapSize.set(2 ** mapSize, 2 ** mapSize)
    _light.target.updateMatrixWorld()
    _light.shadow.camera.updateProjectionMatrix()
    _light.castShadow = true

    setLight(_light)
  }, [mapSize])

  useEffect(
    () => () => {
      light && light.dispose()
    },
    [light],
  )
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

  return light && <primitive object={light} />
}

export const DirectionalLightAnimation = forwardRef(_DirectionalLight)
