import React, { useState } from "react"

export default function Icon(props: { name: string; style?: "outlined" | "filled" }) {
  const style: React.CSSProperties = {
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
