import { RenderOptions, render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import theme from '@/theme'
import React from 'react'

export const renderWithTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

export * from '@testing-library/react'
