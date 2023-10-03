import React from "react"
import Logout from "../logout"
import BackButton from "../back-button"
import { useLocation } from "react-router-dom"
import "./style.css"

export default function Header() {
  const route = useLocation()
  const excludedRoutes = ["/profile"]
  const showBackButton = !excludedRoutes.includes(route.pathname)

  return (
    <div className="header" style={showBackButton ? {} : { justifyContent: "flex-end" }}>
      {showBackButton && <BackButton />}
      <Logout />
    </div>
  )
}
