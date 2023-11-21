import type { Meta, StoryObj } from "@storybook/react"

import type { User } from "@/types"
import Tile from "."

const meta = {
  component: Tile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/User/List",
} satisfies Meta<typeof Tile>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    id: "1",
    name: "Neytiri te Tskaha Mo'at'ite",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/v1700563393/avatar_Cropped-min_qt1v5f.jpg",
  },
  {
    id: "2",
    name: "Jake Sully",
    avatar:
      "https://res.cloudinary.com/dwln2chzi/image/upload/v1700563922/actor-jake-sully-624298_large_Cropped_chcpmp.jpg",
  },
] satisfies User[]

export const Primary: Story = {
  args: { items },
}
