import React from "react"
import SpotifyLogo from "../spotify-logo"
import Logout from "../logout"
import "./style.css"

export default function Header() {
  return (
    <div className="header">
      <SpotifyLogo />
      <Logout />
    </div>
  )
}
