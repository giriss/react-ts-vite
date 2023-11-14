import type { Meta, StoryObj } from "@storybook/react"
import Input from "."

const meta: Meta<typeof Input> = {
  args: {
    placeholder: "Default input",
  },
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Form/Input",
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
