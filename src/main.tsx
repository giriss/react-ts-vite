import React from "react"
import ReactDOM from "react-dom/client"
import { Global, ThemeProvider, css } from "@emotion/react"
import App from "@/App"
import theme from "@/theme"

const globalCss = css`
  *:not(pre) {
    font-family: Roboto, sans-serif;
  }
  pre {
    font-family: "Roboto Mono", monospace;
  }
  body {
    padding: 0;
    margin: 0;
  }
`

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
