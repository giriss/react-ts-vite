import type { Meta, StoryObj } from "@storybook/react"

import Row from "."

const meta = {
  args: {
    children: "Default message",
  },
  component: Row,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Chat/Message",
} satisfies Meta<typeof Row>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary message",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary message",
  },
}
