import { type InputHTMLAttributes, forwardRef } from "react"
import clsx from "clsx"
import classes from "./index.module.sass"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary"
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(classes.common, classes[variant], className)}
      {...props}
    />
  ),
)

Input.displayName = "Input"

export default Input
