import { PageContext } from '../../context/PageContext'

export const PageProvider = ({
  children,
  config: {
    context: { usePageProviderHook },
    ...rest
  },
}) => {
  const pageData = usePageProviderHook(rest)

  return (
    <PageContext.Provider value={pageData}>{children}</PageContext.Provider>
  )
}
