import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import React from 'react'
import './app/index.scss'
import './i18n'
import Providers from './providers'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Providers>
          <App />
        </Providers>
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>,
)

serviceWorkerRegistration.register()
