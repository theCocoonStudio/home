import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { NavItems } from './NavItems'
import { FooterItems } from './FooterItems'
import { ScrollEventDispatcher } from './ScrollEventDispatcher.view'
import { HomeProvider } from './HomeProvider'
import { Gallery } from '../../components/Gallery'
import { HomeSettings } from '../../components/HomeSettings'
import { HomeLogo } from '../../components/HomeLogo.view'

export const config = {
  context: { Provider: HomeProvider },
  main: {
    /* Component: Main, */
    ViewComponent: Home,
    renderPriority: 1,
    EventDispatcherComponent: ScrollEventDispatcher,
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
    focusFactor: 0.46,
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
    NavItemsComponent: () => {} /* NavItems */,
    LogoComponent: HomeLogo,
    /*   initialLogoColor: '#111', */
  },
  footer: {
    FooterItemsComponent: () => {} /* FooterItems */,
  },
}
