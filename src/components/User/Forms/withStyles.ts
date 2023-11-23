import type { ComponentType } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Button, Input } from "../../Form"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const withStyles = <P>(c: ComponentType<P>) =>
  styled(c)(
    ({ theme: { spacing } }) => css`
      & ${Input} {
        margin-bottom: ${spacing.small};
      }
      & ${Button}:last-of-type {
        margin-left: ${spacing.small};
      }
    `,
  )

export default withStyles
