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
      about: [0.00001, 0.25 - 0.000001],
      contact: [0.25, 0.25 - 0.000001],
      services: [0.5, 0.25 - 0.000001],
      attribution: [0.75, 0.25 - 0.000001],
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
    markupIds: {
      title: 'main-title-container',
      subtitle: 'main-subtitle-container',
    },
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
