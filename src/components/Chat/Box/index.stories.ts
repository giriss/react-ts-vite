import type { Meta, StoryObj } from "@storybook/react"

import type { Message } from "@/types"
import Box from "."

const meta = {
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Chat/Box",
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { id: "1", content: "Hey man! 👋", variant: "primary" },
  { id: "2", content: "Hey 👋 what's up?", variant: "secondary" },
  {
    id: "3",
    content: "Are coming to the party 🎉 tomorrow?",
    variant: "primary",
  },
  { id: "4", content: "Sure! Why not? 🤷‍♂️", variant: "secondary" },
] satisfies Message[]

export const Primary: Story = { args: { items } }
