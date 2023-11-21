import {
  type FC,
  type HTMLAttributes,
  type ChangeEventHandler,
  useState,
  useMemo,
  useCallback,
} from "react"
import { css } from "@emotion/react"

import { Styles } from "@/utils"
import type { User } from "@/types"
import Form from "../../Form"
import Tile from "../Tile"

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  items: User[]
}

const List: FC<ListProps> = ({ items, ...props }) => {
  const scrollableStyle = Styles.useScrollable()
  const [filter, setFilter] = useState("")
  const users = useMemo(
    () => items.filter(user => new RegExp(filter, "i").test(user.name)),
    [items, filter],
  )
  const filterUsers: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      setFilter(event.target.value.replace(/[^A-Za-z0-9 ]/g, ""))
    },
    [],
  )

  return (
    <div {...props} css={css({ display: "flex", flexDirection: "column" })}>
      <div css={({ spacing }) => css({ padding: spacing.small })}>
        <Form.Input
          placeholder="Search..."
          value={filter}
          onChange={filterUsers}
          css={({ spacing }) =>
            css({
              width: `calc(100% - ${spacing.small} - ${spacing.small} - 2px)`,
            })
          }
        />
      </div>
      <section css={css(scrollableStyle, { flex: 1 })}>
        {users.map(user => (
          <Tile key={user.id} imgSrc={user.avatar} name={user.name} />
        ))}
      </section>
    </div>
  )
}

export default List
