import type { FC } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const TextContent = styled.span<{
  variant?: "primary" | "secondary"
}>(({ variant = "primary", theme: { colors, spacing, text } }) => ({
  padding: `${spacing.small} ${spacing.medium}`,
  backgroundColor: colors[variant][300],
  color: text.color[variant === "primary" ? "light" : "dark"],
  borderRadius: "10px",
  textAlign: variant === "primary" ? "right" : "left",
}))

TextContent.displayName = "TextContent"

interface MessageProps {
  children: string
  variant?: "primary" | "secondary"
}

const Message: FC<MessageProps> = ({ children, variant = "primary" }) => (
  <div
    css={({ spacing }) =>
      css({
        display: "flex",
        justifyContent: variant === "primary" ? "end" : "start",
        ":not(:first-of-type)": {
          marginTop: spacing.small,
        },
      })
    }
  >
    <TextContent
      variant={variant}
      css={({ spacing }) =>
        css({
          [variant === "primary" ? "marginLeft" : "marginRight"]:
            spacing.xLarge,
        })
      }
    >
      {children}
    </TextContent>
  </div>
)

export default Message
