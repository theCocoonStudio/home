import { forwardRef } from 'react'
import { AppIcon } from 'web/components/AppIcons/AppIcon'
import CategoryFilled from '@tabler/icons-react/dist/esm/icons/IconCategoryFilled'
import Category from '@tabler/icons-react/dist/esm/icons/IconCategory'
import Info from '@tabler/icons-react/dist/esm/icons/IconMail'
import Services from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake'
import Blog from '@tabler/icons-react/dist/esm/icons/IconArticle'
import Vision from '@tabler/icons-react/dist/esm/icons/IconEye'
import styles from 'web/styles/Nav.module.css'
import { ButtonGroup } from 'web/components/ButtonGroup'

export const Nav = forwardRef(function Nav({ ...props }, forwardRef) {
  return (
    <div {...props} className={`${styles.nav}`}>
      <div className={`${styles.navContent} content`} ref={forwardRef}>
        <div className={`${styles.navLogo}`}>izzyerlich.com / showcase</div>
        <div className={`${styles.navItems}`}>
          <ButtonGroup
            /* bottomLabels={false} */
            name='favourites'
            labels={['vision', 'services', 'contact', 'blog']}
          >
            <Vision stroke={2} size={'100%'} />
            <Services stroke={2} size={'100%'} />
            <Info stroke={2} size={'100%'} />
            <Blog stroke={2} size={'100%'} />
          </ButtonGroup>
          <div className={`${styles.border}`} />
          <ButtonGroup name='apps' /* bottomLabels={false} */>
            <div className={`${styles.apps}`}>
              <Category size='100%' className={`${styles.svg}`} />
              <CategoryFilled size='100%' className={`${styles.svgFilled}`} />
            </div>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
})
