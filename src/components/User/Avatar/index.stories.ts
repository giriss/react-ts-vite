import type { Meta, StoryObj } from "@storybook/react"

import Avatar from "."

const meta = {
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/User/Avatar",
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    imgSrc:
      "https://res.cloudinary.com/dwln2chzi/image/upload/v1700563393/avatar_Cropped-min_qt1v5f.jpg",
  },
}
