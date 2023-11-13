import type { ButtonHTMLAttributes } from "react"
import styled from "@emotion/styled"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is it a primary or secondary `Button`?
   */
  variant?: "primary" | "secondary"
}

/**
 * Primary UI component for user interaction
 */
const Button = styled.button<ButtonProps>(({ variant = "primary" }) => ({
  padding: "5px 10px",
  borderRadius: "3px",
  cursor: "pointer",
  border: `solid 1px ${variant === "primary" ? "#00a1ba" : "#bbb"}`,
  backgroundColor: variant === "primary" ? "#02afc9" : "#ccc",
  color: variant === "primary" ? "white" : undefined,
  ":hover": {
    boxShadow: `0 0 10px ${variant === "primary" ? "#00a1ba" : "#bbb"}`,
  },
  ":active": {
    backgroundColor: variant === "primary" ? "#02c1de" : "#ddd",
  },
}))

Button.displayName = "Button"

Button.defaultProps = {
  variant: "primary",
}

export default Button
