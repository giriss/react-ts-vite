import { type Theme, type SerializedStyles, css } from "@emotion/react"

const globalStyles = (_theme: Theme): SerializedStyles => css`
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

export default globalStyles
