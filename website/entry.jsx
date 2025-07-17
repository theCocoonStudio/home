import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/entry.css'
import { Router } from 'website/components/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
