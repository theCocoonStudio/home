import { usePage } from 'website/pages/Home/usePage'

export const useSettings = () => {
  const { settings } = usePage()

  return settings
}
