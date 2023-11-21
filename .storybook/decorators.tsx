import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import type { Decorator } from '@storybook/react'

import theme from '@/theme'
import globalStyles from '@/globalStyles'

export const withThemeProvider: Decorator = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

export const withGlobalStyles: Decorator = (Story, context) => (
  <>
    <Global styles={globalStyles} />
    <Story {...context} />
  </>
)
