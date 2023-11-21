import { css, useTheme } from "@emotion/react"
import { useRef, useEffect, type FC, type HTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import { Styles } from "@/utils"
import type { Message } from "@/types"
import Form from "../../Form"
import MessageContainer from "../MessageContainer"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  items: Message[]
}

const Box: FC<BoxProps> = ({ items, ...props }) => {
  const messageContainerRef = useRef<HTMLDivElement>(null)
  const scrollableStyle = Styles.useScrollable()
  const { spacing } = useTheme()

  useEffect(() => {
    if (messageContainerRef.current) {
      const messageContainer = messageContainerRef.current
      messageContainer.scrollBy({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [items])

  return (
    <div {...props} css={css({ display: "flex", flexDirection: "column" })}>
      <MessageContainer
        ref={messageContainerRef}
        items={items}
        css={css`
          ${scrollableStyle}
          padding: ${spacing.medium};
          flex: 1;
        `}
      />
      <div
        css={css`
          padding: ${spacing.medium};
        `}
      >
        <Form.Textarea
          rows={2}
          css={css`
            width: calc(100% - ${spacing.small} - ${spacing.small} - 2px);
            resize: none;
          `}
        />
        <Form.Button css={css({ width: "100%", marginTop: "8px" })}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Form.Button>
      </div>
    </div>
  )
}

export default Box
