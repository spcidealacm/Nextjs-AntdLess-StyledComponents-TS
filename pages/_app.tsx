import { ThemeProvider } from 'styled-components'
import { useState, useCallback } from 'react';
import type { AppProps } from 'next/app'
import { GlobalStyle, theme_light, theme_dark } from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(theme_light);
  const changeTheme = useCallback(() => {
    setTheme(theme.name === theme_light.name ? theme_dark : theme_light)
  }, [theme.name])

  return (
    <>
      <ThemeProvider theme={{ ...theme, changeTheme }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
