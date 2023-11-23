import type { FC } from "react"
import { css } from "@emotion/react"

import { Input, Button } from "../../../Form"
import type { LoginBaseProps } from "../Login"
import withStyles from "../withStyles"

const RegisterBase: FC<LoginBaseProps> = ({ onSubmit, ...props }) => (
  <section {...props}>
    <form onSubmit={onSubmit}>
      <Input fullWidth placeholder="Full name" />
      <Input fullWidth placeholder="Email" type="email" />
      <Input
        placeholder="Password"
        type="password"
        css={({ spacing: { small } }) => css`
          width: calc(50% - (${small} / 2));
          box-sizing: border-box;
          margin-right: ${small};
        `}
      />
      <Input
        placeholder="Retype password"
        type="password"
        css={({ spacing: { small } }) => css`
          width: calc(50% - (${small} / 2));
          box-sizing: border-box;
        `}
      />
      <Button variant="secondary" type="reset">
        Cancel
      </Button>
      <Button type="submit">Register</Button>
    </form>
  </section>
)

const Register = withStyles(RegisterBase)

export default Register
