import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'

import { Toaster } from 'sonner'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster theme="dark" richColors />
  </React.StrictMode>,
)
