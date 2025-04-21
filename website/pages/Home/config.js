import { FooterItems } from './FooterItems'
import { Home } from './Home.view'
import { NavItems } from './NavItems'

export const config = {
  scroll: {
    scrollControlsProps: {
      pages: 10,
      enabled: true,
      damping: 0,
      distance: 2,
    },
    ranges: {
      animationStart: [0.01, 0.1 - 0.01],
      about: [0.1 + (0.8 / 4) * 0, 0.8 / 4],
      contact: [0.1 + (0.8 / 4) * 1, 0.8 / 4],
      services: [0.1 + (0.8 / 4) * 2, 0.8 / 4],
      attribution: [0.1 + (0.8 / 4) * 3, 0.8 / 4],
      animationEnd: [0.9, 0.1],
    },
  },
  main: {
    ViewComponent: Home,
    renderPriority: 1,
  },
  sections: ['about, contact, services, attribution'],
  nav: {
    logoRenderPriority: 2,
    NavItemsComponent: NavItems,
    sectionRanges: [
      [0.1 + (0.8 / 4) * 0, 0.8 / 4],
      [0.1 + (0.8 / 4) * 1, 0.8 / 4],
      [0.1 + (0.8 / 4) * 2, 0.8 / 4],
      [0.1 + (0.8 / 4) * 3, 0.8 / 4],
    ],
    viewRenderPriority: 3,
  },
  footer: {
    viewRenderPriority: 4,
    showScrollRange: [0.01, 0.9 - 0.01],
    ViewComponent: FooterItems,
    markupIds: {
      scrollContainer: 'scroll-container',
      fpsContainer: 'fps-container',
    },
  },
}
