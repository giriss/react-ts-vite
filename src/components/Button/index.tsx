import type { ButtonHTMLAttributes, FC } from "react"
import clsx from "clsx"
import classes from "./index.module.sass"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is it a primary or secondary `Button`?
   */
  variant?: "primary" | "secondary"
}

/**
 * Primary UI component for user interaction
 */
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
