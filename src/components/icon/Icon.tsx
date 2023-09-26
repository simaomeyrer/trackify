import React, { useState } from "react"

export default function Icon(props: { name: string; color?: string }) {
  const style: React.CSSProperties = {
    color: props.color ?? "#FFFFFF",
    fontVariationSettings: `'FILL',
    'wght' 500,
    'GRAD' 0,
    'opsz' 48`,
  }

  return (
    <span style={style} className="material-symbols-outlined">
      {props.name}
    </span>
  )
}
