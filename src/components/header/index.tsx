import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BackButton from "../back-button"
import { t } from "i18next"
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
        <h5
          className={`route ${path === "profile" ? "active" : null}`}
          onClick={() => navigate("/profile")}
        >
          {t("Perfil")}
        </h5>
        <h5
          className={`route ${path === "about" ? "active" : null}`}
          onClick={() => navigate("/about")}
        >
          {t("Sobre")}
        </h5>
        <h5
          className={`route ${path === "blog" ? "active" : null}`}
          onClick={() => navigate("/blog")}
        >
          Blog
        </h5>
        <h5
          className={`route ${path === "privacy-policy" ? "active" : null}`}
          onClick={() => navigate("/privacy-policy")}
        >
          {t("Políticas")}
        </h5>
        <h5 className={"route"} onClick={() => logOut()}>
          Sair
        </h5>
      </div>
    </div>
  )
}
