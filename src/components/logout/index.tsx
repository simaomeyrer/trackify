import React from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../icon/Icon"
import "./style.css"

export default function Logout() {
  const navigate = useNavigate()

  function logOut() {
    window.localStorage.setItem("access_token", "")
    navigate("/")
  }
  return (
    <div className="logout" onClick={() => logOut()}>
      <Icon name="close" color="#000000" />
    </div>
  )
}
