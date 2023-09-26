import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default function AccessDenied() {
  return (
    <div className="access-denied">
      <h1> {`:(`} </h1>
      <h3>Que pena que você não concedeu acesso</h3>
      <Link to={"/"}>vamos tentar novamente</Link>
    </div>
  )
}
