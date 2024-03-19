import React from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../icon/Icon"
import "./style.css"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <div className="back-button" onClick={() => navigate(-1)}>
      <Icon name="arrow_back" />
    </div>
  )
}
