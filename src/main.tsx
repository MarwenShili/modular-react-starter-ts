import AuthProvider from './modules/auth/context/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { store, persistor } from './modules/shared/store'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app/App'
import React from 'react'
import './app/index.scss'
import './i18n'
import ModalsProvider from './modules/shared/components/ModalProvider/Index'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthProvider>
          <ModalsProvider />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </HelmetProvider>,
)
