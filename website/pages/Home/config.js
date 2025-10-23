import { Effects } from './Effects.canvas'
import { Main } from './Main'
import { HomeSettings } from '../../components/HomeSettings'
import { HomeLogo } from '../../components/HomeLogo.view'
import dragonfly from 'assets/photography/test.jpg'
import { lazy } from 'react'
import { Footer } from '../../components/Footer'
import { useHomeData } from './useHomeData'

const Home = lazy(() => import('./Home.view'))

export const items = [
  {
    title: 'This is my title and it is the best. Made longer for testing.',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    date: 'September 1, 2025',
    url: dragonfly,
  },
  {
    title: 'This is my title and it is the best',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting.',
    date: 'September 1, 2025',
    url: dragonfly,
  },
  {
    title: 'This is my title and it is the best. Made longer for testing.',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    date: 'September 1, 2025',
    url: dragonfly,
  },
  {
    title: 'This is my title and it is the best. Made longer for testing.',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    date: 'September 1, 2025',
    url: dragonfly,
  },
  {
    title: 'This is my title and it is the best. Made longer for testing.',
    description:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    date: 'September 1, 2025',
    url: dragonfly,
  },
]
export const config = {
  context: { usePageProviderHook: useHomeData },
  main: {
    Component: Main,
    ViewComponent: Home,
    renderPriority: 1,
  },
  effects: {
    renderPriority: 2,
    Component: Effects,
  },

  menu: {
    Component: HomeSettings,
  },
  loader: {
    centerLayout: true,
    scrollDownTarget: (0.5 * 1) / items.length,
    scrollUpTarget: 1 - (0.5 * 1) / items.length,
    startTitle: 'Izzy Erlich',
    endTitle: 'Izzy Erlich',
    startDescription: 'software and stuff.',
    endDescription: 'La fin.',
    showName: false,
    clickNavigation: false,
  },
  data: {
    constants: {
      focusFactor: 0.46,
    },
    markupIds: {
      scrollContainerId: 'home-scroll-container',
      itemDescription: 'home-item-description',
      loaderVideo: 'home-loader-video',
    },
    content: {
      items,
    },
  },

  scroll: {
    scrollControlsProps: {
      pages: items.length,
      enabled: true,
      damping: 0,
      distance: 2,
    },
  },
  nav: {
    logoRenderPriority: 3,
    LogoComponent: HomeLogo,
  },
  footer: {
    FooterComponent: Footer,
  },
  theme: {
    requiredFooterHeight: ({ width, height }, theme) => {
      let value
      if (width > 600) {
        if (height > 1800) {
          value = 10 * theme.lengths.topBottomPadding
        } else if (height > 1300) {
          value = 6 * theme.lengths.topBottomPadding
        } else if (height > 800) {
          value = 4 * theme.lengths.topBottomPadding
        } else {
          value = 2 * theme.lengths.topBottomPadding
        }
      } else {
        value = 2 * theme.lengths.topBottomPadding
      }

      return value + theme.lengths.atomicPadding * 2 // add scroll container height
    },
    modelsLayoutBreakpoint: 600,
    backgroundHeightProportion: () => {
      return 0.6
    },
    backgroundHeightProportionCss: () => {
      return `60vh`
    },
    backgroundZ0: -80,
    scrollContainerHeight: (size, { lengths: { atomicPadding } }) => {
      return atomicPadding
    },
  },
}
