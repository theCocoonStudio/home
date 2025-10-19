import { config as homeConfig } from './Home/config'
import { articleConfig } from './Home/article'

const config = {
  home: { ...homeConfig },
  article: { ...articleConfig },
}

export default config
