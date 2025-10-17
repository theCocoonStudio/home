import { BrowserRouter, Route, Routes } from 'react-router'
import { SubRouter } from './SubRouter'
import { ErrorBoundary } from 'website/components/ErrorBoundary'

export const Router = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<SubRouter />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
