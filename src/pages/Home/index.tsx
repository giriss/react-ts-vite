import { useMemo, type FC } from "react"
import { type SerializedStyles, css, useTheme } from "@emotion/react"
import { useAtomValue } from "jotai"

import Chat from "@@/Chat"
import User from "@@/User"
import { messagesAtom, usersAtom } from "@/atoms"

const useComponentStyle = (): SerializedStyles => {
  const {
    colors: { secondary },
  } = useTheme()

  return useMemo(
    () => css`
      height: 100vh;
      width: 720px;
      margin: 0 auto;
      box-shadow: 0 0 10px ${secondary[200]};
    `,
    [secondary],
  )
}

const Home: FC = () => {
  const componentStyle = useComponentStyle()
  const users = useAtomValue(usersAtom)
  const messages = useAtomValue(messagesAtom)

  return (
    <main css={css(componentStyle, { display: "flex" })}>
      <User.List
        items={users}
        css={({ colors: { secondary } }) => css`
          flex: 1;
          border-right: solid 1px ${secondary[100]};
        `}
      />
      <Chat.Box items={messages} css={css({ flex: 2 })} />
    </main>
  )
}

export default Home
