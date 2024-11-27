import { forwardRef } from 'react'
import { AppIcon } from 'web/components/AppIcons/AppIcon'
import CategoryFilled from '@tabler/icons-react/dist/esm/icons/IconCategoryFilled'
import Category from '@tabler/icons-react/dist/esm/icons/IconCategory'
import styles from 'web/styles/Nav.module.css'

export const Nav = forwardRef(function Nav({ ...props }, forwardRef) {
  return (
    <div {...props}>
      <div id='' className={`${styles.navContent} content`} ref={forwardRef}>
        <div className={`${styles.navLogo}`}>izzyerlich.com</div>
        <div className={`${styles.navItems}`}>
          <div className={`${styles.starred}`}>
            <div>
              <AppIcon name='showcase' />
            </div>
            <div>
              <AppIcon />
            </div>
            <div>
              <AppIcon />
            </div>
            <div>
              <AppIcon />
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
