import type { FC, HTMLAttributes } from "react"
import { css } from "@emotion/react"

import Avatar from "../Avatar"

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  name: string
}

const Tile: FC<TileProps> = ({ imgSrc, name, ...props }) => (
  <div
    {...props}
    css={({ spacing: { small }, colors: { secondary } }) => css`
      display: flex;
      padding: ${small};
      :not(:last-of-type) {
        border-bottom: solid 1px ${secondary[100]};
      }
      :hover {
        cursor: pointer;
        background-color: ${secondary[300]};
      }
    `}
  >
    <Avatar imgSrc={imgSrc} />
    <div
      css={({ spacing: { small } }) => css`
        flex: 1;
        align-self: center;
        padding-left: ${small};
      `}
    >
      {name}
    </div>
  </div>
)

export default Tile
