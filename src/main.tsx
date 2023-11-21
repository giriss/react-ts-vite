import React from "react"
import ReactDOM from "react-dom/client"
import { Global, ThemeProvider } from "@emotion/react"
import App from "@/App"
import theme from "@/theme"
import globalStyles from "./globalStyles"

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={theme => globalStyles(theme)} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
