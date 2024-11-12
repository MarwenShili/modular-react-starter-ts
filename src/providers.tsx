'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import ModalsProvider from './modules/shared/components/ModalProvider/Index'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './modules/shared/store'
import { Provider } from 'react-redux'
import AuthProvider from './modules/auth/context/AuthProvider'

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: 'always', // Refetch on mount
            refetchOnWindowFocus: false, // Disable refetching on window focus
            refetchOnReconnect: true, // When network connectivity is restored,
            // refetchInterval: 10000, // Disable polling
          },
        },
      }),
  )

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </AuthProvider>
        <ModalsProvider />
      </PersistGate>
    </Provider>
  )
}
