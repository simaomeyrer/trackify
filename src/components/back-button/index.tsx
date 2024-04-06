import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../icon/Icon"
import "./style.css"

export default function BackButton() {
  const navigate = useNavigate()
  const [arrowColor, setArrowColor] = useState("")

  function setColor() {
    setArrowColor("--primary")
  }

  useEffect(() => {
    const element = document.getElementById("back-button")
    element?.addEventListener("mouseover", setColor)
    return () => {
      element?.removeEventListener("mouseover", setColor)
    }
  })

  return (
    <div id="back-button" className="back-button" onClick={() => navigate(-1)}>
      <Icon name="arrow_back" color={arrowColor} />
    </div>
  )
}
