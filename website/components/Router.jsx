import { BrowserRouter, Route, Routes } from 'react-router'
import { SubRouter } from './SubRouter'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<SubRouter />} />
      </Routes>
    </BrowserRouter>
  )
}
