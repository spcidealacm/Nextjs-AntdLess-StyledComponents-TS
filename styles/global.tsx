import { createGlobalStyle } from 'styled-components'

export const colors = {
  light_grey: '#888',
  black: '#000',
  white: '#fff',
  theme_color: [
    '#ffa940',
    '#fffbe6',
  ],
}

export const theme_light = {
  name: "light",
  background: colors.white,
  border: colors.light_grey,
  fontcolor: colors.black,
  theme_color: colors.theme_color
}

export type Theme_Color_Type = typeof theme_light

export const theme_dark: Theme_Color_Type = {
  name: "dark",
  background: colors.black,
  border: colors.light_grey,
  fontcolor: colors.white,
  theme_color: colors.theme_color,
}

export const GlobalStyle = createGlobalStyle<{ theme: Theme_Color_Type }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${({ theme }) => theme.background}
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
    -webkit-user-drag: none;
  }
`