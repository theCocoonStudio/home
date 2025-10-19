import { HomeSettings } from '../../components/HomeSettings'
import { lazy } from 'react'
import { useArticleData } from 'website/hooks/useArticleData'

const Article = lazy(() => import('../../components/Article.view'))

export const articleConfig = {
  context: { usePageProviderHook: useArticleData },
  main: {
    Component: null,
    ViewComponent: Article,
    renderPriority: 1,
  },
  /*  effects: {
    renderPriority: 2,
    Component: Effects,
  }, */

  menu: {
    Component: HomeSettings,
  },
  loader: {
    scrollDownTarget: 0.5,
    scrollUpTarget: 0.5,
  },
  data: { markupIds: { loaderVideo: 'home-loader-video' } },
  scroll: {
    scrollControlsProps: {
      pages: 2,
      enabled: true,
      damping: 0,
      distance: 2,
    },
  },
  nav: {
    logoRenderPriority: 3,
    LogoComponent: function LogoWrapper({ children }) {
      return children
    },
  },
  footer: {
    FooterComponent: undefined,
  },
  theme: {},
}
