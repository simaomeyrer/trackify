import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { router } from "./router"
import Icon from "./components/icon/Icon"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
      <footer className="footer">
        Trackify
        <Icon name="speaker" />
      </footer>
    </RecoilRoot>
  </React.StrictMode>
)
