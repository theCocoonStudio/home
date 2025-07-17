import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from 'website/components/Layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}
