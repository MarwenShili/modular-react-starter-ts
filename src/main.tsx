import AuthProvider from './modules/auth/context/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { store } from './modules/shared/store'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import React from 'react'
import './app/index.scss'
import './i18n'
import ModalsProvider from './modules/shared/components/ModalProvider/Index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
        <ModalsProvider />
      </Provider>
    </React.StrictMode>
  </HelmetProvider>,
)
