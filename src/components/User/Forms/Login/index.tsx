import type { FC, FormEventHandler, HTMLAttributes } from "react"

import { Input, Button } from "../../../Form"
import withStyles from "../withStyles"

export interface LoginBaseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  onSubmit?: FormEventHandler<HTMLFormElement>
}

const LoginBase: FC<LoginBaseProps> = ({ onSubmit, ...props }) => (
  <section {...props}>
    <form onSubmit={onSubmit}>
      <Input fullWidth placeholder="Email" />
      <Input fullWidth placeholder="Password" type="password" />
      <Button variant="secondary" type="reset">
        Cancel
      </Button>
      <Button type="submit">Login</Button>
    </form>
  </section>
)

const Login = withStyles(LoginBase)

export default Login
