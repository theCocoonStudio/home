import { SettingsProvider } from './SettingsProvider'
import { TargetItemProvider } from './TargetItemProvider'

export const HomeProvider = ({ children, config }) => (
  <TargetItemProvider>
    <SettingsProvider config={config}>{children}</SettingsProvider>
  </TargetItemProvider>
)
