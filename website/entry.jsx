import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider'
import { Layout } from './components/Layout'
import { ResizeEventProvider } from 'src/context/ResizeEventProvider'

import './styles/entry.css'

const theme = {
  colors: {
    charcoal: '#273B4E', // blue
    purple: '#2B253A',
    gunmetal: '#122629', // dark green
    midnight: '#103334', // intermediate green
    slate: '#134643', // green (success)
    white: '#ffffff',
    black: '#101010',
    grey: '#202020',
    red: '#330000', // errors
    charcoalTint: '#3D4F60',
  },
  lengths: {
    navHeight: '100px',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResizeEventProvider>
        <Layout />
      </ResizeEventProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
