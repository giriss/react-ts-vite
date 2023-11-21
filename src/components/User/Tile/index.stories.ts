import type { Meta, StoryObj } from "@storybook/react"

import Tile from "."

const meta = {
  component: Tile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/User/Tile",
} satisfies Meta<typeof Tile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: "Neytiri te Tskaha Mo'at'ite",
    imgSrc:
      "https://res.cloudinary.com/dwln2chzi/image/upload/v1700563393/avatar_Cropped-min_qt1v5f.jpg",
  },
}
