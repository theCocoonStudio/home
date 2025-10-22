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
    Component: function ArticleMenu() {
      return null
    },
  },
  loader: {
    scrollDownTarget: 0.5,
    scrollUpTarget: 0.5,
    startTitle: 'This is my title and it is the best. Made longer for testing.',
    startDescription:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    endTitle: 'This is my title and it is the best. Made longer for testing.',
    endDescription:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
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
