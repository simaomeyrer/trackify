import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { router } from "./router"
import Container from "./components/container"
import LoadingSpinner from "./components/loading-spinner"
import "./index.css"
import "./i18n"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </Container>
    </RecoilRoot>
  </React.StrictMode>
)
