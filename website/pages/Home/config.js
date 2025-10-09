import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { HomeProvider } from './HomeProvider'
import { HomeSettings } from '../../components/HomeSettings'
import { HomeLogo } from '../../components/HomeLogo.view'
import { ScrollContainer } from '../../components/ScrollContainer'
import dragonfly from 'assets/photography/test.jpg'

const items = [
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

  menu: {
    Component: HomeSettings,
  },
  loader: {
    showLoader: true,
    scrollDownTarget: (0.5 * 1) / items.length,
    scrollUpTarget: 1 - (0.5 * 1) / items.length,
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
    FooterComponent: ScrollContainer,
  },
  theme: {
    itemDescriptionBottom: ({ width, height }, theme) => {
      let value
      if (width > 600) {
        if (height > 1800) {
          value = 10 * theme.lengths.topBottomPadding
        } else if (height > 1300) {
          value = 6 * theme.lengths.topBottomPadding
        } else if (height > 800) {
          value = 4 * theme.lengths.topBottomPadding
        } else if (height > 400) {
          value = 2 * theme.lengths.topBottomPadding
        } else {
          value = theme.lengths.topBottomPadding
        }
      } else {
        value = 2 * theme.lengths.topBottomPadding
        if (height <= 500) {
          value = theme.lengths.topBottomPadding
        }
      }

      return value
    },
    modelsLayoutBreakpoint: 600,
    backgroundHeightProportion: () => {
      return 0.6
    },
    backgroundHeightProportionCss: () => {
      return `60vh`
    },
    backgroundZ0: -80,
    scrollContainerHeight: (size, { lengths: { topBottomPadding } }) => {
      return topBottomPadding / 2
    },
  },
}
