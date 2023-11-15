import { type SerializedStyles, css } from "@emotion/react"
import type { FC, ReactNode } from "react"

const scrollEffect = css`
  height: inherit;
  width: inherit;
  overflow: auto;
`

interface ScrollableProps {
  children: (css: SerializedStyles) => ReactNode
}

const Scrollable: FC<ScrollableProps> = ({ children }) => children(scrollEffect)

export default Scrollable
