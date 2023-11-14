import styled from "@emotion/styled"
import type { Property } from "csstype"

interface ColumnProps {
  flex?: Property.Flex
}

const Column = styled.div<ColumnProps>(({ flex }) => ({ flex }))

Column.defaultProps = { flex: 1 }

export default Column
