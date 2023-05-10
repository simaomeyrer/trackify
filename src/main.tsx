import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import "./index.css"
import Icon from "./components/Icon"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div className="footer">
      Trackify
      <Icon name="speaker" />
    </div>
  </React.StrictMode>
)
