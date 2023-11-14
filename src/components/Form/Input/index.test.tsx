import { screen, renderWithTheme } from "@test/utils"
import { createRef } from "react"
import Input from "."

describe("Input", () => {
  it("contains the appropriate default value", () => {
    renderWithTheme(<Input data-testid="inputElement" defaultValue="testVal" />)
    expect(screen.getByTestId("inputElement")).toHaveValue("testVal")
  })

  it("forwards ref properly", () => {
    const ref = createRef<HTMLInputElement>()
    renderWithTheme(<Input ref={ref} defaultValue="testVal" />)
    expect(ref.current).toHaveValue("testVal")
  })
})
