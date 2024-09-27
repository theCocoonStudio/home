import { useFrame } from '@react-three/fiber'
import { useContext } from 'react'
import { PageContext } from 'web/context/PageContext'

export const usePage = () => {
  const { pageUp, pageDown, page, isPending } = useContext(PageContext)

  return { pageUp, pageDown, page, isPending }
}
