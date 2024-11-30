import { forwardRef } from 'react'
import { AppIcon } from 'web/components/AppIcons/AppIcon'
import CategoryFilled from '@tabler/icons-react/dist/esm/icons/IconCategoryFilled'
import Category from '@tabler/icons-react/dist/esm/icons/IconCategory'
import Info from '@tabler/icons-react/dist/esm/icons/IconMailFilled'
import Services from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake'
import Blog from '@tabler/icons-react/dist/esm/icons/IconArticle'
import Vision from '@tabler/icons-react/dist/esm/icons/IconEye'
import styles from 'web/styles/Nav.module.css'

export const Nav = forwardRef(function Nav({ ...props }, forwardRef) {
  return (
    <div {...props} className={`${styles.nav}`}>
      <div className={`${styles.navContent} content`} ref={forwardRef}>
        <div className={`${styles.navLogo}`}>izzyerlich.com</div>
        <div className={`${styles.navItems}`}>
          <div className={`${styles.active}`}>
            <AppIcon name='showcase' />
          </div>
          <div className={`${styles.starred}`}>
            <div className={`${styles.borderLeft}`} />
            <div className={`${styles.borderRight}`} />
            <div>
              <AppIcon name='vision'>
                <Vision stroke={2} size={'60%'} />
              </AppIcon>
            </div>
            <div>
              <AppIcon name='services'>
                <Services stroke={2} size={'60%'} />
              </AppIcon>
            </div>
            <div>
              <AppIcon name='contact'>
                <Info stroke={2} size={'60%'} />
              </AppIcon>
            </div>
            <div>
              <AppIcon name='blog'>
                <Blog stroke={2} size={'60%'} />
              </AppIcon>
            </div>
          </div>
          <div className={`${styles.apps}`}>
            <Category size='120%' className={`${styles.svg}`} />
            <CategoryFilled size='120%' className={`${styles.svgFilled}`} />
            <div className={`${styles.label}`}>apps</div>
          </div>
        </div>
      </div>
    </div>
  )
})
