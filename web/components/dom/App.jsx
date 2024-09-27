import { useRef } from 'react'
import ThreeApp from '../canvas/ThreeApp'
import { PageProvider } from 'web/context/PageProvider'
import Video from 'public/10.mp4'
import { Nav } from './Nav'
import { Footer } from './Footer'
import Izzy from '../../pages/canvas/Izzy'

import { FluidSim } from '../canvas/FluidQuad/FluidSim'

const pages = [
  Video,
  Video,
  Video,
  Video,
  Video,
  Video,
  Video,
  Video,
  Video,
  Video,
]

export default function App() {
  const ref = useRef()
  return (
    <PageProvider pages={pages}>
      <div id='eventContainer' ref={ref} onClick={(e) => console.log(e.target)}>
        <ThreeApp id='canvas' eventSource={ref} eventPrefix={'client'}>
          {/* <Home /> */}
          {/* <Izzy /> */}
          <FluidSim />
        </ThreeApp>
        {/*  <Nav id='nav' className='space-mono-regular' />
        <div id='main' className='space-grotesk content'>
          <div id='tracking'></div>
          <div id='description' className='disable-scrollbars'>
            <div>{text}</div>
            <div>{text}</div>
          </div>
        </div>
        <Footer id='footer' /> */}
      </div>
    </PageProvider>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus felis, blandit non neque non, mollis convallis elit. Nulla tincidunt, ex a condimentum pretium, dolor velit ultrices odio, vitae iaculis magna tortor ut lectus. Aliquam finibus purus non nunc fermentum, quis accumsan nunc lacinia. Sed feugiat, dolor volutpat faucibus blandit, massa lectus molestie turpis, cursus condimentum enim lorem eu nisl. Vestibulum sit amet blandit nibh. Curabitur faucibus convallis velit et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Phasellus in neque imperdiet arcu fermentum malesuada.`
