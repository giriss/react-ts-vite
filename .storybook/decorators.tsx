import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../src/theme'

export const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)
