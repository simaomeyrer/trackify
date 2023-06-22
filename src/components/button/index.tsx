import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  label: string
  disabled?: boolean
  routerLink?: string
  blockWidth?: boolean
  action?: () => void
}

export default function Button(props: ButtonProps) {
  const style = {
    width: "100%",
  }
  return (
    <>
      {props.routerLink ? (
        <Link to={props.routerLink}>
          <button
            onClick={() => props.action && props.action()}
            style={props.blockWidth ? style : {}}
            disabled={props.disabled}
          >
            {props.label}
          </button>
        </Link>
      ) : (
        <button
          onClick={() => props.action && props.action()}
          style={props.blockWidth ? style : {}}
          disabled={props.disabled}
        >
          {props.label}
        </button>
      )}
    </>
  )
}
