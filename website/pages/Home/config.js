import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { NavItems } from './NavItems'
import { FooterItems } from './FooterItems'
import { ScrollEventDispatcher } from './ScrollEventDispatcher.view'
import { ScrollEventProvider } from './ScrollEventProvider'
import dragonfly from 'assets/photography/test.jpg'
import dragonfly2 from 'assets/photography/test2.jpg'
import dragonfly3 from 'assets/photography/test3.jpg'
import dragonfly4 from 'assets/photography/test4.jpg'
import dragonfly5 from 'assets/photography/test5.jpg'

const ranges = {
  preScroll: [0.0, 0.00001] /* 0.00001 = default ScrollControls eps */,
  items: [0.00001, 1.0 - 0.00001 * 2],
  postScroll: [1.0 - 0.00001, 0.000001],
}
const sections = {
  software: {
    description: 'Select portfolio items, demos, tools, and more.',
    items: [
      {
        title: 'This is my title and it is the best.',
        date: 'May 20, 2025',
        description:
          'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 21, 2025',
        description:
          'In this paragraph I try to fill some space. Lorem ipsum type shit. Etc.',
        tags: ['software'],
      },

      {
        title: 'This is my title and it is the best.',
        date: 'May 22, 2025',
        description:
          'In this paragraph I try to fill some space. Lorem ipsum type shit. Etc.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 23, 2025',
        description:
          'In this paragraph I try to fill some space. Lorem ipsum type shit. Etc.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 24, 2025',
        description:
          'In this paragraph I try to fill some space. Lorem ipsum type shit. Etc.',
        tags: ['software'],
      },
      {
        title: 'This is my title and it is the best.',
        date: 'May 25, 2025',
        description:
          'In this paragraph I try to fill some space. Lorem ipsum type shit. Etc.',
        tags: ['software'],
      },
    ],
  },
  photography: {
    description: 'Select photos taken with a variety of hardware.',
    items: [
      { url: dragonfly },
      { url: dragonfly2 },
      { url: dragonfly3 },
      { url: dragonfly4 },
      { url: dragonfly5 },
      { url: dragonfly },
      { url: dragonfly },
      { url: dragonfly },
      { url: dragonfly },
      { url: dragonfly },
      { url: dragonfly },
      { url: dragonfly },
    ],
  },
  music: { description: 'Select items.', items: [{}, {}, {}] },
  blog: { description: 'Life', items: [{}, {}, {}, {}] },
}
export const config = {
  context: { Provider: ScrollEventProvider },
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
    },
  },
  style: { itemSizePx: 400, titleHeight: 149, focusFactor: 0.46 },
  content: {
    get itemCount() {
      return Object.keys(sections).reduce(
        (accumulator, currentValue) =>
          accumulator + sections[currentValue].items.length,
        0,
      )
    },
    get sections() {
      let count = 0
      const itemRange = ranges.items[1] / this.itemCount
      const data = {}
      Object.keys(sections).forEach((sectionName) => {
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
      pages: 15,
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
  },
  footer: {
    FooterItemsComponent: FooterItems,
    markupIds: {
      scrollContainer: 'scroll-container',
      fpsContainer: 'fps-container',
    },
  },
}
