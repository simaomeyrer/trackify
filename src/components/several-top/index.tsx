import React from "react"
import { SeveralTopProps } from "./types"
import "./style.css"

export default function SeveralTop(props: SeveralTopProps) {
  return (
    <div className="several-top" onClick={() => window.open(props.externalLink, "_blank")}>
      <div className="track-infos">
        <div className="position">
          {(props.position || props.position == 0) && (
            <h4 className="position-number">
              {props.position < 9 && `0`}
              {props.position + 1}
            </h4>
          )}
        </div>
        {props.image && (
          <img className="image" src={props.image} height={45} width={45} alt="track-image"></img>
        )}
        <div className="description">
          <h4 className="name">{props.name}</h4>
          {props.artists && (
            <small className="artist-name">
              {props.artists.map((artist) => artist.name).join(", ")}
            </small>
          )}
        </div>
      </div>
    </div>
  )
}
