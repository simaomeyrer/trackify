import React from "react"
import SpotifyLogo from "../spotify-logo"
import Logout from "../logout"
import "./style.css"

export default function Header(props: { withLogo?: boolean }) {
  return (
    <div className="header" style={{ justifyContent: props.withLogo ? "space-between" : "end" }}>
      {props.withLogo && <SpotifyLogo color="black" />}
      <Logout />
    </div>
  )
}
