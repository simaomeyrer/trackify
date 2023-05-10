import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  label: string
  routerLink?: string
  blockWidth?: boolean
}

export default function Button(props: ButtonProps) {
  const style = {
    width: "100%",
  }
  return (
    <>
      {props.routerLink ? (
        <Link to={props.routerLink}>
          <button style={props.blockWidth ? style : {}}>{props.label}</button>
        </Link>
      ) : (
        <button>{props.label}</button>
      )}
    </>
  )
}
