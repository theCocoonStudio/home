import { useFBO } from '@react-three/drei'
import { useTheme } from '../hooks/useTheme'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector2,
} from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { cover } from 'website/utils/texture'
import {
  GlitchPass,
  HueSaturationShader,
  RGBShiftShader,
  ShaderPass,
} from 'three/examples/jsm/Addons.js'

export const useScreenTexture = ({
  aspect = 1,
  resolution = 128,
  renderPriority = -1,
}) => {
  // theme
  const { colors } = useTheme()

  // three app state
  const { gl } = useThree(({ gl }) => ({
    gl,
  }))

  // render target
  const fbo = useFBO(resolution, resolution)
  useEffect(() => {
    cover(fbo.texture, aspect)
  }, [aspect, fbo.texture])

  // three js objects
  const { scene, camera, geometry, material, group } = useMemo(() => {
    // scene
    const scene = new Scene()
    scene.background = new Color(colors.slate)

    // camera
    const camera = new PerspectiveCamera(10)
    camera.position.z = 1

    // scene objects
    const geometry = new BoxGeometry()
    const material = new MeshStandardMaterial({
      color: colors.white,
    })

    const mesh = new Mesh(geometry, material)
    const group = new Group()
    group.rotation.set(0, Math.PI / 4, Math.PI / 4)
    group.position.setZ(0.5)
    group.scale.set(0.017, 0.017, 0.017)
    group.add(mesh)
    scene.add(group)

    scene.add(new AmbientLight(0xcccccc))

    const light = new DirectionalLight(0xffffff, 3)
    light.position.set(1, 1, 1)
    scene.add(light)
    return { scene, camera, geometry, material, group }
  }, [colors])

  // dispose materials/geometries
  useEffect(
    () => () => {
      geometry.dispose()
      material.dispose()
    },
    [geometry, material],
  )

  // composer
  const { composer, passes } = useMemo(() => {
    const composer = new EffectComposer(gl, fbo)

    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    /*
     * hue: -1 to 1 (-1 is 180 degrees in the negative direction, 0 is no change, etc.
     * saturation: -1 to 1 (-1 is solid gray, 0 is no change, and 1 is maximum contrast)
     */
    const hueSaturationPass = new ShaderPass(HueSaturationShader)
    hueSaturationPass.uniforms['hue'].value = -0.05
    hueSaturationPass.uniforms['saturation'].value = -0.5
    composer.addPass(hueSaturationPass)

    const rgbShiftPass = new ShaderPass(RGBShiftShader)
    rgbShiftPass.uniforms['amount'].value = 0.03
    composer.addPass(rgbShiftPass)

    const glitchPass = new GlitchPass()
    composer.addPass(glitchPass)

    const scanlineShader = {
      uniforms: {
        tDiffuse: { value: null },
        resolution: { value: new Vector2() },
        scanlineIntensity: { value: 0.08 }, // Adjust as needed
      },
      vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
      fragmentShader: `
            uniform sampler2D tDiffuse;
            uniform vec2 resolution;
            uniform float scanlineIntensity;
            varying vec2 vUv;

            void main() {
                vec4 color = texture2D(tDiffuse, vUv);
                float scanline = sin(vUv.y * resolution.y * 2.0) * scanlineIntensity; // Adjust frequency and intensity
                color.rgb -= scanline;
                gl_FragColor = color;
            }
        `,
    }
    const scanlinePass = new ShaderPass(scanlineShader)
    scanlinePass.uniforms['resolution'].value.set(resolution, resolution)
    composer.addPass(scanlinePass)

    const outputPass = new OutputPass()
    composer.addPass(outputPass)

    composer.setSize(resolution, resolution)
    return {
      composer,
      passes: {
        renderPass,
        hueSaturationPass,
        rgbShiftPass,
        glitchPass,
        scanlinePass,
        outputPass,
      },
    }
  }, [camera, fbo, gl, resolution, scene])

  // dispose old composer and passes on update
  useEffect(
    () => () => {
      composer.dispose()
      for (const key in passes) {
        passes[key].dispose()
      }
    },
    [composer, passes],
  )

  useFrame((state) => {
    const rot = state.clock.getElapsedTime()
    group.rotation.set(0, rot, Math.PI / 4)
    group.matrixWorldNeedsUpdate = true
    composer.render()
  }, renderPriority)

  return fbo
}
