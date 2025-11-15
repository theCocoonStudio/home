import styles from 'website/pages/Home/Article.styles.module.css'
import { ArticleLoaderTitle } from '../../components/ArticleLoaderTitle'

export const ArticleFixedMarkup = ({
  config,
  /* atStartOrFinish, */
  threeTunnel,
}) => {
  return (
    <div className={styles.fixedContainer}>
      <ArticleLoaderTitle config={config} threeTunnel={threeTunnel} />
    </div>
  )
}
