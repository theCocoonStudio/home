import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { HomeProvider } from './HomeProvider'
import { HomeSettings } from '../../components/HomeSettings'
import { HomeLogo } from '../../components/HomeLogo.view'
import { ScrollContainer } from '../../components/ScrollContainer'

export const config = {
  context: { Provider: HomeProvider },
  main: {
    Component: Main,
    ViewComponent: Home,
    renderPriority: 1,
  },
  effects: {
    renderPriority: 2,
    Component: Effects,
  },
  lightbox: {
    /* Component: Gallery, */
  },
  menu: {
    Component: HomeSettings,
  },
  data: {
    constants: {
      focusFactor: 0.46,
    },
    markupIds: { scrollContainerId: 'home-scroll-container' },
    content: {
      items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
  },

  scroll: {
    scrollControlsProps: {
      pages: 20,
      enabled: true,
      damping: 0,
      distance: 2,
    },
    ranges: { temp: 0 },
  },
  nav: {
    logoRenderPriority: 3,
    LogoComponent: HomeLogo,
  },
  footer: {
    FooterComponent: ScrollContainer,
  },
}
