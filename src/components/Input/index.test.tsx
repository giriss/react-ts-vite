import { screen, render } from "@testing-library/react"
import { createRef } from "react"
import Input from "."

describe("Input", () => {
  it("contains the appropriate default value", () => {
    render(<Input data-testid="inputElement" defaultValue="testVal" />)
    expect(screen.getByTestId("inputElement")).toHaveValue("testVal")
  })

  it("forwards ref properly", () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input ref={ref} defaultValue="testVal" />)
    expect(ref.current).toHaveValue("testVal")
  })
})
