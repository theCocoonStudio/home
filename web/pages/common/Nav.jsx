import { View } from '@react-three/drei'
import { forwardRef } from 'react'

export const Nav = forwardRef(function Nav({ ...props }, forwardRef) {
  return (
    <div ref={forwardRef} {...props}>
      {/* <View className='scene'>
        <color attach={'background'} args={['#050505']} />
      </View> */}
      <div id='navContent' className='content'>
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
