import React, { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { sessionStore } from "../../store/session"
import { auth, redirectToAuthCodeFlow } from "../../services/auth"
import AccessDenied from "../denied"
import spotifyLogo from "../../assets/imgs/Spotify_Icon_RGB_Green.webp"
import { useTranslation } from "react-i18next"
import "./styles.css"

export default function Home() {
  const { t } = useTranslation()
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
      <a className="home-logo" href="https://spotify.com.br" target="_blank">
        <img src={spotifyLogo} alt="spotify_logo" loading="lazy" />
      </a>
      <h1>Top Tunes Discover</h1>
      <div className="home-text">
        <h3>{t("Veja suas músicas, artistas mais ouvidos e muito mais")}</h3>
      </div>
      <button onClick={async () => await getAuth()}>{t("Começar")}</button>
    </div>
  ) : (
    <AccessDenied />
  )
}
