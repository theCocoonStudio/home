import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { NavItems } from './NavItems'
import { FooterItems } from './FooterItems'
import { ScrollEventDispatcher } from './ScrollEventDispatcher.view'
import { HomeProvider } from './HomeProvider'
import dragonfly from 'assets/photography/test.jpg'
import dragonfly2 from 'assets/photography/test2.jpg'
import dragonfly3 from 'assets/photography/test3.jpg'
import dragonfly4 from 'assets/photography/test4.jpg'
import dragonfly5 from 'assets/photography/test5.jpg'
import { Gallery } from '../../components/Gallery'
import { HomeSettings } from '../../components/HomeSettings'
import { HomeLogo } from '../../components/HomeLogo.view'
import { Vector3 } from 'three'

const ranges = {
  preScroll: [0.0, 0.00001] /* 0.00001 = default ScrollControls eps */,
  items: [0.00001, 1.0 - 0.00001 * 2],
  postScroll: [1.0 - 0.00001, 0.000001],
}
const sections = {
  software: {
    enabled: true,
    description: 'Select portfolio items, demos, tools, and more.',
    items: [
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 21, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting.',
        tags: ['software'],
      },

      {
        title: 'This is my title and it is the best.',
        date: 'May 22, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 23, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 24, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 25, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
    ],
  },
  photography: {
    enabled: true,
    description: 'Select photos taken with a variety of hardware.',
    items: [
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 1',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 2',
        url: dragonfly2,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 3',
        url: dragonfly3,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 4',
        url: dragonfly4,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 5',
        url: dragonfly5,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 6',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 7',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 8',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 9',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 10',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 11',
        url: dragonfly,
      },
      {
        description:
          'Sony a7Riv + Sony FE 90mm f/2.8G OSS Macro Len + lighting 12',
        url: dragonfly,
      },
    ],
  },
  music: { enabled: false, description: 'Select items.', items: [{}, {}, {}] },
  blog: {
    enabled: true,
    description: 'Life',
    items: [
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        tags: ['software'],
      },
    ],
  },
}
export const config = {
  context: { Provider: HomeProvider },
  main: {
    Component: Main,
    ViewComponent: Home,
    renderPriority: 1,
    EventDispatcherComponent: ScrollEventDispatcher,
    markupIds: {
      title: 'main-title-container',
      subtitle: 'main-subtitle-container',
      description: 'main-description-container',
      itemDescription: 'main-item-description-container',
      photographyButton: 'main-photography-button-container',
      animationTargetInitial: 'main-animation-target-initial',
      animationTargetIntermediate: 'main-animation-target-intermediate',
      animationTargetFocus: 'main-animation-target-focus',
      dummySubtitle: 'dummy-subtitle',
      dummyDescription: 'dummy-description',
    },
  },
  style: {
    titleHeight: 157,
    focusFactor: 0.46,
    animation: {
      default: {
        initialDepth: 0.05,
        targetDepth: 0.0005,
        itemZpos: 0.1,
        initialMarkupId: 'main-animation-target-initial',
        intermediateMarkupId: 'main-animation-target-intermediate',
        focusMarkupId: 'main-animation-target-focus',
        getItemDataFromBounds: (
          { min, max, viewportSize, ppwu },
          { itemZpos, depth, geometryDepth },
        ) => {
          const minX = Math.min(max.x - min.x, viewportSize.x * 0.3819660112) // golden ratio
          const minY = Math.min(
            max.y - min.y,
            viewportSize.y * (1 - 0.3819660112),
          ) // golden ratio
          const minDimension = Math.min(minX, minY)
          const scale = new Vector3(
            minDimension,
            minDimension,
            depth / geometryDepth,
          )
          const position = new Vector3(
            min.x + (max.x - min.x) / 2,
            min.y + (max.y - min.y) / 2,
            itemZpos - depth / 2,
          )
          return { scale, position, min, max, viewportSize, ppwu }
        },
        getTargetDataFromBounds: (
          { min, max, viewportSize, ppwu },
          { itemZpos, depth, geometryDepth },
        ) => {
          const scale = new Vector3(
            max.x - min.x,
            max.y - min.y,
            depth / geometryDepth,
          )
          const position = new Vector3(
            min.x + (max.x - min.x) / 2,
            min.y + (max.y - min.y) / 2,
            itemZpos - depth / 2,
          )
          return { scale, position, min, max, viewportSize, ppwu }
        },
      },
      photography: {
        initialDepth: 0.05,
        targetDepth: 0.0005,
        itemZpos: 0.1,
        initialMarkupId: 'main-title-container',
        intermediateMarkupId: 'main-subtitle-container',
        focusMarkupId: 'main-description-container',
        getItemDataFromBounds: () => {},
      },
    },
  },
  content: {
    get itemCount() {
      return Object.keys(sections).reduce(
        (accumulator, currentValue) =>
          accumulator +
          (sections[currentValue].enabled
            ? sections[currentValue].items.length
            : 0),
        0,
      )
    },
    get sections() {
      let count = 0
      const itemRange = ranges.items[1] / this.itemCount
      const data = {}
      Object.keys(sections)
        .filter((section) => sections[section].enabled)
        .forEach((sectionName) => {
          const items = sections[sectionName].items.map((item) => {
            const index = count++
            return {
              ...item,
              index,
              range: [ranges.items[0] + index * itemRange, itemRange],
            }
          })
          data[sectionName] = {
            ...sections[sectionName],
            items,
            range: [items[0].range[0], items.length * itemRange],
          }
        })
      return data
    },
  },
  scroll: {
    scrollControlsProps: {
      pages: 20,
      enabled: true,
      damping: 0,
      distance: 2,
    },
    ranges,
  },
  effects: {
    renderPriority: 2,
    Component: Effects,
  },
  nav: {
    logoRenderPriority: 3,
    NavItemsComponent: NavItems,
    LogoComponent: HomeLogo,
    initialLogoColor: '#111',
  },
  footer: {
    FooterItemsComponent: FooterItems,
    markupIds: {
      scrollContainer: 'scroll-container',
      fpsContainer: 'fps-container',
      progressContainer: 'progress-status',
    },
  },
  lightbox: {
    Component: Gallery,
  },
  menu: {
    Component: HomeSettings,
  },
}
