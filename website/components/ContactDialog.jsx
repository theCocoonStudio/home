import { Dialog } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

export const ContactDialog = ({
  contactOpen,
  setContactOpen,
  atStartOrFinish,
}) => {
  // copied state
  const [copied, setCopied] = useState(false)

  // copy callback
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText('izzy@thecooon.studio')
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 6000)
    } catch (error) {
      console.error('caught error copying text programmatically')
    }
  }, [])

  // close contact callback
  const closeContact = useCallback(() => {
    setContactOpen(false)
  }, [setContactOpen])

  // set copied false on contact close
  useEffect(() => {
    if (!contactOpen) {
      setCopied(false)
    }
  }, [contactOpen])

  // close contact on atStartOrFinish.either
  useEffect(() => {
    if (atStartOrFinish.either) {
      closeContact()
    }
  }, [atStartOrFinish.either, closeContact])

  return (
    <Dialog open={contactOpen} onClose={closeContact}>
      <div className={'changa-one-regular contact-dialog'}>
        <h1>Send me an email!</h1>
        <p className={'raleway contact-email'}>
          <span>izzy@thecocoon.studio</span>
          <span onClick={copy}>
            <span>{copied ? 'copied' : 'copy'}</span>
          </span>
        </p>
      </div>
    </Dialog>
  )
}
