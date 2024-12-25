import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from 'web/pages/Layout'
import { ContextProvider } from './context/ContextProvider'

import './styles/index.css'

const theme = {
  charcoal: '#273B4E', // blue
  purple: '#2B253A',
  gunmetal: '#122629', // dark green
  midnight: '#103334', // intermediate green
  slate: '#134643', // green (success)
  white: '#ffffff',
  black: '#101010',
  grey: '#202020',
  red: '#330000', // errors
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider theme={theme}>
      <Layout />
    </ContextProvider>
  </React.StrictMode>,
)
