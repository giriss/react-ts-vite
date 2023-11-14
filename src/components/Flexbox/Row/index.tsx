import styled from "@emotion/styled"
import type { Property } from "csstype"

interface RowProps {
  justifyContent?: Property.JustifyContent
}

const Row = styled.div<RowProps>(({ justifyContent }) => ({
  justifyContent,
  display: "flex",
}))

export default Row
