import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
/* import { PanelTitle } from '../components/PanelTitle.canvas' */

export const Home = () => {
  return (
    <>
      <Panels />
      <PerspectiveCamera makeDefault position-z={1} />
      <OrbitControls />

      {/* <PanelTitle
        text='test'
        scale={0.4}
        position-z={0.03 * 0.4 + (0.02 / 2) * 0.4}
      /> */}
    </>
  )
}
