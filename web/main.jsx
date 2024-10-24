import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from 'web/pages/Layout'
import { PageProvider } from './context/PageProvider'

import './styles/index.css'

const theme = {
  charcoal: '#273B4E', // blue
  purple: '#2B253A',
  gunmetal: '#122629', // dark green
  midnight: '#103334', // intermediate green
  slate: '#134643', // green
  white: '#ffffff',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>hello</div>}>
      <PageProvider theme={theme}>
        <Layout />
      </PageProvider>
    </Suspense>
  </React.StrictMode>,
)
