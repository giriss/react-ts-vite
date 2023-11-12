import type { Meta, StoryObj } from "@storybook/react"
import Input, { type InputProps } from "."

const meta: Meta<InputProps> = {
  args: {
    placeholder: "Default input",
  },
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Input",
}

export default meta
type Story = StoryObj<Meta<InputProps>>

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
