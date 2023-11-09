import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BackButton from "../back-button"
import "./style.css"

export default function Header() {
  const route = useLocation()
  const navigate = useNavigate()
  const [path, setPath] = useState("")
  const excludedRoutes = ["/profile"]
  const showBackButton = !excludedRoutes.includes(route.pathname)

  function logOut() {
    window.localStorage.setItem("access_token", "")
    navigate("/")
  }

  useEffect(() => {
    const newPath = route.pathname.split("/")
    setPath(newPath[1])
  }, [route.pathname])

  return (
    <div className="header" style={showBackButton ? { justifyContent: "space-between" } : {}}>
      {showBackButton ? <BackButton /> : null}
      <div className="navigation">
        <h3
          className={`route ${path === "profile" ? "active" : null}`}
          onClick={() => navigate("/profile")}
        >
          Perfil
        </h3>
        <h3
          className={`route ${path === "about" ? "active" : null}`}
          onClick={() => navigate("/about")}
        >
          Sobre
        </h3>
        <h3
          className={`route ${path === "privacy-policy" ? "active" : null}`}
          onClick={() => navigate("/privacy-policy")}
        >
          Política de privacidade
        </h3>
        <h3 className={"route"} onClick={() => logOut()}>
          Sair
        </h3>
      </div>
    </div>
  )
}
