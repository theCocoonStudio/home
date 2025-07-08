import { useContext } from 'react'
import { SettingsContext } from './SettingsContext'

export const useSettings = () => {
  const value = useContext(SettingsContext)

  return value
}
