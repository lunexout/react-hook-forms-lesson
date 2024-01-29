// @ts-nocheck
import React, { useState } from 'react'
import HomePage from './pages/home'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './global/theme'

export default function App() {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark')

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <HomePage />
      <button onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label='Light mode' role='img'>
            🌞
          </span>
        ) : (
          <span aria-label='Dark mode' role='img'>
            🌜
          </span>
        )}
      </button>
    </ThemeProvider>
  )
}
