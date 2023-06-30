import React from "react"
import "./style.css"
import { SeveralTopProps } from "./types"

export default function SeveralTop(props: SeveralTopProps) {
  return (
    <div className="several-top">
      <div className="position">
        {(props.position || props.position == 0) && (
          <h3 className="position-number">
            {props.position < 9 && `0`}
            {props.position + 1}
          </h3>
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
  )
}
