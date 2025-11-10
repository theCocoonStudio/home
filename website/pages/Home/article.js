import { lazy } from 'react'
import { useArticleData } from 'website/hooks/useArticleData'
import { ArticleSettings } from '../../components/ArticleSettings'
import { ArticleScrollMarkup } from 'website/pages/Home/ArticleScrollMarkup'
import { ArticleFixedMarkup } from './ArticleFixedMarkup'
import { items } from './config'

const Article = lazy(() => import('../../components/Article.view'))

export const articleConfig = {
  ...items[0],
  context: { usePageProviderHook: useArticleData },
  main: {
    Component: ArticleFixedMarkup,
    ScrollComponent: ArticleScrollMarkup,
    ViewComponent: Article,
    renderPriority: 1,
  },
  /*  effects: {
    renderPriority: 2,
    Component: Effects,
  }, */

  menu: {
    Component: ArticleSettings,
  },
  loader: {
    scrollDownTarget: 0.5,
    scrollUpTarget: 0.5,
    titles: false,
  },
  data: {
    markupIds: {
      loaderVideo: 'global-loader-video',
      loaderProgress: 'global-loader-progress',
    },
  },
  scroll: {
    scrollControlsProps: {
      useScrollMarkupHeight: true,
      pages: 2,
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
  theme: { requiredFooterHeight: 30 },
}
