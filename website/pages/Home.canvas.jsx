import { PerspectiveCamera, Scroll } from '@react-three/drei'
import { Panels } from '../components/Panels.canvas'
import { Environment } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'

export const Home = () => {
  return (
    <ScrollControls pages={3} enabled={true}>
      <Scroll>
        <Panels />
      </Scroll>
      <PerspectiveCamera makeDefault position-z={1} fov={50} />
      <Environment preset='warehouse' />
    </ScrollControls>
  )
}
