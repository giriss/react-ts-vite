import type { FC, HTMLProps } from "react"
import styled from "@emotion/styled"

interface AvatarBaseProps extends HTMLProps<HTMLDivElement> {
  imgSrc: string
}

const AvatarBase: FC<AvatarBaseProps> = ({ imgSrc, ...props }) => (
  <div {...props}>
    <img src={imgSrc} alt="avatar" />
  </div>
)

const Avatar = styled(AvatarBase)`
  width: 48px;
  height: 48px;
  border-radius: 32px;
  overflow: hidden;

  & > img {
    width: inherit;
    height: inherit;
  }
`

Avatar.displayName = "Avatar"

export default Avatar
