import { type FC, useState, useCallback } from "react"
import { css } from "@emotion/react"

import Form from "@@/Form"
import Flexbox from "@@/Flexbox"
import Chat from "@@/Chat"
import Scrollable from "@@/Scrollable"

const App: FC = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <Flexbox.Row css={css({ height: "100vh" })}>
      <Scrollable>
        {css => (
          <Flexbox.Column css={css}>
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/rrv6gfnzswwcc42j8t6x"
              name="Girish Gopaul"
            />
            <Chat.Tile
              imgSrc="https://res.cloudinary.com/dwln2chzi/image/upload/c_thumb,g_face,w_250,h_250/lyroenfhafmue8qwp9we"
              name="Kiara Advani"
            />
          </Flexbox.Column>
        )}
      </Scrollable>
      <Flexbox.Column flex={2}>
        <Form.Button onClick={increment}>Count: {count}</Form.Button>
      </Flexbox.Column>
      <Flexbox.Column>
        <Form.Button>Test</Form.Button>
      </Flexbox.Column>
    </Flexbox.Row>
  )
}

export default App
