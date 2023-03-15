import store from '@/store'
import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </Provider>
  )
}
