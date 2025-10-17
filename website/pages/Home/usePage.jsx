import { useContext } from 'react'
import { PageContext } from '../../context/PageContext'

export const usePage = () => {
  const value = useContext(PageContext)

  return value
}
