import { ScrollEventProvider } from './ScrollEventProvider'
import { SettingsProvider } from './SettingsProvider'
import { TargetItemProvider } from './TargetItemProvider'

export const HomeProvider = ({ children, config }) => (
  <ScrollEventProvider config={config}>
    <TargetItemProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </TargetItemProvider>
  </ScrollEventProvider>
)
