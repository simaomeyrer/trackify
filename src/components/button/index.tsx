import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  label: string
  disabled?: boolean
  routerLink?: string
  blockWidth?: boolean
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "inverted"
  action?: () => void
}

export default function Button(props: ButtonProps) {
  const buttonVariants = {
    primary: "--primary",
    secondary: "--secondary",
    success: "--success",
    danger: "--danger",
    warning: "--warning",
    inverted: "--inverted",
  }
  const style: React.CSSProperties = {
    width: props.blockWidth ? "100%" : "unset",
    backgroundColor: props.variant && `var(${buttonVariants[props.variant]})`,
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
