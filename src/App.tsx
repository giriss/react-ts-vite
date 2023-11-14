import { type FC, useState, useCallback, type HTMLProps } from "react"
import styled from "@emotion/styled"

import Form from "@@/Form"
import Flexbox from "@@/Flexbox"

const BaseApp: FC<HTMLProps<HTMLElement>> = props => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <main {...props}>
      <Flexbox.Row>
        <Flexbox.Column>
          <Form.Textarea rows={3} readOnly value={count} />
        </Flexbox.Column>
        <Flexbox.Column flex={1.5}>
          <Form.Button onClick={increment}>Count: {count}</Form.Button>
        </Flexbox.Column>
        <Flexbox.Column>
          <Form.Button>Test</Form.Button>
        </Flexbox.Column>
      </Flexbox.Row>
    </main>
  )
}

const App = styled(BaseApp)`
  margin: ${({ theme }) => theme.spacing.large};
`

App.displayName = "App"

export default App
