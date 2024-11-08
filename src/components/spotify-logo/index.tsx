import React from "react"
import spotifyLogoBlack from "../../assets/imgs/Spotify_Logo_RGB_Black.webp"
import spotifyLogoGreen from "../../assets/imgs/Spotify_Logo_RGB_Green.webp"
import spotifyLogoWhite from "../../assets/imgs/Spotify_Logo_RGB_White.webp"

type LogoColor = "black" | "green" | "white"
interface SpotifyLogoProps {
  color: LogoColor
  position?: "start" | "center" | "end"
}

export default function SpotifyLogo(props: SpotifyLogoProps) {
  const logos: Record<LogoColor, string> = {
    green: spotifyLogoGreen,
    black: spotifyLogoBlack,
    white: spotifyLogoWhite,
  }
  return (
    <div
      className="logo-container"
      style={{ display: "flex", justifyContent: props.position ?? "start" }}
    >
      <img
        className="spotify-logo"
        src={logos[props.color]}
        width={80}
        alt="spotify-logo"
        loading="lazy"
      />
    </div>
  )
}
