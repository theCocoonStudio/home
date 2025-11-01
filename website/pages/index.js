import { config as homeConfig } from './Home/config'
import { articleConfig } from './Home/article'

const config = {
  home: { ...homeConfig },
  article: { ...articleConfig },
  test: { ...articleConfig },
}

export default config
