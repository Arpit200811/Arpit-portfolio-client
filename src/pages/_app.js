// src/pages/_app.js
import ThemeContextProvider from '../contexts/ThemeContext'
import '../index.css'
import '../App.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
