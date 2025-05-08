import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { NavItems } from './NavItems'
import { FooterItems } from './FooterItems'
import { ScrollEventDispatcher } from './ScrollEventDispatcher.view'
import { ScrollEventProvider } from './ScrollEventProvider'

export const config = {
  scroll: {
    scrollControlsProps: {
      pages: 10,
      enabled: true,
      damping: 0,
      distance: 2,
    },
    ranges: {
      preScroll: [0.0, 0.00001] /* 0.00001 = default ScrollControls eps */,
      animationStart: [0.00001, 0.1 - 0.000001],
      about: [0.1 + (0.8 / 4) * 0, 0.8 / 4],
      contact: [0.1 + (0.8 / 4) * 1, 0.8 / 4],
      services: [0.1 + (0.8 / 4) * 2, 0.8 / 4],
      attribution: [0.1 + (0.8 / 4) * 3, 0.8 / 4],
      animationEnd: [0.9, 0.1],
    },
  },
  effects: {
    renderPriority: 2,
    Component: Effects,
  },
  context: { Provider: ScrollEventProvider },
  main: {
    Component: Main,
    ViewComponent: Home,
    renderPriority: 1,
    EventDispatcherComponent: ScrollEventDispatcher,
  },
  sections: ['about, contact, services, attribution'],
  nav: {
    logoRenderPriority: 3,
    NavItemsComponent: NavItems,
  },
  footer: {
    FooterItemsComponent: FooterItems,
    markupIds: {
      scrollContainer: 'scroll-container',
      fpsContainer: 'fps-container',
    },
  },
}
