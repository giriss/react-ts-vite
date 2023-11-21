import type { Preview } from "@storybook/react"
import { withThemeProvider, withGlobalStyles } from "./decorators"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [withGlobalStyles, withThemeProvider]

export default preview
