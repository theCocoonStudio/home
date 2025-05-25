import { Effects } from './Effects.canvas'
import { Home } from './Home.view'
import { Main } from './Main'
import { NavItems } from './NavItems'
import { FooterItems } from './FooterItems'
import { ScrollEventDispatcher } from './ScrollEventDispatcher.view'
import { ScrollEventProvider } from './ScrollEventProvider'

const ranges = {
  preScroll: [0.0, 0.00001] /* 0.00001 = default ScrollControls eps */,
  software: [0.00001, 0.25 - 0.000001],
  photography: [0.25, 0.25 - 0.000001],
  music: [0.5, 0.25 - 0.000001],
  blog: [0.75, 0.25 - 0.000001],
}
const items = {
  _software: [
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
  _photography: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  _music: [{}, {}, {}],
  _blog: [{}, {}, {}, {}],
}
export const config = {
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
    },
  },
  sections: {
    software: {
      description: 'Select portfolio items, demos, tools, and more.',
    },
    photography: {
      description: 'Select photos taken with a variety of hardware.',
    },
    music: { description: 'Select items.' },
    blog: { description: 'Life' },
  },
  style: { itemSizePx: 400, titleHeight: 180 },
  items: {
    focusFactor: 0.46,
    get count() {
      return (
        items._software.length +
        items._photography.length +
        items._music.length +
        items._blog.length
      )
    },
    get software() {
      return items._software.map(({ ...data }, index) => {
        const range = ranges.software
        return {
          ...data,
          range: [
            range[0] + index * (range[1] / items._software.length),
            range[1] / items._software.length,
          ],
          index,
        }
      })
    },
    get photography() {
      const range = ranges.photography
      return items._photography.map(({ ...data }, index) => {
        return {
          ...data,
          range: [
            range[0] + index * (range[1] / items._photography.length),
            range[1] / items._photography.length,
          ],
          index: items._software.length + index,
        }
      })
    },
    get music() {
      const range = ranges.music
      return items._music.map(({ ...data }, index) => {
        return {
          ...data,
          range: [
            range[0] + index * (range[1] / items._music.length),
            range[1] / items._music.length,
          ],
          index: items._software.length + items._photography.length + index,
        }
      })
    },
    get blog() {
      const range = ranges.blog
      return items._blog.map(({ ...data }, index) => {
        return {
          ...data,
          range: [
            range[0] + index * (range[1] / items._blog.length),
            range[1] / items._blog.length,
          ],
          index:
            items._software.length +
            items._photography.length +
            items._music.length +
            index,
        }
      })
    },
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
