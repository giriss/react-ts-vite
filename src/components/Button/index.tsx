import type { ButtonHTMLAttributes, FC } from "react"
import clsx from "clsx"
import classes from "./index.module.sass"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button: FC<ButtonProps> = ({
  className,
  variant = "primary",
  ...props
}) => (
  <button
    className={clsx(classes.common, classes[variant], className)}
    {...props}
  />
)

export default Button
