import {
  forwardRef,
  Suspense,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { DoubleSide, Vector2, Vector4 } from 'three'
import {
  Environment,
  GradientTexture,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei'
import { useFluidTexture } from 'src/hooks/useFluidTexture'
import { useFrame, useThree } from '@react-three/fiber'
import { VideoTexture } from 'web/components/VideoTexture.canvas'
import Bulb from 'web/components/Bulb.canvas'
import Video from 'public/10.mp4'
import { Effects } from 'web/components/Effects.canvas.jsx'
import { use2DBounds } from 'src/hooks/useBounds/useBounds'
import image1 from 'public/home-1.jpg'
import { Physics, RigidBody } from '@react-three/rapier'
import { Floor } from 'web/components/Floor.canvas'
import { RubiksCube } from 'web/components/RubiksCube.canvas'
import { UNITS } from 'src/constants'
import { LinkedIn } from '../../components/Socials/LinkedIn'
import { geometry } from 'maath'
import { color } from 'three/examples/jsm/nodes/Nodes.js'
import { Github } from '../../components/Socials/Github'
import { Instagram } from '../../components/Socials/Instagram'
import { Icon } from '../../components/Socials/Icon'
import { Gear } from '../../components/Gear'
import { usePage } from '../../hooks/usePage'

const options = {
  iterations_poisson: 32,
  iterations_viscous: 32,
  mouse_force: 20,
  resolution: 0.5,
  cursor_size: 50,
  viscous: 40,
  isBounce: true,
  dt: 0.014,
  isViscous: true,
  BFECC: true,
  forceCallback: (delta, elapsedTime) => {
    const force = new Vector2(
      Math.cos(elapsedTime),
      Math.sin(elapsedTime),
    ).multiplyScalar(0.5)
    const center = new Vector2(0.5, 0)
    return { force, center }
  },
}

/* simulation mesh */
export const Home = forwardRef(function FluidSim({ ...props }, forwardedRef) {
  const camera = useRef()
  const cube = useRef()
  const meshRef = useRef()
  const background = useRef()
  const socials1 = useRef()
  const socials2 = useRef()
  const socials3 = useRef()
  const settings = useRef()

  const {
    data: {
      theme: colorTheme,
      layout: { tracking, description },
      footer: { socials1: s1, socials2: s2, socials3: s3, settings1 },
    },
  } = usePage()
  useImperativeHandle(forwardedRef, () => meshRef.current)

  const { width, height } = useThree(({ size }) => size)

  const progress = useRef(0)
  const container = useRef()
  useEffect(() => {
    container.current = document.getElementById('progress')
  }, [])

  const image = useTexture(image1)

  use2DBounds(meshRef, {
    margin: new Vector4(100, 0, 100, 0),
    marginUnits: UNITS.PX,
  })
  use2DBounds(cube, {
    damping: { smoothTime: 0.0 },
    trackingElement: true,
    trackingElementRef: tracking,
    scaleToFitWidth: false,
    pause: true,
  })
  /*   use2DBounds(background, {
    trackingElement: true,
    trackingElementRef: description,
  }) */
  use2DBounds(socials1, {
    trackingElement: true,
    trackingElementRef: s1,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials2, {
    trackingElement: true,
    trackingElementRef: s2,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })
  use2DBounds(socials3, {
    trackingElement: true,
    trackingElementRef: s3,
    scaleToFitWidth: false,
    computeScale: setScale,
    pause: true,
    damping: { smoothTime: 0.0 },
  })

  use2DBounds(settings, {
    scaleToFitWidth: false,
    trackingElement: true,
    trackingElementRef: settings1,
    computeScale: setScale,

    pause: true,
    damping: { smoothTime: 0.0 },
  })

  const texture = useFluidTexture(options, undefined, [
    width - 200,
    height - 200,
  ])

  return (
    <>
      <PerformanceMonitor>
        {/* <OrbitControls /> */}
        {/*   <mesh ref={background}>
          <planeGeometry />
          <meshStandardMaterial
            color={colorTheme.slate}
            transparent
            opacity={0.45}
          />
        </mesh> */}

        <Icon ref={socials1} colorTheme={colorTheme.gunmetal}>
          <LinkedIn colorTheme={colorTheme} />
        </Icon>
        <Icon ref={socials2} colorTheme={colorTheme.gunmetal}>
          <Github colorTheme={colorTheme} />
        </Icon>
        <Icon ref={socials3} colorTheme={colorTheme.gunmetal}>
          <Instagram colorTheme={colorTheme} />
        </Icon>
        <Gear
          ref={settings}
          colorTheme={colorTheme}
          onClick={() => {
            progress.current += 10
            for (let i = 0; i <= 4; i++) {
              console.log(container.current.children[i].style)
              container.current.children[i].style.setProperty(
                `--p${i}`,
                `${Math.max(0, progress.current - i * 100)}%`,
              )
            }
          }}
        />
        {/* <Bulb scale={0.03} position-z={0.5} /> */}
        <PerspectiveCamera makeDefault position-z={1} ref={camera} />
        <Effects />
        <Suspense>
          <Physics gravity={[0, -1, 0]}>
            <RubiksCube
              colorTheme={colorTheme}
              ref={cube}
              scale={0.18}
              physics={false}
              itemScale={0.6}
              position={[0, 0, -2]}
              rotation={[-Math.PI / 6, -Math.PI / 4, 0]}
            />
          </Physics>
        </Suspense>
        <Environment
          preset='studio'
          background={false}
          /* environmentIntensity={1} */
        />
        <mesh
          ref={meshRef}
          position-z={-15}
          scale-x={width / height}
          name='activeSun'
        >
          <planeGeometry />
          <meshBasicMaterial
            side={DoubleSide}
            transparent
            alphaMap={texture}
            map={texture}
          >
            {/* <VideoTexture video={Video} /> */}

            <GradientTexture
              stops={[0, 0.5, 1]} // As many stops as you want
              colors={[
                colorTheme.charcoal,
                colorTheme.gunmetal,
                colorTheme.slate,
              ]} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
          </meshBasicMaterial>
        </mesh>
        <color attach='background' args={['#101010']} />
        {/*     <Bulb
          scale={0.1}
          ref={cube}
        /> */}
      </PerformanceMonitor>
    </>
  )
})

const setScale = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  scale.set(scaleX, scaleX, scaleX)
  return scale
}

const setEven = (obj, results) => {
  const scale = obj.scale.clone()
  const scaleX = Math.abs(
    results.bounds.max.getComponent(0) - results.bounds.min.getComponent(0),
  )
  const scaleY = Math.abs(
    results.bounds.max.getComponent(1) - results.bounds.min.getComponent(1),
  )
  scale.set(scaleX, scaleY / 2, scaleY / 2)
  return scale
}
