import React from "react"
import { BarLoader } from "react-spinners"
import "./style.css"

export default function LoadingSpinner() {
  return (
    <div className="sweet-loading">
      <BarLoader color={"#4E9F3D"} loading={true} />
    </div>
  )
}
