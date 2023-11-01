import React, { ReactNode } from "react"
import "./style.css"
import Icon from "../icon/Icon"

interface ModalProps {
  show: boolean
  onClose?: () => void
  children?: string | React.ReactNode
}

const Header = ({ children }: React.PropsWithChildren) => {
  return <div className="modal-header">{children}</div>
}

const Content = ({ children }: React.PropsWithChildren) => {
  return <div className="modal-body">{children}</div>
}

const Footer = ({ children }: React.PropsWithChildren) => {
  return <div className="modal-footer">{children}</div>
}

const Modal = (props: ModalProps) => {
  console.log("showed", props.show)
  return (
    <div className={`modal ${props.show ? "show" : ""}`}>
      <div className="modal-content">{props.children}</div>
    </div>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

export default Modal
