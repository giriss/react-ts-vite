import { type FC, useState, useCallback, type HTMLProps } from "react"
import styled from "@emotion/styled"

import Button from "./components/Button"
import Input from "./components/Input"

const BaseApp: FC<HTMLProps<HTMLElement>> = props => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <main {...props}>
      <Input readOnly value={count} />
      &nbsp;
      <Button onClick={increment}>Count: {count}</Button>
    </main>
  )
}

const App = styled(BaseApp)`
  margin: 20px;
`

App.displayName = "App"

export default App
