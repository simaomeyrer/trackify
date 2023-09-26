import React from "react"
import spotifyLogoBlack from "../../assets/imgs/Spotify_Logo_RGB_Black.png"
import spotifyLogoGreen from "../../assets/imgs/Spotify_Logo_RGB_Green.png"

interface SpotifyLogoProps {
  position?: "start" | "center" | "end"
  color?: "black" | "green"
}

export default function SpotifyLogo(props: SpotifyLogoProps) {
  return (
    <div
      className="logo-container"
      style={{ display: "flex", justifyContent: props.position ?? "start" }}
    >
      <img
        className="spotify-logo"
        src={props.color === "green" ? spotifyLogoGreen : spotifyLogoBlack}
        width={80}
        alt="spotify-logo"
      />
    </div>
  )
}
