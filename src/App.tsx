import { type FC, useState, useCallback } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import classes from "./App.module.sass"

const App: FC = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <main className={classes.mainApp}>
      <Input value={count} />
      <Button onClick={increment}>Count: {count}</Button>
    </main>
  )
}

export default App
