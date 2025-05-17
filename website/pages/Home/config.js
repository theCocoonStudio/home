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
      pages: 15,
      enabled: true,
      damping: 0,
      distance: 2,
    },
    ranges: {
      preScroll: [0.0, 0.00001] /* 0.00001 = default ScrollControls eps */,
      software: [0.00001, 0.25 - 0.000001],
      photography: [0.25, 0.25 - 0.000001],
      music: [0.5, 0.25 - 0.000001],
      blog: [0.75, 0.25 - 0.000001],
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
  items: {
    _software: [{}, {}, {}, {}, {}, {}],
    _photography: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    _music: [{}, {}, {}],
    _blog: [{}, {}, {}, {}],
    get count() {
      return (
        this._software.length +
        this._photography.length +
        this._music.length +
        this._blog.length
      )
    },
    get software() {
      return this._software.map(({ ...data }, index) => {
        return { ...data, index }
      })
    },
    get photography() {
      return this._photography.map(({ ...data }, index) => {
        return { ...data, index: this._software.length + index }
      })
    },
    get music() {
      return this._music.map(({ ...data }, index) => {
        return {
          ...data,
          index: this._software.length + this._photography.length + index,
        }
      })
    },
    get blog() {
      return this._blog.map(({ ...data }, index) => {
        return {
          ...data,
          index:
            this._software.length +
            this._photography.length +
            this._music.length +
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
