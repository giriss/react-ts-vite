import { type InputHTMLAttributes } from "react"
import styled from "@emotion/styled"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary"
}

const Input = styled("input")<InputProps>`
  outline: none;
  padding: 5px 10px;
  border-radius: 3px;
  border: solid 1px rgb(200, 200, 200);
  min-width: 300px;
  border: solid 1px rgb(200, 200, 200);

  :focus {
    border-color: ${({ variant }) =>
      variant === "primary" ? "rgb(35, 149, 219)" : "rgb(100, 100, 100)"};
    ${({ variant }) =>
      variant === "primary" && "box-shadow: 0 0 10px rgb(41, 158, 230);"}
  }
`

Input.displayName = "Input"

Input.defaultProps = {
  variant: "primary",
}

export default Input
