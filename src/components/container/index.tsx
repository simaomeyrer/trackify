import React from "react"
import "./style.css"

export default function Container(props: React.PropsWithChildren) {
  return <div className="container-wrapper">{props.children}</div>
}
