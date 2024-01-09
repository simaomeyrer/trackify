import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  label: string
  disabled?: boolean
  routerLink?: string
  blockWidth?: boolean
  variant?: "primary" | "success"
  action?: () => void
}

export default function Button(props: ButtonProps) {
  const style: React.CSSProperties = {
    width: props.blockWidth ? "100%" : "",
    backgroundColor: props.variant && "var(--primary)",
  }
  return (
    <>
      {props.routerLink ? (
        <Link to={props.routerLink}>
          <button
            onClick={() => props.action && props.action()}
            style={style}
            disabled={props.disabled}
          >
            {props.label}
          </button>
        </Link>
      ) : (
        <button
          onClick={() => props.action && props.action()}
          style={style}
          disabled={props.disabled}
        >
          {props.label}
        </button>
      )}
    </>
  )
}
