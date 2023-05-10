import React, { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { OSColorScheme } from "../../helpers/colorSchemeDetector"
import { auth, redirectToAuthCodeFlow } from "../../services/auth"
import darkIcon from "./../../assets/imgs/darkIcon.png"
import lightIcon from "./../../assets/imgs/lightIcon.png"
import AccessDenied from "../denied"
import "./styles.css"

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const image = OSColorScheme() === "dark" ? darkIcon : lightIcon
  const error = searchParams.get("error")

  async function getAuth() {
    redirectToAuthCodeFlow()
  }

  useEffect(() => {
    async function authFetch() {
      const token = searchParams.get("code")

      if (token) {
        const access_token = await auth(token)
        if (access_token) {
          localStorage.setItem("access_token", access_token)
          navigate("/profile")
        }
      }
    }
    authFetch()
  })

  return error !== "access_denied" ? (
    <div className="container home">
      <div className="container-logo" />
      <h1>Trackify</h1>
      <h3>Gere playlists com suas músicas mais ouvidas e mais</h3>
      <button onClick={async () => await getAuth()}>Iniciar</button>
    </div>
  ) : (
    <AccessDenied />
  )
}
