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
    <div className="home">
      <div className="home-logo" />
      <h1>Trackify</h1>
      <div className="home-text">
        <h3>Veja suas músicas e artistas mais ouvidos do mês</h3>
      </div>
      <button onClick={async () => await getAuth()}>Iniciar</button>
    </div>
  ) : (
    <AccessDenied />
  )
}
