import React from "react"
import spotifyLogo from "../../assets/imgs/Spotify_Logo_RGB_Black.png"

interface SpotifyLogoProps {
  position?: "start" | "center" | "end"
}

export default function SpotifyLogo(props: SpotifyLogoProps) {
  return (
    <div
      className="logo-container"
      style={{ display: "flex", justifyContent: props.position ?? "start" }}
    >
      <img className="spotify-logo" src={spotifyLogo} height={20} alt="" />
    </div>
  )
}
