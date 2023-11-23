import { lazy, type FC } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(async () => await import("@/pages/Home")),
  },
  {
    path: "/auth",
    Component: lazy(async () => await import("@/pages/Auth")),
  },
])

const App: FC = () => <RouterProvider router={router} />

export default App
