import React, { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { sessionStore } from "../../store/session"
import { auth, redirectToAuthCodeFlow } from "../../services/auth"
import AccessDenied from "../denied"
import "./styles.css"

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [session, setSession] = useRecoilState(sessionStore)
  const navigate = useNavigate()
  const error = searchParams.get("error")

  async function getAuth() {
    redirectToAuthCodeFlow()
  }

  useEffect(() => {
    async function authFetch() {
      const token = searchParams.get("code")

      if (token) {
        const accessToken = await auth(token)
        if (accessToken) {
          setSession({ accessToken })
          localStorage.setItem("access_token", accessToken)
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
