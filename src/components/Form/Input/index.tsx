import styled from "@emotion/styled"

interface InputProps {
  variant?: "primary" | "secondary"
}

const Input = styled("input")<InputProps>`
  outline: none;
  padding: ${({ theme: { spacing } }) => `${spacing.small}`};
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.secondary[300]};

  :focus {
    border-color: ${({
      variant,
      theme: {
        colors: { primary, secondary },
      },
    }) => (variant === "primary" ? primary : secondary)[100]};
    ${({
      variant,
      theme: {
        colors: { primary },
      },
    }) => variant === "primary" && `box-shadow: 0 0 10px ${primary[300]};`}
  }
`

Input.displayName = "Input"

Input.defaultProps = { variant: "primary" }

export default Input
