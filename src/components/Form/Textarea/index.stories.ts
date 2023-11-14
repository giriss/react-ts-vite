import type { Meta, StoryObj } from "@storybook/react"
import Textarea from "."

const meta: Meta<typeof Textarea> = {
  args: {
    placeholder: "Default input",
  },
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Form/Textarea",
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: "Primary input",
  },
}

export const Secondary: Story = {
  args: {
    placeholder: "Secondary input",
    variant: "secondary",
  },
}
