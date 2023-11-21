import type { Meta, StoryObj } from "@storybook/react"
import type { Message } from "@/types"

import Container from "."

const items = [
  { id: "1", content: "Hey!", variant: "secondary" },
  { id: "2", content: "How are you?", variant: "secondary" },
  { id: "3", content: "Hellow", variant: "primary" },
  {
    id: "4",
    content: "Am good... And how about you dear??",
    variant: "primary",
  },
] satisfies Message[]

const meta = {
  args: { items },
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Chat/MessageContainer",
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { items },
}
