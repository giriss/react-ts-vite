import { screen, render } from "@testing-library/react"
import Button from "."

describe("Button", () => {
  it("shows the proper text", () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText("Test Button")).toBeInTheDocument()
  })
})
