import { forwardRef } from 'react'

export const Footer = forwardRef(function Footer({ ...props }, forwardRef) {
  return (
    <div ref={forwardRef} {...props}>
      <div className='content'></div>
    </div>
  )
})
