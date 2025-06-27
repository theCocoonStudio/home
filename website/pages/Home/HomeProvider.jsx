import { ScrollEventProvider } from './ScrollEventProvider'
import { TargetItemProvider } from './TargetItemProvider'

export const HomeProvider = ({ children, config }) => (
  <ScrollEventProvider config={config}>
    <TargetItemProvider>{children}</TargetItemProvider>
  </ScrollEventProvider>
)
