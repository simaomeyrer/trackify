import React from "react"
import Icon from "../icon/Icon"
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom"

export default function BackButton() {
  const navigate = useNavigate()

  return (
    <div className="back-button" onClick={() => navigate(-1)}>
      <Icon name="arrow_back" />
    </div>
  )
}
