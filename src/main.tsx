import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import React from 'react'
import './app/index.scss'
import './i18n'
import Providers from './providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <Providers>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Providers>
    </React.StrictMode>
  </HelmetProvider>,
)
