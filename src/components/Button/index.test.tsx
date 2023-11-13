import { screen, renderWithTheme } from "@test/utils"
import Button from "."

describe("Button", () => {
  it("shows the proper text", () => {
    renderWithTheme(<Button>Test Button</Button>)
    expect(screen.getByText("Test Button")).toBeInTheDocument()
  })
})
