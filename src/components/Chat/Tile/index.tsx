import type { ComponentProps, FC } from "react"
import { css } from "@emotion/react"
import Flexbox from "../../Flexbox"
import Avatar from "../Avatar"

interface TileProps extends ComponentProps<typeof Flexbox.Row> {
  imgSrc: string
  name: string
}

const Tile: FC<TileProps> = ({ imgSrc, name, ...props }) => {
  return (
    <Flexbox.Row
      {...props}
      css={({ spacing: { small }, colors: { secondary } }) => css`
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
      <Flexbox.Column
        css={({ spacing: { small } }) => css`
          display: flex;
          flex-direction: column;
          align-self: center;
          padding-left: ${small};
        `}
      >
        {name}
      </Flexbox.Column>
    </Flexbox.Row>
  )
}

export default Tile
