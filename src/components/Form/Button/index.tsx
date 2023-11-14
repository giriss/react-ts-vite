import styled from "@emotion/styled"

interface ButtonProps {
  /**
   * Is it a primary or secondary `Button`?
   */
  variant?: "primary" | "secondary"
}

/**
 * Primary UI component for user interaction
 */
const Button = styled.button<ButtonProps>(
  ({
    theme: {
      colors: { primary, secondary },
    },
    variant = "primary",
  }) => ({
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
    border: `solid 1px ${(variant === "primary" ? primary : secondary)[100]}`,
    backgroundColor: (variant === "primary" ? primary : secondary)[200],
    color: variant === "primary" ? "white" : undefined,
    ":hover": {
      boxShadow: `0 0 10px ${
        (variant === "primary" ? primary : secondary)[100]
      }`,
    },
    ":active": {
      backgroundColor: (variant === "primary" ? primary : secondary)[300],
    },
  }),
)

Button.displayName = "Button"

Button.defaultProps = { variant: "primary" }

export default Button
