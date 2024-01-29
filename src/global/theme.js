import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`
export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  border: '#DEDEDE',
  errorColor: '#FF7979'
}
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  border: 'yellow',
  errorColor: 'green'
}
