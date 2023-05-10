import React from "react"
import { Artist } from "../../services/profile/track/types"
import "./style.css"

interface SeveralTopProps {
  type: "tracks" | "artists"
  name: string
  position: number
  artists?: Artist[]
}

export default function SeveralTop(props: SeveralTopProps) {
  return (
    <div className="several-top">
      <div className="position">
        <h3 className="position-number">
          {props.position < 9 && `0`}
          {props.position + 1}
        </h3>
      </div>
      <div className="description">
        <h4 className="name">{props.name}</h4>
        {props.artists && (
          <small className="artist-name">
            {props.artists.map((artist) => artist.name).join(", ")}
          </small>
        )}
      </div>
    </div>
  )
}
