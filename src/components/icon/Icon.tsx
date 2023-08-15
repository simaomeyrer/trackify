import React, { useState } from "react"

export default function Icon(props: {
  name: string
  style?: "outlined" | "filled"
  color?: string
}) {
  const style: React.CSSProperties = {
    color: props.color ?? "#FFFFFF",
    fontVariationSettings: `'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48`,
  }

  return (
    <span style={style} className="material-symbols-outlined">
      {props.name}
    </span>
  )
}
