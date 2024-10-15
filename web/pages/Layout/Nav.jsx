import { forwardRef } from 'react'

export const Nav = forwardRef(function Nav({ ...props }, forwardRef) {
  return (
    <div {...props}>
      <div id='navContent' className='content' ref={forwardRef}>
        <div>izzyerlich.com</div>
        <div id='navItems'>
          <div>vision</div>
          <div>portfolio</div>
          <div>desiderata</div>
        </div>
      </div>
    </div>
  )
})
