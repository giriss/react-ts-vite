import { useCallback, type FC, type FormEventHandler } from "react"
import styled from "@emotion/styled"

import { Forms } from "@@/User"

interface AuthBaseProps {
  className?: string
}

const AuthBase: FC<AuthBaseProps> = ({ className }) => {
  const register: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault()
  }, [])
  const login: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault()
  }, [])

  return (
    <main className={className}>
      <Forms.Register onSubmit={register} />
      <Forms.Login onSubmit={login} />
    </main>
  )
}

const Auth = styled(AuthBase)`
  display: flex;
  width: 1080px;
  margin: ${({ theme: { spacing } }) => spacing.medium} auto 0;
  text-align: right;

  & > :is(${Forms.Register}, ${Forms.Login}) {
    padding: ${({ theme: { spacing } }) => spacing.small};
    flex: 1;
  }
`

export default Auth
