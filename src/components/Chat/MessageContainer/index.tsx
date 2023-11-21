import type { Message as MessageType } from "@/types"
import { forwardRef, type HTMLProps } from "react"

import Message from "../Message"

interface MessageContainerProps extends HTMLProps<HTMLDivElement> {
  items: MessageType[]
}

const MessageContainer = forwardRef<HTMLDivElement, MessageContainerProps>(
  ({ items, ...props }, ref) => (
    <div ref={ref} {...props}>
      {items.map(({ id, content, variant }) => (
        <Message key={id} variant={variant}>
          {content}
        </Message>
      ))}
    </div>
  ),
)

MessageContainer.displayName = "MessageContainer"

export default MessageContainer
